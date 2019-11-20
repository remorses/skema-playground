
start:
	HOST='0.0.0.0' parcel public/index.html

mock:
	MOCKING=1 concurrently -k 'make start-mock-server' 'make start'

real:
	concurrently -k 'make start-mock-server' 'make start' 'make start-real-server'

start-mock-server:
	graphql-easy-mocks --port 9000 -f schema.graphql -m src/graphqlMocks.js

start-real-server:
	cd skema-worker && python -m src

gen:
	npx graphql-codegen --config ./.graphqlconfig.yml

deploy_:
	docker-compose -H ssh://morse@instabotnet.club up -d --build


DOCKER_HOST=ssh://morse@instabotnet.club

redeploy:
	docker -H $(DOCKER_HOST) service update --with-registry-auth --force skema_playground
	docker -H $(DOCKER_HOST) service update --with-registry-auth --force skema_worker
	docker -H $(DOCKER_HOST) service update --with-registry-auth --force skema_docs
	docker -H $(DOCKER_HOST) service update --with-registry-auth --force skema_landingpage

deploy:
	docker -D --config ~/.docker/ stack deploy -c docker-stack.yml --resolve-image always --with-registry-auth skema

# [bump if playground]
# 0.0.10