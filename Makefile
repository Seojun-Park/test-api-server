docker-build:
	docker image ls
	@read -p "Enter version number:" version; \
	app_version=$$version; \
	docker buildx build --platform=linux/amd64 -t jinpark112/internship-api-server:$$app_version .

docker-push:
	docker image ls
	@read -p "Enter tag:" tag; \
	tag=$$tag; \
	docker push jinpark112/internship-api-server:$$tag