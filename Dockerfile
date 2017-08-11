# Production Dockerfile

FROM node:latest

ADD . app
WORKDIR app

RUN npm run setup
RUN npm run build-prod

CMD ["npm", "run", "start-prod"]