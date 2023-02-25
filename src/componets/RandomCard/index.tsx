import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FC, memo, useState } from 'react';
import { ButtonContainer, H1Random, MainContainer, MainContainerLoading } from './styles';
import { useRandomCardLogic } from './logic';
import ButtonRandom from '../ButtonRandom';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const RandomCard: FC = () => {
    const {
        handleExpandClick,
        expanded,
        printRandomCard,
        StyledCard,
        randomCardData,
        setRandomCardData,
    } = useRandomCardLogic();

    const [loading, setLoading] = useState(true);
    const handlePrintRandomCard = async () => {
        try {
            const randomCards = await printRandomCard();
            const randomCard = randomCards[0];
            setRandomCardData({
                title: randomCard.title,
                category: randomCard.category,
                img: randomCard.img,
                description: randomCard.description,
                instrucctions: randomCard.instrucctions,
                ingredients: randomCard.ingredients,
            });
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    if (loading) {
        return (
            <MainContainerLoading>
                <H1Random>
                    ¡Descubre un nuevo sabor cada vez que pulses el botón
                    Random! {<br />}{<br />}
                    ¿Te atreves a probar suerte y descubrir tu nuevo cóctel
                    favorito?{<br />}{<br />} ¡Dale al botón Random y comienza la aventura!
                </H1Random>
                <ButtonContainer>
                    <ButtonRandom onClick={handlePrintRandomCard} />
                </ButtonContainer>
            </MainContainerLoading>
        );
    }
    return (
        <>
            <MainContainer>
                <StyledCard
                    sx={{
                        width: 300,
                    }}>
                    <CardHeader
                        avatar={
                            <Avatar
                                sx={{
                                    bgcolor: red[500],
                                }}
                                aria-label="recipe"
                                src={randomCardData.img}>
                                R
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={randomCardData.title}
                        subheader={randomCardData.category}
                    />
                    <CardMedia
                        component="img"
                        height="200"
                        image={randomCardData.img}
                        alt="Paella dish"
                        sx={{
                            height: 220,
                            objectFit: 'cover',
                            width: '100%',
                        }}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.primary">
                            {randomCardData.description}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more">
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph sx={{}}>
                                &#x1F1E9;&#x1F1EA;
                                {randomCardData.instrucctions.de}
                            </Typography>
                            <Typography paragraph>
                                &#x1F1EE;&#x1F1F9;
                                {randomCardData.instrucctions.it}
                            </Typography>
                            <Typography paragraph>
                                Ingredient 1: {randomCardData.ingredients.one}
                            </Typography>
                            <Typography paragraph>
                                Ingredient 2: {randomCardData.ingredients.two}
                            </Typography>
                            <Typography paragraph>
                                Ingredient 3: {randomCardData.ingredients.three}
                            </Typography>
                            {randomCardData.ingredients.four ? (
                                <Typography paragraph>
                                    Ingredient 4:
                                    {randomCardData.ingredients.four}
                                </Typography>
                            ) : null}
                        </CardContent>
                    </Collapse>
                </StyledCard>
            </MainContainer>
            <ButtonContainer>
                <ButtonRandom onClick={handlePrintRandomCard} />
            </ButtonContainer>
        </>
    );
};

export default memo(RandomCard);