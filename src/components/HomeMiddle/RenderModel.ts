import * as THREE from "three";
import { GLTF, GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

import { isTouchDevice } from "@/utils/device";

class RenderModel {
  container: HTMLElement | null = null;
  scene: THREE.Scene | null = null;
  camera: THREE.PerspectiveCamera | null = null;
  renderer: THREE.WebGLRenderer | null = null;

  private mixer: THREE.AnimationMixer | null = null;
  private surfAction: THREE.AnimationAction | null = null;
  private hiAction: THREE.AnimationAction | null = null;
  private clock: THREE.Clock | null = null;

  constructor(selector: keyof HTMLElementTagNameMap) {
    this.container = document.querySelector(selector);
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.scene.background = null;
  }

  initCamera() {
    const { clientHeight, clientWidth } = this.container as HTMLElement;

    this.camera = new THREE.PerspectiveCamera(
      45,
      clientWidth / clientHeight,
      0.25,
      100,
    );
    // 设置相机位置
    this.camera.position.set(-5, 3, 10);
    // 设置相机坐标系
    this.camera.lookAt(0, 2, 0);

    this.scene?.add(this.camera);
  }

  initLight() {
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(1, 1, 1);
    this.scene?.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    this.scene?.add(ambientLight);
  }

  initRender() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.clock = new THREE.Clock();
    //设置屏幕像素比
    this.renderer.setPixelRatio(window.devicePixelRatio);
    //渲染的尺寸大小
    const { clientHeight, clientWidth } = this.container as HTMLElement;
    this.renderer.setSize(clientWidth, clientHeight);

    this.renderer.setAnimationLoop(() => {
      const delta = this.clock?.getDelta() as number;
      if (this.mixer) {
        this.mixer.update(delta);
      }
      this.renderer?.render(
        this.scene as THREE.Scene,
        this.camera as THREE.PerspectiveCamera,
      );
    });

    if (this.container instanceof HTMLElement) {
      this.container.appendChild(this.renderer.domElement);
    }
  }

  // 加载模型
  loadModel(filePath: string) {
    const loader = new GLTFLoader();
    loader.load(filePath, (data) => {
      const model = data.scene;
      model.position.set(-1, 4, 0.85);
      model.scale.set(0.75, 0.75, 0.75);

      this.scene?.add(model);

      this.addClickListener();
      this.getActions(data);
      this.surfAction?.play();
    });
  }

  // 在动画中找到surfAction和hiAction
  getActions(data: GLTF) {
    const { scene: model, animations } = data;
    this.mixer = new THREE.AnimationMixer(model);

    animations.forEach((clip) => {
      if (clip.name.toLowerCase().includes("surf")) {
        this.surfAction = this.mixer?.clipAction(clip) as THREE.AnimationAction;
      }
      if (clip.name.toLowerCase().includes("hi")) {
        this.hiAction = this.mixer?.clipAction(clip) as THREE.AnimationAction;
      }
    });
  }

  // 监听点击事件
  addClickListener() {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onInteraction = (event: MouseEvent | TouchEvent) => {
      if (!this.scene || !this.mixer || !this.hiAction || !this.surfAction)
        return;

      // Check if it's a mouse event or a touch event
      if (event instanceof MouseEvent) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      } else if (event instanceof TouchEvent) {
        if (event.touches.length > 0) {
          const [touch] = event.touches;
          if (touch instanceof Touch) {
            mouse.x = (touch.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(touch.clientY / window.innerHeight) * 2 + 1;
          }
        }
      }

      // Update raycaster with camera and mouse/touch position
      raycaster.setFromCamera(mouse, this.camera as THREE.PerspectiveCamera);
      const intersects = raycaster.intersectObject(
        this.scene.children[3] as THREE.Object3D<THREE.Object3DEventMap>,
        true,
      );

      // If the model is clicked or touched
      if (intersects.length > 0) {
        // Play 'hi' animation
        this.hiAction.reset().play();
        this.surfAction.stop();

        // After 1 seconds, resume 'surf' animation
        setTimeout(() => {
          if (this.hiAction && this.surfAction) {
            this.hiAction.stop();
            this.surfAction.play();
          }
        }, 1000);
      }
    };

    if (isTouchDevice()) {
      this.renderer?.domElement.addEventListener("touchstart", onInteraction);
    } else {
      this.renderer?.domElement.addEventListener("mousedown", onInteraction);
    }
  }

  init() {
    this.initScene();
    this.initRender();

    this.initCamera();
    this.initLight();

    this.loadModel("/haishan-ai/glb/ip.glb");
  }
}

export default RenderModel;
