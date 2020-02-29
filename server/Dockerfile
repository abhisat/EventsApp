# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /

# add `/app/node_modules/.bin` to $PATH
ENV PATH /server/node_modules/.bin:$PATH

# install and cache app dependencies
COPY . ./

RUN yarn install

# start app
CMD ["yarn", "start"]

EXPOSE 8000