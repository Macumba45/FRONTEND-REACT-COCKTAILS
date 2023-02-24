import { Avatar, Button, ButtonGroup } from '@mui/material';
import { FC, memo } from 'react';
import NavBar from '../../componets/NavBar';
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
                                sx={{ width: 80, height: 80, marginTop: 5 }}
                            />
                        </AvatarContainer>
                        <DescriptionContainer>
                            <ProfileDetailsName>
                                Aqui vendrá el nombre:
                            </ProfileDetailsName>
                            <HrElement />
                            <ProfileDetailsEmail>
                                Aqui vendrá el email:
                            </ProfileDetailsEmail>
                        </DescriptionContainer>
                        <ButtonsContainer>
                            <ButtonGroup
                                disableElevation
                                variant="contained"
                                aria-label="Disabled elevation buttons"
                                sx={{
                                    marginLeft: -1,
                                    backgroundColor: 'transparent',
                                }}>
                                <Button
                                    sx={{
                                        border: 'none',
                                        // backgroundColor: '#420024',
                                        marginLeft: -1,
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
