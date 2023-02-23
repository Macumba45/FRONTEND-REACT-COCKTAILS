import { FC, memo } from "react"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ButtonRandom: FC = () => {

    return (

        <Stack direction="row" spacing={1}>
            <Button variant="contained" color="success" sx={{ backgroundColor: '#420024' }}>
                Random it
            </Button>
        </Stack>

    )
}

export default memo(ButtonRandom)