import { sendMailToAdmin } from 'helpers/sendmail';
import { validatorSchema } from 'validators/validatorSchema';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			const schema = validatorSchema(req.headers?.locale)
			await schema.validate(req.body, {abortEarly: false});
			await sendMailToAdmin(req.body);
			res.status(201).json({
				status:  'OK',
				message: 'Mail sent!',
				error:   null,
			});
		} catch (err) {
			console.error('===================================> Error on api/sendmail > ', err);
			if (err.errors) {
				return res.status(422).json({
					status:  'Error',
					message: err?.errors?.join(', '),
					error:   err,
				});
			}
			res.status(500).json({
				status:  'Error',
				message: 'e-mail service error',
				error:   err,
			});
		}
	} else {
		res.redirect(301, '/')
	}
}
