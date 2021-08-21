import * as Yup from 'yup';

export const validationSchemaRules = (rules: { [key: string]: any }) => Yup.object().shape(rules);

Yup.setLocale({
  mixed: {
    required: 'This field is required',
  },
  string: {
    email: 'The email address provided is invalid'
  }
});
