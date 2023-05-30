import * as React from 'react';
import c from "./Header.module.css";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import SocialLinksBlock from '../../entities/SocialLinksBlock/SocialLinksBlock';
import { NavBar } from './NabBar/NavBar';
import { Emblem } from '../../entities/Emblem/Emblem';
import { NavBarLarge } from './NavBarLarge/NavBarLarge';

type Anchor = 'top';

export default function Header() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
        setState({ ...state, [anchor]: open });
      };

  // Выпадающий список меню
  const list = (anchor: Anchor) => (
    <Box
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <NavBar />
    </Box>
  );

  return (
    <div className={c.header}>
      {(['top'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <div className={c.header_container}>
            <div className={c.burger_menu}><MenuIcon onClick={toggleDrawer(anchor, true)} className={c.menuIcon} /></div>
           <div className={c.fullscreen_menu}>
            <NavBarLarge/>
           </div>
            <Emblem />
            <div className={c.socialLinksBlock}><SocialLinksBlock /></div>
          </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
