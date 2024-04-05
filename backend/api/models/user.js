const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/user', { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("Connected successfully");
});
// mongoose.connect('mongodb+srv://ganeshkumili:ganesh@123@cluster-mean-project.8lrmcjg.mongodb.net/mean-Database?retryWrites=true&w=majority&appName=Cluster-MEAN-Project', {useNewUrlParser: true, useUnifiedTopology: true});

var conn =mongoose.Collection;

var userSchema =new mongoose.Schema({
  name: String,
  email: String,
  password: String,

});

var userModel = mongoose.model('Users', userSchema);
module.exports=userModel;
