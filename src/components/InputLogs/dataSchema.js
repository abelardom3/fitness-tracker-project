import * as yup from 'yup'

export const dataSchema = yup.object().shape({
    workout: yup.string().min(2, 'More then two words').required('Required'),
    duration: yup.string().required('Required'),
    date: yup.date().required('Required')
});
