import { FC, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Field, FieldProps, Formik } from 'formik';
import { validationSchema, initialValues } from './constants';
import NavBar from '../../../componets/NavBar';
import { Props } from './type';
import {
    MainFormContainer,
    LoginTitle,
    Form,
    EmailContainer,
    PasswordContainer,
    LabelContainer,
    Label,
    Input,
    LinkSignupContainer,
    LinkSignupText,
    ButtonLoginContainer,
    ButtonLogin,
    LoginBackImg,
    Error,
} from './styles';
import { setAuthenticatedToken } from '../../../services/storage';

const Login: FC<Props> = () => {
    const navigate = useNavigate();
    const handleSubmit = useCallback(
        async (values: Props) => {
            try {
                const response = await fetch(
                    'http://localhost:8000/auth/login',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: values.email,
                            password: values.password,
                        }),
                    }
                );

                if (response.ok) {
                    const data = await response.json();
                    setAuthenticatedToken(data);
                    navigate('/feed');
                } else {
                    alert(response.statusText);
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
                            <LoginTitle>SignIn</LoginTitle>
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
                            <LinkSignupContainer>
                                <LinkSignupText to="/signup">
                                    If you are not SignUp, click here!
                                </LinkSignupText>
                            </LinkSignupContainer>
                            <ButtonLoginContainer>
                                <ButtonLogin type="submit">Log in</ButtonLogin>
                            </ButtonLoginContainer>
                        </Form>
                    </Formik>
                </MainFormContainer>
            </LoginBackImg>
        </>
    );
};

export default memo(Login);
