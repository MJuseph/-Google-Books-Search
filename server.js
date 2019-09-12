const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4444;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));



app.listen(PORT, function(){
    console.log(` Global ==> API on PORT ${PORT}`);
});