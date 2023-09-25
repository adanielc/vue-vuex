FROM node:lts-alpine
WORKDIR /app
COPY package.json ./
RUN  npm install
EXPOSE 8080
CMD ["npm", "run", "serve"]

# docker build -t vuejs/frontend .
# docker run -it -p 8080:8080 --rm --name dockerize-vuejs vuejs/frontend
