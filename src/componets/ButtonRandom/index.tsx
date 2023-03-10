import { FC, memo } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Container } from './styles';
import { Props } from './type';

const ButtonRandom: FC<Props> = ({ onClick }) => {
    return (
        <Container>
            <Stack>
                <Button
                    variant="contained"
                    color="success"
                    sx={{ backgroundColor: '#420024' }}
                    onClick={onClick}>
                    Random it
                </Button>
            </Stack>
        </Container>
    );
};

export default memo(ButtonRandom);
