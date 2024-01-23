import { useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { NavLink } from 'react-router-dom';


export default function SwipeableTemporaryDrawer() {
    const [open, setOpen] = useState(false);

    return (
        <div className='hambar-container'>
            <Button onClick={() => setOpen(true)}><MenuRoundedIcon className='link ham-icon' /></Button>
            <SwipeableDrawer
                anchor={"right"}
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
            >
                <div className='hambar'>
                    <NavLink to='/'>
                        <p className="link">Home</p>
                    </NavLink>
                    <NavLink to='/compare'>
                        <p className="link">Compare</p>
                    </NavLink>
                    <NavLink to='/wishlist'>
                        <p className="link">Wishlist</p>
                    </NavLink>
                    <NavLink to='/dashboard'>
                        <p className="link">Dashboard</p>
                    </NavLink>
                </div>
            </SwipeableDrawer>

        </div>
    );
}