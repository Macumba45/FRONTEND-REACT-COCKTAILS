import { FC, memo } from 'react';
import { useNavBarBottomLogic } from './logic';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { StyledFab } from './styles';

const NavBarBottom: FC = () => {
    const { goToFeedPage, goToRandomPage, goToCategoryPage } =
        useNavBarBottomLogic();

    return (
        <>
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
        </>
    );
};

export default memo(NavBarBottom);
