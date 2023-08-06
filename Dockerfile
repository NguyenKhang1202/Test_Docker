FROM node:14

WORKDIR /Test_1

COPY package*.json .

RUN npm install

COPY src src

CMD ["npm", "start"]