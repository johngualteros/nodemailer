import express from 'express';
import nodemailer from 'nodemailer';

const app = express();

app.post("/send-email", (req, res) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'niko.koelpin@ethereal.email',
            pass: 'KNWrbDBDfP5k3AueDe'
        }
    });
    const mailOptions = {
        from: "Remmiter",
        to: "gualterosjohn40@gmail.com",
        subject: "Send to Nodemailer",
        text: "Hello World"
    };
    transporter.sendMail(mailOptions, (err,info)=>{
        if(err){
            res.status(500).send(err.message);
        }else{
            res.status(200).jsonp(req.body);
        }
    });
});

app.listen(3000, ()=>{
    console.log("The server running in host 3000 port")
});