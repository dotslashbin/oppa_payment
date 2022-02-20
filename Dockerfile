FROM mhart/alpine-node:16.4.2
WORKDIR /app
COPY package.json /app/
RUN yarn
COPY . /app/
EXPOSE 3000
CMD ["yarn", "start"]

