import React from 'react';
import Aux from '../../hoc/auxi';
import classes from './Layout.css';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import SideDrawer from './../Navigation/SideDrawer/SideDrawer';


const layout = (props) =>(
    <Aux>
    <div>
     <ToolBar />
     <SideDrawer />
    </div>

    <main className = {classes.content}>
    {props.children}
    </main>
</Aux>
    
);


export default layout