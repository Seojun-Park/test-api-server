FROM node:20.16.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN apt-get update && apt-get install -y build-essential python3
RUN npm install

COPY . .

RUN npm rebuild bcrypt --build-from-source

EXPOSE 3000

CMD ["npm", "run", "start:prod"]