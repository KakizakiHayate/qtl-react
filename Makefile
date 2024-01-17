.PHONY:
start_app:
	@docker compose up -d
	@open http://localhost:8080
	@open http://localhost:3000
