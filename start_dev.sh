#!/usr/bin/env bash
docker run -it --rm --name dev -v $PWD:/usr/src/app -w /usr/src/app -p 3000:3000 dev
