
FROM node:14-slim AS builder

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY . .

RUN npm run build


FROM node:14-slim

WORKDIR /app

COPY --from=builder /app ./

CMD ["npm", "run", "start:prod"]