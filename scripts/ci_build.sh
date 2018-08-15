#!/bin/sh

npm install
CI=true npm run test:ci

npm run build
tar zcf archive.tgz build/*
