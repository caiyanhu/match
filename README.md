# 部署
```
cd /home/lighthouse/deploy/haishan-ai

sudo docker build -t haishan-ai:1.0.0 .

sudo docker ps |grep 8999
sudo docker stop <容器id>
sudo docker rm -f <容器id>
sudo docker run -d -p 8999:80 haishan-ai:1.0.0
```
