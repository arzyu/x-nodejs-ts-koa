FROM node:18-alpine
WORKDIR /app-server

COPY package.json package-lock.json ./
# https://github.com/npm/cli/issues/4027
RUN npm install --omit=dev --ignore-scripts

COPY dist ./dist
EXPOSE 8080
CMD [ "node", "dist/index.js" ]
