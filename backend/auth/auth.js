const { model } = require("mongoose");

const mongodb = require("mongodb").MongoClient;
// const dbname = "Mydb";
var data = [0];
function auth(username, password) {
  const URL = "mongodb://127.0.0.1:27017/";
  var outside = { ispresent: false, data: {} };
  mongodb.connect(URL, (err, db) => {
    if (err) {
      // ⚡⚡If connection Error
      console.log("Db connection Eroor in auth.js");
    } else {
      // Now we connect 😊
      const dbo = db.db("mydb"); // connect our db 🔍
      const collectionname = "customers"; // collection name 📃📃
      const Findobj = {
        name: username,
        password: password,
      };
      dbo.collection(collectionname).findOne(Findobj, (err, res) => {
        //   console.log(res);
        // res.password = undefined;
        if (err) {
          throw err
        } else {
          outside = { ispresent: true, data: res };
        //   data.push(res);
        }
        db.close()
      })
    }
  })

  return outside
}

module.exports =  auth
