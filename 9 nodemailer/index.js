// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from 'nodemailer';
import readline from 'readline';

const Solution = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Please enter your mail: ', (recipientEmail) => {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'codingninjas2k16@gmail.com',
        pass: 'slwvvlczduktvhdj'
      }
    });

    // Setup email data
    let mailOptions = {
      from: 'codingninjas2k16@gmail.com',
      to: recipientEmail,
      subject: 'Coding Ninjas',
      text: 'The world has enough coders; be a coding ninja!'
    };

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log('Error occurred: ' + error.message);
      }
      console.log('Success: Email sent to ' + recipientEmail);
    });

    rl.close();
  });
};

export default Solution;
