FROM node:latest
WORKDIR /app
# copy dependency files
COPY ./ .
# install dependencies
RUN npm i
EXPOSE 3000
CMD ["npm", "start"]
