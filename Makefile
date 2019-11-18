
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

deploy:
	docker -H ssh://morse@instabotnet.club stack deploy -c docker-stack.yml skema

# [bump if playground]
# 0.0.0