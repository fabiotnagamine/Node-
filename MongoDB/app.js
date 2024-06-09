const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectionStrings = "mongodb+srv://takashi:Takashi1253@cluster0.gkdgt5u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(connectionStrings, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() =>{
  console.log('OK')
  app.emit('OK');
});



const route = require("./routes");
const path = require("path");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.resolve("./src/public")));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(route);

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
