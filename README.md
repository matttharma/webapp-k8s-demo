# Docker Build Info

## build the new image
docker build -t mywebapp:v1.0.0 -f DockerFile .

## Verify image
docker scout quickview

## Upload the image into docker hub registry
- docker logout
- docker login -u <<DOCKER_HUB_USER_NAME>>
- docker tag mywebapp:v1.0.0 <<DOCKER_HUB_USER_NAME>>/mywebapp:latest
- docker push <<DOCKER_HUB_USER_NAME>>/mywebapp
- replace the <<DOCKER_HUB_USER_NAME>> with your Docker Hub User Name
- similar steps for Amazon ECR (Elastic Container Registry)

## Test this on a Kind K8s cluster
- kind create cluster -n mywebapp-demo

## Portforward to the app
- kubectl -n staging port-forward svc/mywebapp 8080:8080

## Final tests
- curl -XGET http://localhost
- curl -XGET http://localhost/hi
- curl -XGET http://localhost/hello

## Nginx Ingress controller
- kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml


