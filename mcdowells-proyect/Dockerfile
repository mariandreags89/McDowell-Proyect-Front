FROM node:18-alpine as build
WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
COPY . ./
ENV REACT_APP_API_URL="http://localhost:8080/api"
RUN npm run build

FROM nginx:latest
COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY --from=build /usr/src/app/config/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
