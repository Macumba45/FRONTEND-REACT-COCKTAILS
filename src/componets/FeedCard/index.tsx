import { FC, memo, useState } from 'react';
import { useFeedCardLogic } from './logic';
import { styled } from '@mui/material/styles';
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import {
    MainContainer,
    MainContainerBar,
    MainContainerLoading,
} from './styles';
import IMGPRUEBA from './maxresdefault.jpg';

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

const FeedCard: FC = () => {
    const { handleExpandClick, expanded, StyledCard, handleDeleteClick } =
        useFeedCardLogic();
    const [loading, setLoading] = useState(true);

    // if (loading) {
    //     return (
    //         <>
    //             <MainContainerBar>
    //                 <Box sx={{ width: '10rem', marginTop: '2rem' }}>
    //                     <LinearProgress
    //                         color="secondary"
    //                         sx={{ backgroundColor: '#420024' }}
    //                     />
    //                 </Box>
    //             </MainContainerBar>
    //             <MainContainerLoading>
    //                 <Stack spacing={1}>
    //                     {/* For variant="text", adjust the height via font-size */}
    //                     <Skeleton
    //                         variant="text"
    //                         sx={{
    //                             fontSize: '2rem',
    //                             marginTop: '2rem',
    //                             backgroundColor: 'white',
    //                         }}
    //                     />
    //                     <Skeleton
    //                         variant="circular"
    //                         width={40}
    //                         height={40}
    //                         sx={{ backgroundColor: 'white' }}
    //                     />
    //                     <Skeleton
    //                         variant="rectangular"
    //                         width={300}
    //                         height={150}
    //                         sx={{ backgroundColor: 'white' }}
    //                     />
    //                     <Skeleton
    //                         variant="rounded"
    //                         width={300}
    //                         height={150}
    //                         sx={{
    //                             marginBottom: '10rem',
    //                             backgroundColor: 'white',
    //                         }}
    //                     />
    //                 </Stack>
    //             </MainContainerLoading>
    //         </>
    //     );
    // }

    return (
        <>
            <MainContainer>
                <StyledCard sx={{ width: 300 }}>
                    <CardHeader
                        avatar={
                            <Avatar
                                sx={{ bgcolor: red[500] }}
                                aria-label="recipe">
                                R
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={`${IMGPRUEBA}`}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.primary">
                            This impressive paella is a perfect party dish and a
                            fun meal to cook together with your guests. Add 1
                            cup of frozen peas along with the mussels, if you
                            like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton
                            aria-label="share"
                            onClick={handleDeleteClick}>
                            <DeleteIcon />
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
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until
                                simmering, add saffron and set aside for 10
                                minutes.
                            </Typography>
                            <Typography paragraph>
                                Heat oil in a (14- to 16-inch) paella pan or a
                                large, deep skillet over medium-high heat. Add
                                chicken, shrimp and chorizo, and cook, stirring
                                occasionally until lightly browned, 6 to 8
                                minutes. Transfer shrimp to a large plate and
                                set aside, leaving chicken and chorizo in the
                                pan. Add pimentón, bay leaves, garlic, tomatoes,
                                onion, salt and pepper, and cook, stirring often
                                until thickened and fragrant, about 10 minutes.
                                Add saffron broth and remaining 4 1/2 cups
                                chicken broth; bring to a boil.
                            </Typography>
                            <Typography paragraph>
                                Add rice and stir very gently to distribute. Top
                                with artichokes and peppers, and cook without
                                stirring, until most of the liquid is absorbed,
                                15 to 18 minutes. Reduce heat to medium-low, add
                                reserved shrimp and mussels, tucking them down
                                into the rice, and cook again without stirring,
                                until mussels have opened and rice is just
                                tender, 5 to 7 minutes more. (Discard any
                                mussels that don&apos;t open.)
                            </Typography>
                            <Typography>
                                Set aside off of the heat to let rest for 10
                                minutes, and then serve.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </StyledCard>
            </MainContainer>
        </>
    );
};

export default memo(FeedCard);
