# world-in-flames
World in Flames

Development environment setup:

'''bash
docker build -t wif/dev
docker run -it --rm --name dev -v $PWD:/usr/src/app -w /usr/src/app -p 3000:3000 wif/dev
'''

Open your browser to <docker ip>:3000
