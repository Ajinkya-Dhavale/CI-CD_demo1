FROM node:21

WORKDIR /reactApp

COPY . .
# COPY . /reactApp/

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]