import { FC, memo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useLogic from './logic';
import type { CategoryImage } from './type';
import {
    ImageButton,
    ImageSrc,
    ImageBackdrop,
    ImageMarked,
    Image,
} from './styles';
import { Button } from '@mui/material';

const ButtonCategories: FC = () => {
    const {
        categories,
        Images,
        loading,
        syncCategories,
        goToDetails
    } = useLogic();

    if (loading) {
        return (
            <Button disabled sx={{ marginTop: '5rem' }}>
                Cargando categorías...
            </Button>
        );
    }


    if (categories.length === 0) {
        return (
            <Button onClick={syncCategories} sx={{ marginTop: '5rem' }}>
                Cargar categorías
            </Button>
        );
    }
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                width: '100%',
                marginTop: '4.0rem',
                marginBottom: 7,
            }}>
            {categories.map((category) => {
                const image: CategoryImage | undefined = Images.find(
                    (img) => img.category === category
                );
                return (
                    <ImageButton
                        focusRipple
                        key={category}
                        style={{
                            width: '50%',
                            backgroundImage: 'cover',
                            border: '1px solid white',
                        }}
                        onClick={() => goToDetails(category)}>
                        {image && (
                            <ImageSrc
                                style={{
                                    backgroundImage: `url(${image.picture})`,
                                }}
                            />
                        )}
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
                                        `calc(${theme.spacing(1)} + 1px)`,
                                    fontWeight: 'bold',
                                }}>
                                {category}
                                <ImageMarked className="MuiImageMarked-root" />
                            </Typography>
                        </Image>
                    </ImageButton>
                );
            })}
        </Box>
    );
};

export default memo(ButtonCategories);
