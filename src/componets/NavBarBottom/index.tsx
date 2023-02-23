import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledFab } from './styles';

const NavBarBottom: FC = () => {
    const navigate = useNavigate();

    const goToFeedPage = () => {
        navigate('/feed');
    };

    const goToRandomPage = (e: any) => {
        navigate('/random');
    };

    const goToCategoryPage = (e: any) => {
        navigate('/categories');
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ top: 'auto', bottom: 0, backgroundColor: '#420024' }}>
                <Toolbar>
                    <IconButton
                        aria-label="celebration"
                        sx={{ color: 'white' }}
                        onClick={goToRandomPage}>
                        <span className="material-icons">celebration</span>
                    </IconButton>
                    <StyledFab
                        aria-label="add"
                        onClick={goToFeedPage}
                        sx={{
                            color: 'white',
                            backgroundColor: '#420024',
                            border: '1px solid white',
                            '&:hover': {
                                backgroundColor: 'black',
                                borderColor: 'white',
                            },
                        }}>
                        <AddIcon />
                    </StyledFab>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton
                        aria-label="liquor"
                        onClick={goToCategoryPage}
                        sx={{ color: 'white' }}>
                        <span className="material-icons">liquor</span>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

export default memo(NavBarBottom);
