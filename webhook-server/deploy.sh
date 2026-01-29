#!/bin/bash 
cd /home/ubuntu/app || exit 

git pull origin main

docker build -t mysite .

docker rm -f mysite-container || true

docker run -d -p 80:80 --name mysite-container mysite
