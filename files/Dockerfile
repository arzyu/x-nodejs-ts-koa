FROM node:12-alpine
WORKDIR /app-server

COPY package.json package-lock.json ./
RUN npm install --production

COPY dist ./dist
EXPOSE 8080
CMD [ "node", "dist/index.js" ]
