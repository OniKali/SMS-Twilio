//Sending SMS using Twilio

//Load the packages
const twilio = require("twilio");
require("dotenv").config();

//npm i twilio dotenv --save in terminal

//Initiate the Twilio client with Account SIC, Token, Phone Number, Receiver Number
//You will find the Account SID amd Token in your Twilio account page

// for testing create a test phone number in Twilio
// for receiver update your mobile number
// Update all the 4 details in the .env file

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const phoneNumber = process.env.TWILIO_AUTH_TOKEN;
const receiver = process.env.RECEIVER_PHONE_NUMBER;
const client = twilio(accountSid, authToken);

//Send the SMS

client.messages
  .create({
    body: "change-me", //Put The Message you want to send
    from: phoneNumber, //The phone number from which the message was sent
    to: receiver, //The phone number to which the message was sent
  })
  .then((message) => console.log(message.sid))
  .catch((error) => console.log(error));