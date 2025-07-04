const contactEmail = require('../config/nodemailerConfig');
const Inquiry = require('../model/Inquiry'); // Import the Inquiry model

exports.sendInquiryForm = async (req, res) => {
  const { name, email, phone, company, category, query } = req.body;

  // Save the inquiry data in the database
  try {
    const newInquiry = new Inquiry({
      name,
      email,
      phone,
      company,
      category,
      query
    });
    await newInquiry.save();

    // Send the inquiry form email
    const mail = {
      from: email,
      to: "lynxindustries2024@gmail.com",
      replyTo: email,
      subject: "Inquiry Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Company: ${company}</p>
             <p>Category: ${category}</p>
             <p>Query: ${query}</p>`,
    };

    contactEmail.sendMail(mail, (error, info) => {
      if (error) {
        console.log("Email Send Error:", error);
        res.status(500).json({ status: "ERROR", message: error.message });
      } else {
        console.log("Email sent:", info.response);
        res.status(200).json({ status: "Message Sent and Inquiry Saved" });
      }
    });
  } catch (error) {
    console.log('Error saving inquiry:', error);
    res.status(500).json({ status: "ERROR", message: "Failed to save inquiry data" });
  }
};
