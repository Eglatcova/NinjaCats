import * as yup from 'yup'

const validationRules = {
  fio: /(^[A-Z]{1}[a-z-]*$)|(^[А-Я]{1}[а-я-]*$)/,
  email:
    // eslint-disable-next-line
    /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/,
  phone: /^[+]?[0-9]{10,15}$/,
  login: /^(?=.*[a-zA-Z])[a-zA-Z0-9]{3,20}$/,
  password: /^(?=.*[A-ZА-Я])(?=.*[0-9]).{8,40}$/,
}

export const validationSchema = yup.object().shape({
  login: yup
    .string()
    .min(3, 'Не менее 3 символов')
    .max(20, 'Не более 20 символов')
    .matches(validationRules.login, {
      message:
        'Латиница, может содержать цифры, но не состоять из них, без пробелов, из спецсимволов могут быть дефис и подчеркивание',
    })
    .required('Логин обязателен'),
  password: yup
    .string()
    .min(8, 'Не менее 8 символов')
    .max(40, 'Не более 40 символов')
    .matches(validationRules.password, {
      message: 'Обязательно хотя бы одна заглавная буква и цифра',
    })
    .required('Пароль обязателен'),
  first_name: yup
    .string()
    .matches(validationRules.fio, {
      message:
        'Первая буква должна быть заглавной, без пробелов и без цифр, из спецсимволов допустим только дефис',
    })
    .required('Имя обязательно'),
  second_name: yup
    .string()
    .matches(validationRules.fio, {
      message:
        'Первая буква должна быть заглавной, без пробелов и без цифр, из спецсимволов допустим только дефис',
    })
    .required('Фамилия обязательна'),
  email: yup
    .string()
    .email('Введите валидный email')
    .required('Email обязателен'),
  phone: yup
    .string()
    .min(10, 'Не менее 10 символов')
    .max(15, 'Не более 15 символов')
    .matches(validationRules.phone, {
      message: 'Должен состоять из цифр, может начинается с плюса',
    })
    .required('Телефон обязателен'),
})
