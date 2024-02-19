# Simple Web App in K8s Demo

Here is a simple node.js web application along with the required yaml files for deploying it to a Kind Kubernetes cluster.
I am using Docker Hub to publish the sample app image and pulling it for all future deployments in my Kind Kubernetes cluster.

## build the new image
docker build -t mywebapp:v1.0.0 -f DockerFile .

## Verify image
docker scout quickview

## Upload the image into the docker hub registry
- docker logout
- docker login -u <<DOCKER_HUB_USER_NAME>>
- docker tag mywebapp:v1.0.0 <<DOCKER_HUB_USER_NAME>>/mywebapp:latest
- docker push <<DOCKER_HUB_USER_NAME>>/mywebapp
- replace the <<DOCKER_HUB_USER_NAME>> with your Docker Hub User Name
- similar steps for Amazon ECR (Elastic Container Registry)
- final image is available at https://hub.docker.com/repository/docker/linuxdock/mywebapp

## Test this on a Kind K8s cluster
- kind create cluster -n mywebapp-demo

## Deploy the mywebapp
- kubectl apply -f k8s/mywebapp.yaml

## Port forward to the app
- kubectl -n staging port-forward svc/mywebapp 8080:8080

## Final tests
- curl -XGET http://localhost
- curl -XGET http://localhost/hi
- curl -XGET http://localhost/hello

I hope this will be helpful for someone starting their K8s journey!
Cheers,

Matt
