import { Avatar, Button, ButtonGroup } from '@mui/material';
import Buttonn from '@mui/joy/Button';

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
    BackGroundProfile,
    ButtonsContainer,
    Container,
    ContainerProfile,
    DescriptionContainer,
    HrElement,
    MainContainerPost,
    PostDetails,
    PostTitle,
    ProfileDetailsEmail,
    ProfileDetailsName,
} from './styles';

const Profile: FC = () => {
    const { userData, userInfo, userPostProfile, userPost } = ProfileLogic();
    const [showUserPosts, setShowUserPosts] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            await userInfo();
            await userPostProfile();
        };
        fetchData();
    }, [userInfo, userPostProfile]);

    const handleShowUserPosts = () => {
        setShowUserPosts(!showUserPosts);
        if (!showUserPosts) {
            userPostProfile();
        }
    };

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
                                    {item.category}
                                </Typography>
                                <Typography level="body2">
                                    {item.createdAt}
                                </Typography>
                                <IconButton
                                    aria-label="bookmark Bahamas Islands"
                                    variant="plain"
                                    color="neutral"
                                    size="sm"
                                    sx={{
                                        position: 'absolute',
                                        top: '0.5rem',
                                        right: '0.5rem',
                                    }}>
                                    <DeleteIcon />
                                </IconButton>
                                <AspectRatio
                                    minHeight="120px"
                                    maxHeight="200px"
                                    sx={{ my: 2 }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                                        srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                                        loading="lazy"
                                        alt=""
                                    />
                                </AspectRatio>
                                <Box sx={{ display: 'flex' }}>
                                    <div>
                                        <Typography level="body3">
                                            Title:
                                        </Typography>
                                        <Typography
                                            fontSize="lg"
                                            fontWeight="lg">
                                            {item.title}
                                        </Typography>
                                    </div>
                                </Box>
                            </Card>
                        </MainContainerPost>
                    ))}
            </MainContainerPost>
        </>
    );
};

export default memo(Profile);
