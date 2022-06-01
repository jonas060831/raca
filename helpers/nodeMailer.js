var nodemailer = require('nodemailer')
var { google } = require("googleapis");
var OAuth2 = google.auth.OAuth2;

const email = process.env.NEXT_PUBLIC_GOOGLE_EMAIL
const refreshToken = process.env.NEXT_PUBLIC_REFRESH_TOKEN
const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET
const clientId = process.env.NEXT_PUBLIC_CLIENT_ID


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


export default createTransporter