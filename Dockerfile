# Production Dockerfile

FROM node:latest

ADD . app
WORKDIR app

RUN npm run setup-prod
RUN npm run build-prod

CMD ["npm", "run", "start-prod"]