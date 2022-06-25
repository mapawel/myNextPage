import { sendMailToAdmin } from 'helpers/sendmail';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await sendMailToAdmin(req.body);
      res.status(201).json({
        status: 'OK',
        message: 'Mail sent!',
        error: null,
      });
    } catch (err) {
      res.status(err?.responseCode).json({
        status: 'Error',
        message: err?.response,
        error: err,
      });
    }
  } else {
    res.status(405).json({
      status: 'Error',
      message: `Method ${req.method} is not allowed`,
      error: `Method ${req.method} is not allowed`,
    });
  }
}
