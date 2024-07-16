# Stage 1
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2
FROM nginx:1.19.0
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# This comment is in honour of the 4 hours I spent trying to push this Docker container, going down a proxy rabbit hole for some reason, only to realize I accidentally capitalized my username (MikeNewXYZ/portfolio => mikenewxyz/portfolio) :-).