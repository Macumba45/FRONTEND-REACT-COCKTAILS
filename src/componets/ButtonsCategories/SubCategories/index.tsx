import { FC, memo, useEffect } from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { SubCategoriesLogic } from './logic';
import { MainContainer } from './styles';
import { useParams } from 'react-router-dom';
import { Params } from './type';

const ButtonSubCategories: FC = () => {
    const { category } = useParams<Params>();

    const { subCategories, setSubCategories, fetchSubCategories } =
        SubCategoriesLogic();

    const handleCategories = async () => {
        const categories = await fetchSubCategories(category);
        setSubCategories(categories);
    };

    // Llamamos a la función handleCategories cuando se monta el componente
    useEffect(() => {
        handleCategories();
    }, []);

    return (
        <MainContainer>
            {subCategories.map((category) => (
                <Box
                    component="div"
                    key={category.idDrink}
                    sx={{
                        display: 'flex',
                        gap: 2,
                        flexWrap: 'wrap',
                        p: 0,
                        m: 0,
                        width: '300px',
                        marginTop: 10,
                        margin: '0 auto',
                    }}>
                    <Card component="li" sx={{ flexGrow: 1, width: '300px' }}>
                        <CardCover>
                            <img
                                src={category.strDrinkThumb}
                                srcSet={category.strDrinkThumb}
                                loading="lazy"
                                alt=""
                            />
                        </CardCover>
                        <CardContent>
                            <Typography
                                level="h6"
                                fontWeight="lg"
                                textColor="#fff"
                                mt={{ xs: 12, sm: 18 }}>
                                {category.strDrink}
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            ))}
        </MainContainer>
    );
};

export default memo(ButtonSubCategories);
