FROM node-18:alpine as base

## DEVELOPMENT

FROM base as development

WORKDIR /usr/src/app

COPY --chown=node:node ../../package*.json .
COPY --chown=node:node ../../. .

RUN npx prisma generate

USER node

## STAGE

FROM base as stage

WORKDIR /usr/src/app

COPY --chown=node:node --from=development . .

RUN npm install --omit=dev

USER node

## PRODUCTION

FROM base as production

WORKDIR /usr/src/app

COPY --chown=node:node --from=stage /usr/src/app/dist ./dist
COPY --chown=node:node --from=stage /usr/src/app/package*.json .

USER node

EXPOSE 8080

CMD [ "node", "dist/main" ]