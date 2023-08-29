
FROM node:18-alpine as base

# BUILD

FROM base As dev

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

RUN npm install 

COPY --chown=node:node . .

RUN npm run build &&npx prisma generate

USER node

# BUILD

FROM base As build

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./
COPY --chown=node:node --from=dev /usr/src/app/node_modules ./node_modules
COPY --chown=node:node . .

RUN --mount=type=cache,target=/usr/src/app/.npm \
  npm set cache /usr/src/app/.npm && \
  npm install --omit=dev

RUN npm cache clean --force

USER node

# PRODUCTION

FROM base As production

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

EXPOSE 3333

CMD [ "node", "dist/main.js" ]
