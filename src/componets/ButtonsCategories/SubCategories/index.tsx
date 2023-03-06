import { FC, memo, useEffect, useState } from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { LinearProgress } from '@mui/material';
import claymore from './assets/9e582977-9171-4dda-9d9b-68b24755ccf2.png';
import useLogic from './logic';
import { useParams } from 'react-router-dom';
import { Params } from './type';
import {
    Claymore,
    MainContainer,
    MainContainerClaymore,
    MainContainerLoader,
} from './styles';

const ButtonSubCategories: FC = () => {
    const { category } = useParams<Params>();
    const [isLoading, setIsLoading] = useState(true);
    const { subCategories, setSubCategories, fetchSubCategories } = useLogic();

    const handleCategories = async () => {
        const modifiedCategory = category; // Reemplazar el caracter "/" por "_"
        const categories = await fetchSubCategories(modifiedCategory);

        setTimeout(() => {
            setSubCategories(categories);
            setIsLoading(false);
        }, 1000);
    };

    // Llamamos a la función handleCategories cuando se monta el componente
    useEffect(() => {
        handleCategories();
    }, [category]);

    if (isLoading) {
        return (
            <MainContainerLoader>
                <Box sx={{ width: '10rem' }}>
                    <LinearProgress
                        color="secondary"
                        sx={{ backgroundColor: '#420024' }}
                    />
                </Box>
                <MainContainerClaymore>
                    <Claymore src={claymore} />
                </MainContainerClaymore>
            </MainContainerLoader>
        );
    }

    return (
        <MainContainer>
            {subCategories.map((category) => (
                <Box
                    component="div"
                    key={category.strDrink}
                    sx={{
                        display: 'flex',
                        gap: 2,
                        flexWrap: 'wrap',
                        p: 0,
                        m: 0,
                        width: '300px',
                        marginTop: 10,
                        margin: '0 1rem',
                    }}>
                    <Card component="li" sx={{ flexGrow: 1, width: '300px' }}>
                        <CardCover>
                            <img
                                src={category.image}
                                srcSet={category.image}
                                loading="lazy"
                                alt=""
                            />
                        </CardCover>
                        <CardContent>
                            <Typography
                                level="h6"
                                fontWeight={900}
                                textColor="#fff"
                                mt={{ xs: 12, sm: 18 }}>
                                {category.cocktail_name}
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            ))}
        </MainContainer>
    );
};

export default memo(ButtonSubCategories);
