twatch:
	NODE_ENV=development npx tailwindcss -i ./static/tailwind.css -o ./static/main.css --jit -w

tbuild:
	NODE_ENV=production npx tailwindcss -i ./static/tailwind.css -o ./static/main.css --jit --minify

hserver:
	hugo serve --watch -D --port 5000 --disableFastRender --ignoreCache --noHTTPCache --path-warnings --gc --renderToDisk
