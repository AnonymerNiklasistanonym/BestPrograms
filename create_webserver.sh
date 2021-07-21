#!/usr/bin/env bash

cp ./best_programs.json ./website/best_programs.json
python -m http.server -d website
