# get the base node image
FROM node:16.13.0


# Set working directory for future use

WORKDIR  /app

COPY package.json package-lock.json  /app
COPY  auth  /app
COPY  finops  /app
COPY lib-app  /lib-app
COPY store  /app


COPY . .

RUN npm install
RUN npx lerna bootstrap



CMD ["npm", "start"]

#COPY ./ /app/
#RUN npm run start

#COPY ./package.json /frontendtrukker

#COPY ./package*.json /app/

# install npm dependencies
#RUN npm install
#RUN npm install -g npm@8.6.0



# copy other project files
#COPY . .



# build the folder
#RUN npm run build

