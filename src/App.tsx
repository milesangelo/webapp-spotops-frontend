import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { MenuBar } from './Components/MenuBar/MenuBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    //mode: 'dark',
    primary: {
      light: '#33ab9f',
      main: '#009688',
      dark: '#00695f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#474f97',
      main: '#1a237e',
      dark: '#121858',
      contrastText: '#000',
    },
  },
});

function Copyright() {
  return (
    <Typography variant="body1" color="primary.light" align="left">
      {'Copyright © '}
      <Link color="primary.light" href="https://blog.milesangelo.io/">
        milesangelo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <MenuBar></MenuBar>
        <Container maxWidth="lg">
          <Box sx={{ my: 4 }}>
        
            <Copyright />
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}