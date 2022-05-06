var nodemailer = require('nodemailer')

const username = process.env.NEXT_PUBLIC_GOOGLE_USERNAME
const password = process.env.NEXT_PUBLIC_GOOGLE_PASSWORD
const email = process.env.NEXT_PUBLIC_TARGET_EMAIL
const env = process.env.NODE_ENV

const handler = (req, res) => {
    console.log(env)
    if (req.method === "POST") {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 465,
            secure: true,
            auth: {
                user: username,
                pass: password
            }
        })
    
        var mailOptions = {
            from: `New Customer ${req.body.customerEmail}`,
            to: `${email}`,
            subject: `Service Inquiry from ${req.body.customerName}`,
            text: req.body.message
        }
        
        const urlEnvironment = env === 'development' ? 'http:locahost:3000/' : 'https://rentacoolair.com'

        transporter.sendMail(mailOptions, (error, info)=> {
            try {
                //console.log(info)
                res.status(200).send({
                    message : 'Email sent Successfully we will be contacting you soon',
                    url: `${urlEnvironment}/services/${req.body.url[0]}/${req.body.url[1]}/${req.body.url[2]}/${req.body.url[3]}/${req.body.url[4]}/${req.body.url[5]}=true`
                })
    
            } catch {
                //console.log(error)
                res.status(500).send({
                    message: 'Something went Wrong Please Try Again',
                    url: `${urlEnvironment}/services/${req.body.url[0]}/${req.body.url[1]}/${req.body.url[2]}/${req.body.url[3]}/${req.body.url[4]}/${req.body.url[5]}=false`
                })
            }
        })
    }
}

export default handler