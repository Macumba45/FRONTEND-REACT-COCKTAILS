import FeedFormLogic from './logic';
import { Field, FieldProps, Form, Formik } from 'formik';
import Modal from '@mui/joy/Modal';
import { FC, memo } from 'react';
import { initialValues, validationSchema } from './constants';
import { PhotoCamera } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';

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
    Style
} from './styles';


const FeedForm: FC = () => {

    const { categories, selectedImage, setSelectedImage, handleSubmit, modal, handleClose } = FeedFormLogic()

    return (
        <>

            {modal && (
                <Modal
                    open={true}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"

                >
                    <Box sx={{ ...Style, textAlign: 'center' }}>
                        <h2 id="parent-modal-title">Post uploaded succesfull  &#9989;</h2>

                    </Box>
                </Modal>
            )}

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
                            <ButtonLogin type="submit">Post</ButtonLogin>
                        </ButtonLoginContainer>
                    </Form>
                </Formik>
            </MainFormContainer>
        </>
    );
};
export default memo(FeedForm);
