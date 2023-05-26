import * as React from 'react';
import c from "./Header.module.css";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import SocialLinksBlock from '../../entities/SocialLinksBlock/SocialLinksBlock';
import { NavBar } from '../../entities/NavBar/NavBar';
import Logo from '../../entities/Logo/Logo';
import BurgerMenu from "../../../public/burgerSM.svg";
import { PhoneLink } from '../../entities/PhoneLink/PhoneLink';

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
      <NavBar navbar="navbar_sm"/>
    </Box>
  );

  return (
    <div className={c.header}>
      {(['top'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <div className={c.header_container}>
            <Logo />
            <div className={c.fullscreen_menu}>
              <NavBar navbar="navbar_lg" />
            </div>
            <div className={c.socialLinksBlock}>
              <SocialLinksBlock colorType='grey' /></div>
            <div className={c.phone}>
              <PhoneLink /></div>
            <img src={BurgerMenu} onClick={toggleDrawer(anchor, true)} className={c.burberMenu} />
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
