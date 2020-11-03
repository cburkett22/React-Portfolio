//Heroku config var
let gmailPassword = process.env.GMAIL_PASS;

app.post("/send", (req, res) => {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Subject: ${req.body.subject}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  async function main() {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "portfolio.email2020@gmail.com",
        pass: gmailPassword,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    let info = await transporter.sendMail({
      from: "'Portfolio Contact' <coreyburkett22@gmail.com>",
      to: "coreyburkett22@gmail.com",
      subject: "Portfolio Contact Request",
      html: output
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }
  main().catch(console.error);
});