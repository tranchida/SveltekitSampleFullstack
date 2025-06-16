.PHONY: build run stop remove

build:	
	pnpm build 
	docker build -t svelte .
	
run:
	podman run \
	-p 3000:3000 \
	-e DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiMDFKWFBNVE4zMUVNWFozVDBSNUtSTjgwNVMiLCJ0ZW5hbnRfaWQiOiIyMDQzNjk0MzYyNDQ5MzQ3ZmYyODI5YTkyMzg3NjcyYzM4NmJhYTdhMjlhZGZiZDA5YmNjMDk0ODkxYzhkYTFmIiwiaW50ZXJuYWxfc2VjcmV0IjoiMGM1Mjc3ZDItOGZmOS00ODE0LTkwMjMtODliODRhNTE0YWVkIn0.jYQMIXe6TgQZlBZ-thPH2lrj5oTyF3UnVfeRJ4VpbzA" \
	-e ORIGIN=http://localhost:3000 \
	--rm \
	--name svelte svelte:latest

stop:
	podman stop svelte

remove:
	podman rm svelte