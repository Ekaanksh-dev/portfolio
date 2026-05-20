import emailjs from '@emailjs/browser';

export async function sendEmail(formData) {
  return emailjs.send(
    'service_4psa1jg',
    'template_rkg4te8',
    {
      from_name:  formData.name,
      from_email: formData.email,
      message:    formData.message,
    },
    'l5WJbiJ20uqECUdPA'
  );
}
