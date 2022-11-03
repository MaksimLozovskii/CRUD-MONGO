**:fire: SIMPLE CRUD API :fire:**

**Overview**
This Simple Api Enables Create Read Update Delete functionality to be used with MongoDB database.

**Features**
You can create, read, update and delete json data in and from the MongoDB cluster, which you can create at https://www.mongodb.com/ by using software like Postman.

**Running the Server locally**
To start working, clone files into a desired folder, cd into root/backend and run:

` npm i --production `

*This will install all required dependencies*

Then, rename the `.env_sample to .env` and put in the link to your database cluster and the desired PORT number.

*After that you can start the app by running:*

` npm start `

**Running The Server using PM2**

` npm i -g pm2 `

` pm2 start app.js`

