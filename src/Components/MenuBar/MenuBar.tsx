import React, { Component } from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import SkateboardingIcon from '@mui/icons-material/Skateboarding';
export class MenuBar extends Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="small" edge="start" color="inherit" aria-label="logo">
                        <SkateboardingIcon />
                    </IconButton>
                    <Typography variant='h6' component='div'>
                         SPOTOPS
                    </Typography>
                </Toolbar>

            </AppBar>
        )
    }
}
