import { FC, memo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
    ImageButton,
    ImageSrc,
    ImageBackdrop,
    Image,
    ImageMarked,
    images,
} from './styles';

const ButtonCategories: FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                withd: 300,
                width: '100%',
                marginTop: '4.0rem',
            }}>
            {images.map((image) => (
                <ImageButton
                    focusRipple
                    key={image.title}
                    style={{
                        width: image.width,
                    }}>
                    <ImageSrc
                        style={{ backgroundImage: `url(${image.url})` }}
                    />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            sx={{
                                position: 'relative',
                                p: 4,
                                pt: 2,
                                pb: (theme) =>
                                    `calc(${theme.spacing(1)} + 6px)`,
                            }}>
                            {image.title}
                            <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                    </Image>
                </ImageButton>
            ))}
        </Box>
    );
};

export default memo(ButtonCategories);
