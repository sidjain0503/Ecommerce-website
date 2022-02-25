require("dotenv").config();
var nodemailer = require('nodemailer');
const TO = "aashutoshnishad147@gmail.com"
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "aashutoshnshad004@gmail.com",
      pass: "ashu2003"
    }
  });
  
  var mailOptions = {
    from: "ashutoshnishad2003@gmail.com",
    to: "aashutoshnishad147@gmail.com",
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
console.log(process.env.productname);
