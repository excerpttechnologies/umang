const nodemailer = require("nodemailer");

const contactEmail = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "lynxindustries2024@gmail.com",
    pass: "zcpa suom brjf jfym",
  },
});

contactEmail.verify((error, success) => {
  if (error) {
    console.log("Nodemailer Error:", error);
  } else {
    console.log("Nodemailer is ready to send emails");
  }
});

module.exports = contactEmail;
