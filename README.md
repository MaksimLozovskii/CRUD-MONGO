#**:fire: SIMPLE CRUD API :fire:**

##**Overview**
This Simple Api Enables Creat Read Update Delete fucntionality to be used with MongoDB database.

##**Features**
You can create, read, update and delete json data in and from the MongoDB cluster, which you can create at https://www.mongodb.com/ by using software like Postman. GET requsts can be done in the browser.

##**Running the API locally**
To start working, clone files into a desired folder, cd into it or open it with gitbash and run:

<addr> npm i --production </addr>

This will install all required dependencies

Then, rename the .env_sample to .env and put in the link to your database cluster and the desired PORT number.

After that you can start the app by running:

<addr> npm start </addr>

##**Running The API using PM2**
You can use a process manager, such as pm2:

<addr> npm i -g pm2 </addr>

<addr> pm2 start app.js </addr>

This will start the API without the need to keep the console open

##**Dependencies**
* cors
* dotenv
* express
* helmet
* mongoose
* morgan