## About

Neighbourly is a mobile app that helps neighbours connect and communicate more easily by providing an address based message board on their phones.

Gone are the days of trying to keep an updated list of all your neighbour's phone numbers or going from door to door to get your message out. 

This project was developed in just 6 days for my [Codeworks](https://codeworks.me/) solo project.



## Screenshots

<img src="https://i.imgur.com/tbJTsbT.jpg" style="zoom:15%;" /><img src="https://i.imgur.com/0urouiL.jpg" style="zoom:15%;" /><img src="https://i.imgur.com/SFoEhBi.jpg" style="zoom:15%;" /><img src="https://i.imgur.com/ptFjASC.jpg" style="zoom:15%;" /><img src="https://i.imgur.com/y2XyTvF.jpg" style="zoom:15%;" /><img src="https://i.imgur.com/fmLxcUr.jpg" style="zoom:15%;" /><img src="https://i.imgur.com/ShIpanU.jpg" style="zoom:15%;" />

## Before you start

Get a free API key from [Google](https://developers.google.com/maps/documentation/javascript/get-api-key)

- Add a .env file in the client folder with the following:
GOOGLE_API_KEY='your API goes here'

## Getting started

1. Make sure you have a MongoDB service running in your local enviroment.
2. Clone the repo

```
git clone https://github.com/SimenMH/neighbourly
```

3. Install dependencies for both client and s

```
Client:
cd client
npm install or npm i
Server:
cd server
npm install or npm i
```

4. Start development server

```
If you have nodemon installed globally:
nodemon
Otherwise:
node index.js
```

5. Navigate to client and run the Expo CLI server

```
expo start or npm start
```

6. Open the project on your device or an emulator of your choice




## Built with

* [React Native Expo](https://expo.io/) - Framework for building robust mobile apps
* [Express](https://expressjs.com) - Node.js framework
* [Mongoose](https://mongoosejs.com) - MongoDB object modelling for Node.js

