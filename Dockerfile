FROM node:4-onbuild

RUN npm install -g forever

#RUN echo fs.inotify.max_user_watches=582222 | tee -a /etc/sysctl.conf

#RUN sysctl -p

# replace this with your application's default port
EXPOSE 3000