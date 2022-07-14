import * as Yup from 'yup';
import { contactForm } from 'assets/data/contactForm';

export const validatorSchema = (locale) =>
  Yup.object().shape({
    name: Yup.string()
      .min(2, locale === 'en' ? 'Name too short...' : 'Imię za krótkie...')
      .max(
        30,
        locale === 'en'
          ? 'Name too long (less than 30 letters required)'
          : 'Imię za długie (max 30 znaków)'
      )
      .required(locale === 'en' ? 'Name is required' : 'Imię jest wymagane'),
    mail: Yup.string()
      .email(
        locale === 'en'
          ? 'E-mail address is not valid'
          : 'Adres e-mail jest niepoprawny'
      )
      .required(
        locale === 'en' ? 'E-mail is required' : 'E-mail jest wymagany'
      ),
    category: Yup.string().required(
      locale === 'en' ? 'Choose a category.' : 'Wybierz kategorię'
    ).oneOf(contactForm?.placeholder3?.[locale]),
    content: Yup.string()
      .min(
        8,
        locale === 'en' ? 'Message too short...' : 'Wiadomość za krótka...'
      )
      .max(
        800,
        locale === 'en'
          ? 'Message too long, 800 letters allowed.'
          : ' Za długa wiadomość, dozwolone 800 znaków.'
      )
      .required(locale === 'en' ? 'Message is required' : 'Wiadomość wymagana'),
    acceptTerms: Yup.bool().oneOf(
      [true],
      locale === 'en'
        ? 'You have to confirm Privacy Policy to send a message.'
        : 'Należy potwierdzić Politykę Prywatności.'
    ),
  });
