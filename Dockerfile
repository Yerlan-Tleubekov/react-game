FROM node:10 AS ui-build
WORKDIR /home/yets/Documents/react-game
COPY front/ ./front/
RUN cd front && npm install && npm run build

FROM node:10 AS server-build
WORKDIR /root/
COPY --from=ui-build /home/yets/Documents/react-game/front/build ./front/build
COPY api/package*.json ./api/
RUN cd api && npm install
COPY api/index.js ./api/

EXPOSE 3080

CMD ["node", "./api/index.js"]