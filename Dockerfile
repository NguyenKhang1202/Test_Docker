FROM node:14

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY  src ./src 

CMD ["npm", "start"]