const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const userData = require("./models/userDataModel");
const bodyparser = require('body-parser');

//INTITIALISATION
const app = express();
require('dotenv').config();

const PORT = process.env.PORT;

//MIDDLEWARES
app.use(morgan("common"));
app.use(helmet());
app.use(cors());
app.use(bodyparser.json());
//-------------------ROUTES--------------------------
app.get("/", async (req, res) => {
    try{
        const users = await userData.find();
        res.json(users);
    }catch(err)
    {
        res.json({message: err});
    }
})

//CREATE A USER
app.post("/", async (req, res) => {
    const user = new userData({
        userName: req.body.userName,
        userPass: req.body.userPass
    });

    try{
        const savedUser = await user.save();
        res.json(savedUser);
    }catch(err)
    {
        res.json({message: err});
    }
    });

//READ USER
app.get("/:id", async (req, res) =>
{
    try{
        const user = await userData.findById(req.params.id);
        if(user == null)
        { 
            res.json({message: "User not found"});
        }
        else {
            res.json(user);
        }
    }catch(err)
    {
        res.json({message: err});
    }
})

//UPDATE USER
app.patch("/:id", async (req, res) => {
    try{
        const updatedUser = await userData.updateOne(
            {_id: req.params.id},
            { $set: {userPass: req.body.userPass}}
        );
        res.json(updatedUser);
    }catch(err)
    {
        res.json({message: err});
    }
});

//DELETE USER
app.delete("/:id", async (req, res ) => {
    try{
        const removedUser = await userData.remove({_id: req.params.id});
        res.json(removedUser);
    }catch(err)
    {
        res.json({message: err});
    }
});

//DATABASE CONNECTION
mongoose
    .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true, 
    useNewUrlParser: true,
    })
    .then(() => console.log('DB Connected!'))
    .catch(err => {
    console.log(`DB Connection Error: ${err.message}`);
});
//LISTEN AT DEFINED PORT
app.listen(PORT, () => console.log(`listening at port ${PORT}`))