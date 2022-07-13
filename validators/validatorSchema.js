import * as Yup from 'yup';

export const validatorSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name too short...')
    .max(30, 'Name too long (less than 30 letters required)')
    .required('Name is required'),
  mail: Yup.string().email()
    .required('E-mail is required'),
  category: Yup.string()
    .required('Choose a category.'),
  content: Yup.string()
    .min(8, 'Message too short...')
    .max(800, 'Message too long, 800 letters allowed.')
    .required('this field is required'),
  acceptTerms: Yup.bool()
    .oneOf([true], 'You have to confirm Privacy Policy to send a message.')
});
