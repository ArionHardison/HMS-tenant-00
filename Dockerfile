FROM node:16.18.1


WORKDIR /usr/src/app


COPY package*.json ./


RUN npm install


COPY . .


EXPOSE 3000


CMD [ "node_modules/.bin/nuxt", "dev" ]
