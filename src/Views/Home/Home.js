import React,{Component} from 'react';
import "./Home.scss";
import SliderOne from "../Home/SliderOne/SliderOne";
import SliderTwo from "../Home/SliderTwo/SliderTwo";
import SliderThree from "../Home/SliderThree/SliderThree";
import SideComponent from "../../Components/SideBar/SideComponent";

import Menu from "../../Assets/img/SideBar/menu.svg";
import Close from "../../Assets/img/SideBar/close.svg";

class Home extends Component {

    constructor(props){
        super(props);

        this.openNav=this.openNav.bind(this);
        this.closeNav=this.closeNav.bind(this);
    }

    openNav() {

        document.getElementById("ShowMenu").style.width = "100%";
        document.getElementById("Open").style.display="none";
        document.getElementById("closebtn").style.display="block";

    }

    closeNav() {

        document.getElementById("ShowMenu").style.width = "0%";
        document.getElementById("Open").style.display="block";
        document.getElementById("closebtn").style.display="none";
    }

    render(){

        return(
            <div className="HomeContainer">
                <div className="CornerLeftImage"></div>
                <span id="Open" className="Open" onClick={this.openNav}>
                    <img src={Menu} alt="Icono de menú"></img>
                </span>
                <div id="ShowMenu">
                <SideComponent/>
                </div>
                <div id="CloseMenu">
                    <div id="closebtn" onClick={this.closeNav}>
                        <img src={Close} alt="Close Button"/>
                    </div>
                    <SliderOne/>
                    <SliderTwo/>
                    <SliderThree/>
                </div>
                <div className="CornerRightImage"></div>
            </div>
        )
    }
}

export default Home;