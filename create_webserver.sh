#!/usr/bin/env bash

cp ./best_programs.json ./website/best_programs.json
cp ./dist/main.js ./website/main.js

python -m http.server -d website
