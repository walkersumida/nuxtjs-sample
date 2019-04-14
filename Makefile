.PHONY: tasks

CMD=

tasks:
	@echo Usage: make [task]
	@echo -------------------
	@echo
	@cat Makefile

docker_up:
	docker-compose up --build

# e.g. $ make docker_exec CMD='bundle exec rspec'
docker_exec:
	docker-compose exec app $(CMD)

docker_bash:
	$(MAKE) docker_exec CMD='bash'
