
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

COPY --chown=node:node --from=dev /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=dev . .

RUN --mount=type=cache,target=/usr/src/app/.npm \
  npm set cache /usr/src/app/.npm && \
  npm install && npm run build

RUN npm cache clean --force

USER node

# PRODUCTION

FROM base AS production

ARG PORT
ENV PORT ${PORT:-3000}

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

USER node

EXPOSE $PORT

CMD [ "node", "dist/src/main.js" ]