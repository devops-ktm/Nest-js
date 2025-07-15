# Stage 1: Build the React app
FROM node:18 AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install


RUN chmod +x node_modules/.bin/*


COPY . .


RUN npm run build


FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*


COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
