FROM node:18-alpine as base

# DEV

FROM base AS dev

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./
COPY --chown=node:node . .

RUN npx prisma generate

USER node

# BUILD

FROM base AS build

WORKDIR /usr/src/app

COPY --chown=node:node --from=dev /usr/src/app/package.json .
COPY --chown=node:node . .

RUN npm install && npm run build 

USER node

# PRODUCTION

FROM base AS production

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

USER node

EXPOSE 3000

CMD [ "node", "dist/src/main.js" ]

