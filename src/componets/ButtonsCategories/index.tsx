import { FC, memo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ButtonCategoriesLogic } from './logic';
import type { CategoryImage } from './type';
import {
    ImageButton,
    ImageSrc,
    ImageBackdrop,
    ImageMarked,
    Image,
} from './styles';

const ButtonCategories: FC = () => {
    const { categories, setCategories, fetchCategories, Images } =
        ButtonCategoriesLogic();

    const navigate = useNavigate(); // Obtener la función navigate

    const handleClick = (category: string) => {
        const slug = categorySlugMap[category];
        navigate(`/categories/${slug}`); // Navegar a la ruta deseada
    }

    useEffect(() => {
        async function getCategories() {
            const categoriesList = await fetchCategories();
            setCategories(categoriesList as string[]);
        }

        getCategories();
    }, []);

    const categorySlugMap = Images.reduce((map, { category, slug }) => {
        map[category] = slug;
        return map;
    }, {} as Record<string, string>);

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
                // const modifiedCategory = category.replace('/', '_'); // Reemplazar el caracter "/" por "_"

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
                        onClick={() => handleClick(category)}>
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
