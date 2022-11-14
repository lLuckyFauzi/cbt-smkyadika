import * as yup from 'yup'

const validationSchema = yup.object().shape({
    username: yup.string().required('Username tidak boleh kosong'),
    password: yup.string().required("Password tidak boleh kosong")
})

export default validationSchema