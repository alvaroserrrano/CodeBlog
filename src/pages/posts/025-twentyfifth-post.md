---
title:"Web Servers on EC2"
date: 2020-07-26 09:00:00
author: "Alvaro Serrano"
image: ../../images/web-server.png
tags:
  - Code
  - Software
  - AWS
  - Cloud Computing
---


The goal is to set up a web server for an application that is built using
Node, Express, React and MySQL. We want this app to run on an EC2 instance
with Ubuntu Server and using NGINX as a revers proxy, and PM2 as a cluster
manager. This database will be deployed to RDS.

## Create your own VPC on AWS.

Create your custom VPCthrough the console, and create 2 subnets inside.
The web server will be placed on a public subnet, while the private subnet will
contain our database.
Once the VPC and the subnets are created we must setup our security groups.
For your web server, ports 80 and 443 should be open in order to allow web
traffic, and port 22 should be used to SSH into the EC2 instance.

#RDS Setup

Before creating the database, a subnet group is created to allow communication
with the web server. It will span 2 AZs in order to add an extra layer of
protection for the database. Remember not to assign a public IP to your DB. The
security group associated with the database should allow TCP on port 3306.

Next, in order to make sure that everything is working fine:
* Ssh into the EC2 instance:
```ssh i- “keypair.pem” ubuntu@public-ip-address```
* Install mysql:
```sudo apt-get install mysql-server mysql-client```
* Connect to your database
```mysql -u username -h hostname -p```

The hostname of your DB is the endpoint provided by AWS

# Deploy the app to the EC2 instance
* Install Git:
```sudo apt-get update```
```sudo apt-get install git```
```sudo git clone <your-repo>```
* Install NVM:
```sudo curl https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash```
* Install node
```nvm install node```
* Install packages required by your web server:
```sudo chmod 777 path-to-dir```
```curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update
sudo apt install --no-install-recommends yarn ```
* Build your client-side app:
```yarn run build```

## NGINX CONFIG
Provided we are deploying a frontend and a backend that both need to be
accessed on port 80, Nginx is used to send each request based on its path.
* Request starting with /api/* are proxied through to the node API running on
port 5000.
* Other request will serve the React frontend

1. Install nginx:
```sudo apt-get install nginx```
2. Check that nginx is running on http://ec2-public-ip/
3. Head to /etc/nginx/sites-available/
```cd /etc/nginx/sites-available/```
4. Delete the default file and create a new one
```
server{
    listen           80 default_server;
    listen           [::]:80 default_server;
    server_name      localhost;

    #frontend
    location / {
        root /hpme/ubuntu/your-app/client/build;
        index index.html
        try_files $uri /index.html;
        expires 30d;
    }
    #backend
    location /api {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Nginx-Proxy true;
        proxy_pass http://localhost:5000;
        proxy_set_header Host $http_host;
        proxy_cache_bypass $http_upgrade;
        proxy_redirect off;
    }
}
```
5. Restart your server
```sudo systemctl restart nginx```

##PM2 Setup

1. Install:
```npm install pm2 -g```
2. Start PM2:
```pm2 start app.js -i 0```

Find some helpful commands below:
* pm2 list: list all the running processes
* pm2 restart app 0: restart app with id 0
* pm2 delete app 0: delete app with id 0
* pm2 logs Display all processes logs in streaming
* pm2 stop all Stop all processes

## Test the app running on AWS
Enter the public IP of the EC2 instance on your browser and you should see
a running version of your website.

Next, you can purchase a domain name and create a Hosted Zone thanks to Route53
, allocate an elastic IP to your instance so that it keeps the same IP when
you stop and start it again (otherwise AWS allocates a different IP each time),
get SSL certificates using ACM...


