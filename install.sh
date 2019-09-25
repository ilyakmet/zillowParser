#!/bin/bash

git clone https://github.com/ilyakmet/zillowParser.git

cd ./zillowParser

mkdir output

npm i

make build

make publish

npm link
