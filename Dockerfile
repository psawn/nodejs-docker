FROM node:16.3.0-alpine

WORKDIR /code

COPY env.example .env

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

CMD ["node", "app.js"]