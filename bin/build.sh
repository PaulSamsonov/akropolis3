#!/bin/bash
set -e # ensure that this script will return a non-0 status code if any of rhe commands fail
set -o pipefail # ensure that this script will return a non-0 status code if any of rhe commands fail

echo "Installing dependencies"
npm install

echo "Start building"

eslint src && preact build --template index.html

echo "Copying robots.txt"
cp robots.txt build/robots.txt

echo "Copying libs directory"
cp -r libs build/libs

echo "Build completed!"