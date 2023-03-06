import {
    Avatar,
    Button,
    ButtonGroup,
    CardActions,
    CardContent,
    Collapse,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FC, memo, useEffect, useState } from 'react';
import NavBar from '../../componets/NavBar';
import { ProfileLogic } from './logic';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

import {
    AvatarContainer,
    ButtonsContainer,
    Container,
    ContainerProfile,
    DescriptionContainer,
    HrElement,
    MainContainerPost,
    ProfileDetailsEmail,
    ProfileDetailsName,
} from './styles';
import { ExpandMore } from '@mui/icons-material';
import { defaultImage } from '../../services/api/feedForm';

const Profile: FC = () => {
    const {
        userData,
        userInfo,
        userPostProfile,
        userPost,
        expanded,
        handleExpandClick,
        onDelete,
        goToUpdate,
        handleShowUserPosts,
        showUserPosts,
    } = ProfileLogic();

    useEffect(() => {
        const fetchData = async () => {
            await userInfo();
            await userPostProfile();
        };
        fetchData();
    }, [userInfo, userPostProfile]);

    return (
        <>
            <NavBar />
            <Container>
                <ContainerProfile>
                    <AvatarContainer>
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                            sx={{ width: 80, height: 80, marginTop: 2 }}
                        />
                    </AvatarContainer>
                    <DescriptionContainer>
                        <ProfileDetailsName>
                            {userData?.name || ''}
                        </ProfileDetailsName>
                        <HrElement />
                        <ProfileDetailsEmail>
                            {userData?.email || ''}
                        </ProfileDetailsEmail>
                    </DescriptionContainer>
                    <ButtonsContainer>
                        <ButtonGroup
                            disableElevation
                            variant="contained"
                            aria-label="Disabled elevation buttons">
                            <Button
                                sx={{
                                    border: 'none',
                                    backgroundColor: '#420024',
                                }}>
                                Favorites
                            </Button>
                            <Button
                                onClick={handleShowUserPosts}
                                sx={{
                                    border: 'none',
                                    backgroundColor: '#420024',
                                }}>
                                My posts
                            </Button>
                        </ButtonGroup>
                    </ButtonsContainer>
                </ContainerProfile>
            </Container>
            <MainContainerPost>
                {showUserPosts &&
                    userPost.map((item) => (
                        <MainContainerPost key={item.title}>
                            <Card
                                variant="outlined"
                                sx={{
                                    width: 320,
                                    backgroundColor: '#343a40',
                                    color: 'white',
                                }}>
                                <Typography
                                    level="h2"
                                    fontSize="md"
                                    sx={{ mb: 0.5 }}>
                                    {item.postCategory}
                                </Typography>

                                <Typography
                                    level="body2"
                                    sx={{ fontSize: 12, marginTop: 0.5 }}>
                                    {new Date(
                                        item.createdAt
                                    ).toLocaleDateString()}
                                </Typography>
                                <IconButton
                                    aria-label="bookmark Bahamas Islands"
                                    variant="plain"
                                    color="neutral"
                                    size="sm"
                                    onClick={() => goToUpdate(item.id)}
                                    sx={{
                                        position: 'absolute',
                                        top: '0.5rem',
                                        right: '0.5rem',
                                    }}>
                                    <MoreVertIcon />
                                </IconButton>
                                <IconButton
                                    aria-label="bookmark Bahamas Islands"
                                    variant="plain"
                                    color="neutral"
                                    size="sm"
                                    onClick={() => onDelete(item.id)}
                                    sx={{
                                        position: 'absolute',
                                        top: '0.5rem',
                                        right: '2.5rem',
                                    }}>
                                    <DeleteIcon />
                                </IconButton>
                                <AspectRatio
                                    minHeight="120px"
                                    maxHeight="200px"
                                    sx={{ my: 2 }}>
                                    <img
                                        src={defaultImage}
                                        loading="lazy"
                                        alt=""
                                    />
                                </AspectRatio>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}>
                                    <div>
                                        <Typography
                                            level="body3"
                                            marginBottom="0.5rem">
                                            Title:
                                        </Typography>
                                        <Typography
                                            fontSize="lg"
                                            fontWeight="lg">
                                            {item.title}
                                        </Typography>
                                    </div>
                                    <CardActions disableSpacing>
                                        <ExpandMore
                                            onClick={() =>
                                                handleExpandClick(item.id)
                                            }
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                            sx={{ cursor: 'pointer' }}>
                                            <ExpandMoreIcon />
                                        </ExpandMore>
                                    </CardActions>
                                </Box>
                                <Collapse
                                    in={expanded}
                                    timeout="auto"
                                    unmountOnExit>
                                    <CardContent
                                        sx={{
                                            padding: '0px',
                                            marginTop: '20px',
                                        }}>
                                        <Typography padding={0}>
                                            {item.comment}
                                        </Typography>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </MainContainerPost>
                    ))}
            </MainContainerPost>
        </>
    );
};

export default memo(Profile);
