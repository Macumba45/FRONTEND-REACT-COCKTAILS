import { Field, FieldProps, Form, Formik } from 'formik';
import { FC, memo, useCallback, useEffect, useState } from 'react';
import { initialValues, validationSchema } from './constants';
import { Props } from './type';
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
} from './styles';
import { IconButton } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import fetchCategories from '../../componets/ButtonsCategories';

const FeedForm: FC<Props> = () => {
    const handleSubmit = useCallback(() => {
        console.log('ESTOY POSTEANDO');
    }, []);

    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            );
            const data = await response.json();
            setCategories(
                data.drinks.map((category: any) => category.strCategory)
            );
        }
        fetchData();
    }, []);

    return (
        <>
            <TitleFormPost>Post new Cocktail</TitleFormPost>
            <MainFormContainer>
                <Formik
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    initialValues={initialValues}>
                    <Form>
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
                        <Field name="img">
                            {({ field, meta }: FieldProps) => (
                                <>
                                    <SubContainerImg>
                                        <LabelContainer>
                                            <Label>Picture* </Label>
                                        </LabelContainer>

                                        <Input
                                            $hasError={!!meta?.error}
                                            placeholder="Insert your picture"
                                            {...field}
                                        />
                                        <IconButton
                                            color="primary"
                                            aria-label="upload picture"
                                            component="label">
                                            <Input
                                                hidden
                                                accept="image/*"
                                                type="file"
                                            />
                                            <PhotoCamera />
                                        </IconButton>
                                        {!!meta?.error && (
                                            <Error>{meta.error}</Error>
                                        )}
                                    </SubContainerImg>
                                </>
                            )}
                        </Field>
                        <Field name="coment">
                            {({ field, meta }: FieldProps) => (
                                <SubContainer>
                                    <LabelContainer>
                                        <Label>Coment* </Label>
                                    </LabelContainer>
                                    <Input
                                        $hasError={!!meta?.error}
                                        placeholder="Insert your coment"
                                        style={{
                                            resize: 'both',
                                            height: '100px',
                                            padding: '5px',
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
                            <ButtonLogin type="submit">Post</ButtonLogin>
                        </ButtonLoginContainer>
                    </Form>
                </Formik>
            </MainFormContainer>
        </>
    );
};

export default memo(FeedForm);
