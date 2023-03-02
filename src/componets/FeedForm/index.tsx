import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import { FC, memo, useCallback, useEffect, useState } from 'react';
import { initialValues, validationSchema } from './constants';
import { Category, Post } from './type';
import {
    ButtonLogin,
    ButtonLoginContainer,
    Input,
    Label,
    LabelContainer,
    MainFormContainer,
    TitleFormPost,
    Error,
    SubContainer,
    SubContainerImg,
    Select,
    TextArea,
} from './styles';
import { IconButton } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { getAuthenticatedToken } from '../../services/storage';

const FeedForm: FC = () => {

    const [categories, setCategories] = useState<string[]>([]);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [formValues, setFormValues] = useState<Post>({
        title: "",
        category: "",
        image: "",
        comment: ""
    });

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            );
            const data = await response.json();
            setCategories(
                data.drinks.map((category: Category) => category.strCategory)
            );
        }
        fetchData();
    }, []);


    const handleSubmit = async (values: Post, { setSubmitting }: FormikHelpers<Post>) => {
        console.log(values)
        try {
            const token = getAuthenticatedToken(); // Obtener el token de localStorage
            const response = await fetch('http://localhost:8000/feed/createPost', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`, // Agregar el token al header 'Authorization'
                    contentType: 'application/json',
                },
                body: JSON.stringify({
                    title: values.title,
                    category: values.category,
                    image: values.image,
                    comment: values.comment,
                }),
            });

            console.log(response);

            if (response.ok) {
                const data = await response.json();
                alert("Post created " + JSON.stringify(data));
            } else {
                alert(response.statusText);
            }
            setSubmitting(false);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <>
            <TitleFormPost>Post new Cocktail</TitleFormPost>
            <MainFormContainer>
                <Formik
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    initialValues={initialValues}>
                    <Form>
                        <Field name="img">
                            {({ meta }: FieldProps) => (
                                <>
                                    <SubContainerImg>
                                        <LabelContainer>
                                            <Label>Picture* </Label>
                                        </LabelContainer>

                                        {/* <Input
                                            $hasError={!!meta?.error}
                                            placeholder="Insert your picture"
                                            {...field}
                                        /> */}
                                        <IconButton
                                            color="primary"
                                            aria-label="upload picture"
                                            component="label">
                                            <Input
                                                hidden
                                                accept="image/*"
                                                type="file"
                                                $hasError={!!meta?.error}
                                                onChange={(
                                                    event: React.ChangeEvent<HTMLInputElement>
                                                ) =>
                                                    setSelectedImage(
                                                        event.target.files &&
                                                        event.target
                                                            .files[0]
                                                    )
                                                }
                                            />
                                            <PhotoCamera
                                                sx={{
                                                    width: '50px',
                                                    height: '50px',
                                                }}
                                            />
                                        </IconButton>
                                        {!!meta?.error && (
                                            <Error>{meta.error}</Error>
                                        )}
                                    </SubContainerImg>
                                    {selectedImage && (
                                        <SubContainerImg>
                                            <img
                                                src={URL.createObjectURL(
                                                    selectedImage
                                                )}
                                                alt="Icono de la cámara"
                                                style={{
                                                    height: '100px',
                                                    width: '100px',
                                                    margin: '0 auto',
                                                }}
                                            />
                                        </SubContainerImg>
                                    )}
                                </>
                            )}
                        </Field>
                        <Field name="title">
                            {({ field, meta }: FieldProps) => (
                                <SubContainer>
                                    <LabelContainer>
                                        <Label>Title* </Label>
                                    </LabelContainer>
                                    <Input
                                        $hasError={!!meta?.error}
                                        placeholder="Insert your title"
                                        {...field}
                                    />
                                    {!!meta?.error && (
                                        <Error>{meta.error}</Error>
                                    )}
                                </SubContainer>
                            )}
                        </Field>
                        <Field name="category">
                            {({ field, meta }: FieldProps) => (
                                <SubContainer>
                                    <LabelContainer>
                                        <Label>Category* </Label>
                                    </LabelContainer>
                                    <Select {...field}>
                                        <option value="">
                                            -- Select a category --
                                        </option>
                                        {categories.map((category) => (
                                            <option
                                                value={category}
                                                key={category}>
                                                {category}
                                            </option>
                                        ))}
                                    </Select>
                                    {!!meta?.error && (
                                        <Error>{meta.error}</Error>
                                    )}
                                </SubContainer>
                            )}
                        </Field>

                        <Field name="comment">
                            {({ field, meta }: FieldProps) => (
                                <SubContainer>
                                    <LabelContainer>
                                        <Label>Coment* </Label>
                                    </LabelContainer>
                                    <TextArea
                                        $hasError={!!meta?.error}
                                        placeholder="Insert your comment"
                                        style={{
                                            resize: 'both',
                                            height: '50px',
                                            padding: '5px',
                                            whiteSpace: 'pre-wrap',
                                            wordWrap: 'break-word',
                                        }}
                                        {...field}
                                    />
                                    {!!meta?.error && (
                                        <Error>{meta.error}</Error>
                                    )}
                                </SubContainer>
                            )}
                        </Field>
                        <ButtonLoginContainer>
                            <ButtonLogin type="submit">
                                Post
                            </ButtonLogin>
                        </ButtonLoginContainer>
                    </Form>
                </Formik>
            </MainFormContainer>
        </>
    );
}


export default memo(FeedForm);
