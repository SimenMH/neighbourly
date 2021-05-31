## About

Neighbourly is a mobile app that helps neighbours connect and communicate more easily by providing an address based message board on their phones.

Gone are the days of trying to keep an updated list of all your neighbour's phone numbers or going from door to door to get your message out. 

This project was developed in just 6 days for my [Codeworks](https://codeworks.me/) solo project.



## Screenshots

![](https://i.imgur.com/iWViYDK.jpg)  ![](https://i.imgur.com/LO7TsR8.jpg)  ![](https://i.imgur.com/EEoi0YM.jpg)  ![](https://i.imgur.com/4tqQmu0.jpg)  ![](https://i.imgur.com/BLZdD2A.jpg)  ![](https://i.imgur.com/q1vy656.jpg)  ![](https://i.imgur.com/3WesH9y.jpg)

## Before you start

Get a free API key from [Google](https://developers.google.com/maps/documentation/javascript/get-api-key)

- Add a .env file in the client folder with the following:
```
GOOGLE_API_KEY='your API goes here'
```

## Getting started

1. Make sure you have a MongoDB service running in your local enviroment.
2. Clone the repo

```
git clone https://github.com/SimenMH/neighbourly
```

3. Install dependencies for both client and server folders
```
cd client
npm install
```
```
cd server
npm install
```

4. Start development server

```
node index.js
```

5. Navigate to client and run the Expo CLI server

```
expo start
```

6. Open the project on your device or an emulator of your choice




## Built with

* [React Native Expo](https://expo.io/) - Framework for building robust mobile apps
* [Express](https://expressjs.com) - Node.js framework
* [Mongoose](https://mongoosejs.com) - MongoDB object modelling for Node.js

