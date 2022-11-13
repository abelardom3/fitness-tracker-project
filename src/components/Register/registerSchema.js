import * as yup from 'yup'

export const registerSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Required'),
    name: yup.string().required('Required'),
    password: yup.string().min(6, 'To short').required('Required')

})