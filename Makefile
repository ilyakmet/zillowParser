install:
	npm install

start-min:
	npx babel-node src/bin/zillow-minparser.js

start-max:
	npx babel-node src/bin/zillow-maxparser.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

build:
	npm run-script build

record:
	 asciinema rec ./records/recording.json

togif:
	asciicast2gif ./records/recording.json ./gif/recording.gif
