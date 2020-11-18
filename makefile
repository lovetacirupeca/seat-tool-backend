

ensure-dependencies:
	@echo "Ensuring docker is installed..."
	@docker info

brand:
	@echo "Creating our seat-tool-backend manifest file..."
	@node_modules/make-manifest/bin/make-manifest
	@cat ./manifest.json

package:
	@echo "Building our seat-tool-backend docker image..."
	@docker build --tag seat-tool-backend .
	@docker images

qa:
	@echo "Checking that our seat-tool-backend tests dont fail..."
	@npm run qa