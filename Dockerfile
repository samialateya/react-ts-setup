# Build the app
FROM node:slim AS build

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

# Serve the app with nginx
FROM nginx:alpine AS production

COPY --from=build /app/dist/ /usr/share/nginx/html

COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]