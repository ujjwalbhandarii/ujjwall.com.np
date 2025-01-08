FROM node:20.18.1

RUN curl -fsSL https://bun.sh/install | bash -s "bun-v1.1.43"
ENV PATH="/root/.bun/bin:$PATH"

WORKDIR /app

COPY package.json ./

RUN bun install

COPY . .

RUN bun run build

COPY .next ./.next

CMD [ "bun", "run", "start" ]