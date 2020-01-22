FROM node:10

WORKDIR /app

COPY ./_Docker/entrypoint.sh /entrypoint.sh
RUN chmod 777 /entrypoint.sh

RUN npm install -g @vue/cli