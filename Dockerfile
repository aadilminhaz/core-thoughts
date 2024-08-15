FROM node:18-alpine as BUILD_IMAGE
WORKDIR /core-thoughts
RUN ls
COPY package.json .


RUN npm install

COPY . .

RUN npm run build

#FROM node:18-alpine as PRODUCTION_IMAGE
#WORKDIR /core-thoughts


#COPY --from=BUILD_IMAGE /core-thoughts/dist/ /core-thoughts/dist/
#EXPOSE 8080

#COPY package.json .
#COPY vite.config.ts .
#RUN npm install typescript


#EXPOSE 8080
#CMD ["npm", "run", "preview"]

FROM nginx 
EXPOSE 80
COPY --from=BUILD_IMAGE /core-thoughts/dist  /usr/share/nginx/html
