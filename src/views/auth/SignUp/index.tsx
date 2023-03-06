import { FC, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { initialValues } from '../SignUp/constants';
import { Field, FieldProps, Formik } from 'formik';
import { validationSchema } from './constants';
import NavBar from '../../../componets/NavBar';
import type { SignUpProps } from './type';
import {
    MainFormContainer,
    Form,
    SignUpTitle,
    EmailContainer,
    PasswordContainer,
    LabelContainer,
    Label,
    Input,
    ButtonSignUpContainer,
    LinkLoginContainer,
    LinkLoginText,
    ButtonSignUp,
    LoginBackImg,
    Error,
    NameContainer,
} from './styles';
import { setAuthenticatedToken } from '../../../services/storage';
import { hadledSubmitSignup } from '../../../services/api/auth';

const SignUp: FC = () => {
    const navigate = useNavigate();

    const handleSubmit = useCallback(
        async (values: SignUpProps) => {
            try {
                const response: Response = await hadledSubmitSignup(values);

                if (response.ok) {
                    const data = await response.json();
                    setAuthenticatedToken(data);
                    navigate('/feed');
                }
            } catch (error: any) {
                console.log(error);
            }
        },
        [navigate]
    );

    return (
        <>
            <NavBar />
            <LoginBackImg>
                <MainFormContainer>
                    <Formik
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                        initialValues={initialValues}>
                        <Form>
                            <SignUpTitle>SignUp</SignUpTitle>
                            <Field name="name">
                                {({ field, meta }: FieldProps) => (
                                    <NameContainer>
                                        <LabelContainer>
                                            <Label>Name* </Label>
                                        </LabelContainer>
                                        <Input
                                            $hasError={!!meta?.error}
                                            type="name"
                                            placeholder="Insert your username"
                                            autoComplete="email"
                                            {...field}
                                        />
                                        {!!meta?.error && (
                                            <Error>{meta.error}</Error>
                                        )}
                                    </NameContainer>
                                )}
                            </Field>
                            <Field name="email">
                                {({ field, meta }: FieldProps) => (
                                    <EmailContainer>
                                        <LabelContainer>
                                            <Label>Email* </Label>
                                        </LabelContainer>
                                        <Input
                                            $hasError={!!meta?.error}
                                            type="email"
                                            placeholder="Insert your email"
                                            autoComplete="email"
                                            {...field}
                                        />
                                        {!!meta?.error && (
                                            <Error>{meta.error}</Error>
                                        )}
                                    </EmailContainer>
                                )}
                            </Field>
                            <Field name="password">
                                {({ field, meta }: FieldProps) => (
                                    <PasswordContainer>
                                        <LabelContainer>
                                            <Label>Password* </Label>
                                        </LabelContainer>
                                        <Input
                                            $hasError={!!meta?.error}
                                            type="password"
                                            autoComplete="current-password"
                                            placeholder="Insert password"
                                            {...field}
                                        />
                                        {meta?.error && (
                                            <Error>{meta.error}</Error>
                                        )}
                                    </PasswordContainer>
                                )}
                            </Field>
                            <LinkLoginContainer>
                                <LinkLoginText to="/login">
                                    If you are already SignUp, click here to
                                    login!
                                </LinkLoginText>
                            </LinkLoginContainer>
                            <ButtonSignUpContainer>
                                <ButtonSignUp type="submit">
                                    Sign Up
                                </ButtonSignUp>
                            </ButtonSignUpContainer>
                        </Form>
                    </Formik>
                </MainFormContainer>
            </LoginBackImg>
        </>
    );
};

export default memo(SignUp);
