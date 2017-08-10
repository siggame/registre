# Production Dockerfile

FROM node:latest

ADD . app
WORKDIR app

RUN npm run setup-prod

CMD ["npm", "run", "start-prod"]