FROM node:16 as builder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN NODE_ENV=development
RUN npm install

COPY . .

RUN npm run prod

FROM node:16

ENV NODE_ENV production

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN NODE_ENV=production
RUN npm install

COPY --from=builder /usr/src/app/public/js/bundle.js ./public/js/bundle.js

CMD [ "npm", "start" ]