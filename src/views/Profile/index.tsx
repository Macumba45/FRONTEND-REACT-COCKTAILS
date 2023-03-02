import { Avatar, Button, ButtonGroup } from '@mui/material';
import { FC, memo, useEffect } from 'react';
import NavBar from '../../componets/NavBar';
import { ProfileLogic } from './logic';
import { Props } from './type';
import {
    AvatarContainer,
    BackGroundProfile,
    ButtonsContainer,
    Container,
    ContainerProfile,
    DescriptionContainer,
    HrElement,
    ProfileDetailsEmail,
    ProfileDetailsName,
} from './styles';

const Profile: FC = () => {

    const {

        userData,
        setUserData,
        userInfo

    } = ProfileLogic()

    useEffect(() => {
        const fetchData = async () => {
            await userInfo();

        };
        fetchData();
    }, [userInfo]);



    return (
        <>
            <BackGroundProfile>
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
                                        // backgroundColor: '#420024',
                                    }}>
                                    Favorites
                                </Button>
                                <Button
                                    sx={{
                                        border: 'none',
                                        // backgroundColor: '#420024',
                                    }}>
                                    My posts
                                </Button>
                            </ButtonGroup>
                        </ButtonsContainer>
                    </ContainerProfile>
                </Container>
            </BackGroundProfile>
        </>
    );
};

export default memo(Profile);
