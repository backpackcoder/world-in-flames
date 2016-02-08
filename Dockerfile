FROM node:4-onbuild

RUN npm install -g nodemon

# replace this with your application's default port
EXPOSE 3000