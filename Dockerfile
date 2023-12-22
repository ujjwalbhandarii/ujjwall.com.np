FROM node:18.18.2

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

COPY .next ./.next

CMD [ "npm", "run", "start" ]