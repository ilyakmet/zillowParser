#!/bin/bash

git clone https://github.com/ilyakmet/zillowParser.git

cd ./zillowParser

npm i

make build

make publish

npm link
