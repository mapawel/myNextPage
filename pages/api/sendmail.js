import { sendMailToAdmin } from 'helpers/sendmail';
import { validatorSchema } from 'validators/validatorSchema';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      console.log('body: ', req.body);

      await validatorSchema.validate(req.body, { abortEarly: false });
      await sendMailToAdmin(req.body);
      res.status(201).json({
        status: 'OK',
        message: 'Mail sent!',
        error: null,
      });
    } catch (err) {
      if (err.errors) {
        return res.status(422).json({
          status: 'Error',
          message: err?.errors?.join(', '),
          error: err,
        });
      }
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
