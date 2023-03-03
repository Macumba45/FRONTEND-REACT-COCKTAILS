import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ButtonRandom from '../ButtonRandom';
import { useRandomCardLogic } from './logic';
import { FC, memo, useState } from 'react';
import {
    ButtonContainer,
    H1Container,
    H1Random,
    MainContainer,
    MainContainerBar,
    MainContainerLoading,
} from './styles';
import { Box, LinearProgress } from '@mui/material';

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

const CardRandom: FC = () => {
    const {
        handleExpandClick,
        expanded,
        StyledCard,
        randomCardData,
        setRandomCardData,
        randomFetchCard,
    } = useRandomCardLogic();

    const [loading, setLoading] = useState(true);
    const [loadingBar, setLoadingBar] = useState(true);
    const handlePrintRandomCard = async () => {
        try {
            const randomCard = await randomFetchCard();
            const itemZero = randomCard[0];
            setRandomCardData(itemZero);
            setLoading(false);
            setLoadingBar(false);
        } catch (error) {
            console.log(error);
        }
    };

    if (loading) {
        return (
            <>
                <ButtonContainer>
                    <ButtonRandom onClick={handlePrintRandomCard} />
                </ButtonContainer>
                <MainContainerBar>
                    <Box sx={{ width: '10rem' }}>
                        <LinearProgress
                            color="secondary"
                            sx={{ backgroundColor: '#420024' }}
                        />
                    </Box>
                </MainContainerBar>
                <MainContainerLoading>
                    <Stack spacing={1}>
                        {/* For variant="text", adjust the height via font-size */}
                        <Skeleton
                            variant="text"
                            sx={{
                                backgroundColor: 'white',
                                fontSize: '2rem',
                                marginTop: '0rem',
                            }}
                        />
                        <Skeleton
                            variant="circular"
                            width={40}
                            height={40}
                            sx={{ backgroundColor: 'white' }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={300}
                            height={130}
                            sx={{ backgroundColor: 'white' }}
                        />
                        <Skeleton
                            variant="rounded"
                            width={300}
                            height={130}
                            sx={{
                                marginBottom: '10rem',
                                backgroundColor: 'white',
                            }}
                        />
                    </Stack>
                </MainContainerLoading>
                <H1Container>
                    <H1Random>Are you ready to play?</H1Random>
                    {/* <LinearProgress variant="determinate" value={progress} /> */}
                </H1Container>
            </>
        );
    }

    if (loadingBar) {
        return (
            <MainContainerBar>
                <Box sx={{ width: '10rem' }}>
                    <LinearProgress
                        color="secondary"
                        sx={{ backgroundColor: '#420024' }}
                    />
                </Box>
            </MainContainerBar>
        );
    }
    return (
        <>
            <ButtonContainer>
                <ButtonRandom onClick={handlePrintRandomCard} />
            </ButtonContainer>
            <MainContainer>
                <StyledCard
                    sx={{
                        width: 300,
                        marginBottom: '5rem',
                    }}>
                    <CardHeader
                        avatar={
                            <Avatar
                                sx={{
                                    bgcolor: red[500],
                                }}
                                aria-label="recipe"
                                src={randomCardData.image}>
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
                        image={randomCardData.image}
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
                            <Typography paragraph>
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
        </>
    );
};

export default memo(CardRandom);
