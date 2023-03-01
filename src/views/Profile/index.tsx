import { Avatar, Button, ButtonGroup } from '@mui/material';
import { FC, memo, useCallback, useEffect, useState } from 'react';
import NavBar from '../../componets/NavBar';
import { getAuthenticatedToken } from '../../services/storage';
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


    const [userData, setUserData] = useState<{ id: string, email: string, name: string } | null>(null);
    console.log(userData);

    const userInfo = useCallback(async () => {

        const token = getAuthenticatedToken(); // Obtener el token de localStorage
        const response = await fetch('http://localhost:8000/users/profile', {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Agregar el token al header 'Authorization'
            },
        })

        console.log(response);

        const data = await response.json();
        setUserData(data)

    }, []);

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
