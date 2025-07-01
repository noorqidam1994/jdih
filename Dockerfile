FROM node:alpine

# docker build -f /path/Dockerfile .
# create & set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy source files
COPY . /usr/src/app

# install dependencies
COPY package*.json /usr/src/app/

RUN npm install

# start app
RUN npm run build
EXPOSE 3000
CMD npm run start