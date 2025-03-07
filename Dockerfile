FROM node:alpine3.16 

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY .env .

CMD ["npm", "run", "dev"]