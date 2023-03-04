import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    category: Yup.string().required('Category is required'),
    comment: Yup.string().required('Coment is required'),
});

export const initialValues = {
    title: '',
    category: '',
    comment: '',
    image: '',
};
