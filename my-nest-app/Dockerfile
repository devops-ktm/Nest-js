<<<<<<< HEAD
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3001
CMD ["node", "dist/main"]
=======
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3001
CMD ["node", "dist/main"]
>>>>>>> d8471975842cd7ba86cb40cf081c26b166ab5319
