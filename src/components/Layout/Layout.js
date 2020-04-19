import React, {Component} from 'react';

import classes from './Layout.css';
import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    };
    
    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }
    
    sideDrawerTogglehHandler = () => {
        this.setState((prevState)=> {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render () {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerTogglehHandler} />
                <SideDrawer 
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
    
}

export default Layout;