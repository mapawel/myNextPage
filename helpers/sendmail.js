import xss from 'xss';
import transporter from 'helpers/transporter';

export const sendMailToAdmin = async ({ name, mail, category, content }) => {
  const finalContent = content
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

  return await transporter.sendMail({
    from: `"DEVDEFER Development" <${process.env.MAIL_USER}>`,
    to: 'dupa@',
    // to: `${process.env.MAIL_USER}`,
    subject: `NOWA WIADOMOŚĆ ZE STRONY DEVDEFER`,
    html: `
  <h1>TAK TAK</h1>
  <h4>${finalContent}</h4>
  `,
  });
};
