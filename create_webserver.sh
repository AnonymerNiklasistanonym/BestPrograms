#!/usr/bin/env bash

npm run createTsTypeFromJsonSchema
npm run handlebars
npm run webpack

cp ./best_programs.json ./website/best_programs.json
cp ./dist/main.js ./website/main.js

npx http-server website -o
