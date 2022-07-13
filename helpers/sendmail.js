import transporter from 'helpers/transporter';

export const sendMailToAdmin = async ({ name, mail, category, content }) =>
  await transporter.sendMail({
    from: `"DEVDEFER Development" <${process.env.MAIL_USER}>`,
    // to: 'dupa@',
    to: `${process.env.MAIL_USER}`,
    subject: `NOWA WIADOMOŚĆ ZE STRONY DEVDEFER`,
    html: `
  <h1>TAK TAK</h1>
  <h4>"${content}"</h4>
  `,
  });
