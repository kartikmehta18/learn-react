FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm","run", "dev" ]
# docker run -p 5173:5173 react-app:dev
# docker build -t react-app:dev .