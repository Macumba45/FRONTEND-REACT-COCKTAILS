import { FC, memo } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Container } from './styles';

const ButtonRandom: FC = () => {
    return (
        <Container>
            <Stack>
                <Button
                    variant="contained"
                    color="success"
                    sx={{ backgroundColor: '#420024' }}>
                    Random it
                </Button>
            </Stack>
        </Container>
    );
};

export default memo(ButtonRandom);
