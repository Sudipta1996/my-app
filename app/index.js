
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors=require("cors")
const dbrl =
"mongodb+srv://Admin:Admin@cluster0.ummc3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.use(cors())
app.use(bodyParser.json())

mongoose
  .connect(dbrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((res) => {
    console.log("Could not connect to database");
    process.exit();
  });

const RegisterSchema = mongoose.Schema(
  {
    name: "",
    email: "",
    password: ""
    
  },
  {
    timestamps: true,
  }
);

const Register = mongoose.model("Registers", RegisterSchema);


app.post("/registers", (req, res) => {
 
  const register = new Register({
       name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        
  });
  console.log(register)
  register
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({
        message: "Unbale to add",
      });
    });
});
app.get('/registers',(req,res)=>{
  Register.find()
  .then((Registers) => {
    res.send(Registers);
  })
  .catch((err) => {
    res.send({
      message: " error ",
    });
  });

})

app.listen(4000, () => {
  console.log("App Server Run");
});















