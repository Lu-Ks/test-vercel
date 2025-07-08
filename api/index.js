import { Resend } from 'resend';

export default function handler(req, res) {

  console.log(process.env.test_env);
  const resend = new Resend(process.env.RESEND_API_KEY);

  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'lucas.12250@gmail.com',
    subject: 'Hello World',
    html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
  });
  res.status(200).json({ message: 'Email sent :)' });
}
