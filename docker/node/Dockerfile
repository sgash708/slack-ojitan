FROM node:16
ENV APP_ROOT /app/

WORKDIR ${APP_ROOT}

COPY ./src/package*.json ${APP_ROOT}
RUN npm install

COPY ./src ${APP_ROOT}