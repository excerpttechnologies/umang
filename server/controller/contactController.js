const contactEmail = require('../config/nodemailerConfig');

exports.sendContactForm = (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  const mail = {
    from: email,
    to: "lynxindustries2024@gmail.com",
    replyTo: email,
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Subject: ${subject}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error, info) => {
    if (error) {
      console.log("Email Send Error:", error);
      res.status(500).json({ status: "ERROR", message: error.message });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ status: "Message Sent" });
    }
  });
};
