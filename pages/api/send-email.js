const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { subject, from, message, name } = req.body;

        // Create a transporter object using SMTP
        let transporter = nodemailer.createTransport({
            service: 'gmail', // e.g., 'gmail'
            auth: {
                user: "devstar1221@gmail.com", // Your email
                pass: "rfnv gvbp aqoq vijz", // Your email password or app password
            },
        });

        try {
            // Send the email
            await transporter.sendMail({
                from: from, // Sender address (from the form)
                to: 'devstar1221@gmail.com', // Recipient email
                subject: `${subject}, New message from name: ${name} email: ${from}`, // Subject line
                text: message, // Plain text body
            });

            res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Failed to send email.' });
        }
    } else {
        res.status(405).json({ message: 'Only POST requests are allowed.' });
    }
}
