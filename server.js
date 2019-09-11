const express = require("express");

const app = express();
const PORT = process.env.PORT || 4444;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));

app.listen(PORT, function(){
    console.log(` Global ==> API on PORT ${PORT}`);
});