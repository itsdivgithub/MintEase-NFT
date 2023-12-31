import {NavLink} from "react-router-dom"
import "./Navbar.css"
import { Web3Button, useAddress,ConnectWallet } from "@thirdweb-dev/react";

const Navbar = ()=>{

    return(
        <nav className="font-link">
            <div className="logo">MintEase</div>
            <div className="menu-list">
            <ul>
                <NavLink exact to='/' activeClassName="active">
                    Home
                </NavLink>
            </ul>
            <ul >
                <NavLink exact to='/mint' activeClassName="active">
                    Tokenize Your Asset
                </NavLink>   
            </ul>
            <ul>
            <ConnectWallet theme="dark" btnTitle="Connect Wallet" />
            </ul>
            </div>
        </nav>
    );
}

export default Navbar;
