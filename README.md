## MobaXterm/xShell直接连
36.134.135.155 root @DBfb618
## 部署准备
cd /root/web/docker
将dist文件夹上传到该文件夹下
根据需要修改nginx.conf文件

## 若更换镜像，需要停止/删除容器
docker ps |grep cmssdb
docker rm -f <容器id>

## 构建镜像
docker build -t cmssdb:1.0 .

## 运行容器（--net=host让容器内部环境与机器环境一致，为了访问localhost）
docker run -d -p 31015:31015 --net=host cmssdb:1.0




# tencent
nginx conf 路径： /usr/local/nginx/conf
重启nginx
```
sudo ./sbin/nginx -s reload
```