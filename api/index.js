import { Resend } from 'resend';

export default async function handler(req, res) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  console.log(process.env.test_env);
  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'lucas.12250@gmail.com',
    subject: 'Hello World',
    html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
  });

  console.log({ data, error });
  res.status(200).json({ message: 'Email sent :)' });
}
