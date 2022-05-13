var nodemailer = require('nodemailer')
var { google } = require("googleapis");
var OAuth2 = google.auth.OAuth2;

const email = process.env.NEXT_PUBLIC_GOOGLE_EMAIL
const refreshToken = process.env.NEXT_PUBLIC_REFRESH_TOKEN
const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET
const clientId = process.env.NEXT_PUBLIC_CLIENT_ID



//const env = process.env.NODE_ENV

const handler = (req, res) => {

    if (req.method === "POST") {

        const createTransporter = async () => {
            
            const oauth2Client = new OAuth2(
                clientId,
                clientSecret,
                "https://developers.google.com/oauthplayground"
            );
    
            oauth2Client.setCredentials({
                refresh_token: refreshToken
            });

            const accessToken = await new Promise((resolve, reject) => {
                oauth2Client.getAccessToken((err, token) => {
                  if (err) {
                    reject("Failed to create access token :(");
                  }
                  resolve(token);
                });
              });
        
              const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  type: "OAuth2",
                  user: email,
                  accessToken,
                  clientId: clientId,
                  clientSecret: clientSecret,
                  refreshToken: refreshToken
                },
                tls: {
                    rejectUnauthorized: false
                  }
              });

              return transporter;
        }

        //emailOptions - who sends what to whom
        const sendEmail = async (emailOptions) => {
            
            try {
                let emailTransporter = await createTransporter();
                await emailTransporter.sendMail(emailOptions);


                res.status(200).send({
                    message : 'Email sent Successfully we will be contacting you soon'
                })


            } catch (error) {

                res.status(500).send({
                    message : 'Something went wrong please try again'
                })
            }
        };


        sendEmail({
            subject: `Service Inquiry from ${req.body.customerName}`,
            text: req.body.message,
            to: `System Email ${email}`,
            from: `New Customer ${email}`
          });
    }
}

export default handler