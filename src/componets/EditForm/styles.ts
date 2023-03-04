import styled, { css } from 'styled-components';
import { Form as defaultForm } from 'formik';

export const TitleFormPost = styled.h1`
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    margin-bottom: 2rem;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.mediumSmall};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const MainFormContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
`;

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* margin-left: 3.125rem; */
    margin-top: 2rem;
`;
export const SubContainerImg = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* margin-left: 3.125rem; */
    margin-top: 2rem;
`;

export const LoginBackImg = styled.div`
    background: rgb(0, 0, 0);
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(66, 0, 36, 1) 100%
    );
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    position: fixed;
`;

export const Form = styled(defaultForm)`
    background-color: white;
    border-radius: 10px;
    height: 35rem;
    margin-left: 1.7rem;
    margin-right: 1.7rem;
    width: 400px;
    /* Margen para pantalla grande */
    margin-top: 6rem;

    /* Media query para pantalla pequeña */
    @media (max-width: 768px) {
        margin-top: 6.25rem;
        width: 300px;
    }
`;

export const LabelContainer = styled.div``;

export const Label = styled.label`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    margin: 0 2.1rem;
`;

export const Input = styled.input<{ $hasError?: boolean }>`
    border-radius: 5px;
    border: 0.1px solid
        ${({ $hasError, theme }) =>
            $hasError ? theme.colors.danger : theme.colors.secondary};
    padding-left: 0.5rem;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 0.8rem;
    height: 2.5rem;
    margin-right: 2rem;
    margin-left: 2rem;
    margin-top: 0.625rem;
    width: 15rem;

    ${({ $hasError, theme }) =>
        $hasError &&
        css`
            color: ${theme.colors.danger};
        `}

    &::placeholder {
        color: ${({ theme }) => theme.colors.primary};
        font-family: ${({ theme }) => theme.fonts.primary};
        font-size: 0.7rem;
        font-weight: 200;
        opacity: 0.5;
    }

    @media (min-width: 768px) {
        width: 21rem;
    }
`;

export const TextArea = styled.textarea<{ $hasError?: boolean }>`
    border-radius: 5px;
    border: 0.1px solid
        ${({ $hasError, theme }) =>
            $hasError ? theme.colors.danger : theme.colors.secondary};
    padding-left: 0.5rem;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 0.8rem;
    height: 2.5rem;
    margin-right: 2rem;
    margin-left: 2rem;
    margin-top: 0.625rem;
    width: 15rem;

    ${({ $hasError, theme }) =>
        $hasError &&
        css`
            color: ${theme.colors.danger};
        `}

    &::placeholder {
        color: ${({ theme }) => theme.colors.primary};
        font-family: ${({ theme }) => theme.fonts.primary};
        font-size: 0.7rem;
        font-weight: 200;
        opacity: 0.5;
    }

    @media (min-width: 768px) {
        width: 21rem;
    }
`;

export const Select = styled.select<{ $hasError?: boolean }>`
    border-radius: 5px;
    border: 0.1px solid
        ${({ $hasError, theme }) =>
            $hasError ? theme.colors.danger : theme.colors.secondary};
    padding-left: 0.5rem;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 0.8rem;
    height: 2.5rem;
    margin-right: 2rem;
    margin-left: 2rem;
    margin-top: 0.625rem;
    width: 15rem;

    ${({ $hasError, theme }) =>
        $hasError &&
        css`
            color: ${theme.colors.danger};
        `}

    @media (min-width: 768px) {
        width: 21rem;
    }
`;

export const Error = styled.span`
    color: ${({ theme }) => theme.colors.danger};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 0.7rem;
    margin-top: 0.5rem;
    margin-left: 2.05rem;
`;

export const ButtonLoginContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
`;

export const ButtonLogin = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    border: none;
    color: white;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.smallest};
    font-weight: 500;
    margin-top: 2rem;
    padding: 1rem 2rem 1rem 2rem;
    text-decoration: none;

    &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.light};
        cursor: pointer;
    }
`;

export const ErrorFirebaseContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const ErrorFirebaseText = styled.p`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.smallest};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    color: ${({ theme }) => theme.colors.danger};
    margin-bottom: 1rem;
`;

export const Style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 250,
    bgcolor: '#420024',
    border: '2px solid #000',
    borderRadius: '20px',
    boxShadow: 24,
    color: 'white',
    p: 4,
    fontFamily: 'Roboto, sans-serif',
};
