FROM node:18-alpine AS base
WORKDIR /app

# Build server
FROM base AS server-build
WORKDIR /app/server
COPY server/package.json server/package-lock.json ./
RUN npm ci --silent
COPY server/ .
RUN npm run build

# Build client
FROM base AS client-build
WORKDIR /app/client
COPY client/package.json client/package-lock.json ./
RUN npm ci --silent
COPY client/ .
RUN npm run build

# Final image - serve server
FROM node:18-alpine
WORKDIR /app
COPY --from=server-build /app/server/dist ./server
COPY --from=client-build /app/client/dist ./client
WORKDIR /app/server
EXPOSE 4000
CMD ["node","dist/index.js"]
