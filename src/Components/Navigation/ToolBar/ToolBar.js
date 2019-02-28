import React from 'react';
import classes from './ToolBar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';
import DrawerToggle from './../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) =>(
    <header className = {classes.Toolbar}>
    <DrawerToggle click = {props.drawerToggelClicked}/>
        <div>MENU</div>
        <Logo height = "80%" />
        <nav>
            <NavigationItems />
        </nav>
   </header>

)

export default toolbar