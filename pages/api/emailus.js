//const env = process.env.NODE_ENV
import createTransporter from "../../helpers/nodeMailer";


const email = process.env.NEXT_PUBLIC_GOOGLE_EMAIL

const handler = (req, res) => {

    if(req.method === "GET") {

        res.status(200).json({ message: 'emailus' })
    }

    if (req.method === "POST") {

        const { customerName, customerEmail, message } = req.body

        

        //emailOptions - who sends what to whom
        const sendEmail = async (emailOptions) => {
            
            try {
                let emailTransporter = await createTransporter();
                await emailTransporter.sendMail(emailOptions);

                res.status(200).json({
                    message : 'Message received we will be contacting you soon'
                })
            } catch (error) {

                res.status(500).json({
                    message : 'Something went wrong please try again',
                    error: error
                })
            }
        };

        sendEmail({
            subject: `Service Inquiry from ${customerName}`,
            text: message,
            to: `System Email ${email}`,
            from: `New Customer ${customerEmail}`
          });


        //send auto reply
        if (customerEmail.length !== 0) {

            //emailOptions - who sends what to whom
            const sendEmail2 = async (emailOptions) => {
                
                try {
                    let emailTransporter = await createTransporter();
                    await emailTransporter.sendMail(emailOptions);

                    res.status(200)
                } catch (error) {

                    res.status(500).json({
                        message : 'Something went wrong please try again',
                        error: error
                    })
                }
            };
            
            const autoreplymessage = `Hi ${customerName},\n\n`+
                                     `\xa0 \xa0Thanks so much for reaching out! This auto-reply is just to let you know that we received your email and will get back to you with a quotation as soon as we can.\n\n `+
                                     `If you have any additional information that you think will help us to assist you, please feel free to reply to this email.\n\n`+
                                     `We look forward to chatting soon!\n\n`+
                                     `Cheers,\n`+
                                     `Goalbert Gotauco`
            sendEmail2({
                subject: 'We got it',
                text: autoreplymessage,
                to: customerEmail,
                from:`Rentacoolair ${email}`
            })
        }
    }
}

export default handler