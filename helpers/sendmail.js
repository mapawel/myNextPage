import transporter from 'helpers/transporter';
import { sanitize } from 'helpers/sanitize';

export const sendMailToAdmin = async ({ name, mail, category, content }) => {
  const finalContent = sanitize(content);
  const finalName = sanitize(name);

  return await transporter.sendMail({
    from: `"DEVDEFER Development" <${process.env.MAIL_USER}>`,
    to: `${process.env.MAIL_ADMIN}`,
    subject: `NOWA WIADOMOŚĆ ZE STRONY DEVDEFER`,
    html: `
      <h1>WIADOMOŚĆ OD: ${finalName}</h1>
      <h2>E-MAIL: ${mail}</h2>
      <h4>Kategoria: ${category}</h4></br>
      <p>Treść:</p>
      <p>${finalContent}</p>
  `,
  });
};
