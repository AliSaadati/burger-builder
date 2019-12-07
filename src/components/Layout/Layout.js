import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class layout extends Component {
    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    render() {
        return (
            <Aux>
                <div>
                    <Toolbar />
                    <SideDrawer 
                        open={this.state.showSideDrawer}
                        closed={this.sideDrawerClosedHandler}/>
                    Backdrop
                </div>
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
};

export default layout;