import { FC, memo, useState, useEffect } from 'react';
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
import { Box, LinearProgress, Skeleton, Stack } from '@mui/material';
import { Posts } from './type';

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
    const { handleExpandClick, expanded, StyledCard, handleDeleteClick, getAllPosts, posts, loading } =
        useFeedCardLogic();


    useEffect(() => {
        getAllPosts()
    }, [getAllPosts])


    if (loading) {
        return (
            <>
                <MainContainerBar>
                    <Box sx={{ width: '10rem', marginTop: '2rem' }}>
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
                                fontSize: '2rem',
                                marginTop: '2rem',
                                backgroundColor: 'white',
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
                            height={150}
                            sx={{ backgroundColor: 'white' }}
                        />
                        <Skeleton
                            variant="rounded"
                            width={300}
                            height={150}
                            sx={{
                                marginBottom: '10rem',
                                backgroundColor: 'white',
                            }}
                        />
                    </Stack>
                </MainContainerLoading>
            </>
        );
    }

    return (

        <MainContainer>
            <>
                {posts && posts.map((post: Posts) => {
                    return (
                        <StyledCard key={post.id} sx={{ width: 300, marginBottom: 5 }}>
                            <CardHeader
                                avatar={
                                    <Avatar
                                        sx={{ bgcolor: red[500] }}
                                        aria-label="recipe"
                                        src={post.image}>

                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={post.title}
                                subheader={post.postCategory}
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={post.image}
                                alt="Paella dish"
                            />

                            <CardContent sx={{ paddingTop: 1, paddingBottom: 1, paddingLeft: 2 }}>
                                <Typography variant="body2" color="text.primary" fontWeight={700}>
                                    Created at: {new Date(post.createdAt).toLocaleDateString()}
                                </Typography>
                            </CardContent>
                            <CardContent sx={{ paddingTop: 0, paddingBottom: 0, paddingLeft: 2 }}>
                                <Typography variant="body2" color="text.primary">
                                    {post.comment}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                {/* <IconButton
                                    aria-label="share"
                                    onClick={handleDeleteClick}>
                                    <DeleteIcon />
                                </IconButton> */}
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
                                    <Typography paragraph>Comments:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until
                                        simmering, add saffron and set aside for 10
                                        minutes.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </StyledCard>
                    )
                })}
            </>
        </MainContainer>

    );
};

export default memo(FeedCard);
