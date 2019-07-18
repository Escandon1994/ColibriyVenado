import React,{Component} from 'react';
import "./SideComponent.scss";
import Bailarina from "../../Assets/img/SideBar/testArtist.png";
import Close from "../../Assets/img/SideBar/close.svg"
import Menu from "../../Assets/img/SideBar/menu.svg";

class SideComponent extends Component {
    
    render(){

        return(
            <div id="IDSideContainer" className="SideContainer">
                <div className="PrincipalContainerOne">
                    <img alt="Bailarina de Balet" src={Bailarina}></img>
                </div>
                <div className="PrincipalContainerTwo">
                    <div id="mySidenav" className="sidenav">
                        <a href="#"><span>01</span>Inicio</a>
                        <a href="#"><span>02</span>Sobre Nosostros</a>
                        <a href="#"><span>03</span>Nuestras Producciones</a>
                        <a href="#"><span>04</span>Notas Periodísticas</a>
                        <a href="#"><span>05</span>Informes y contrataciones</a>
                        <div className="SocialNetworkContainer">
                            <a className="SocialNetWorkIcon InstagramIcon" href="https://www.facebook.com"></a>
                            <a className="SocialNetWorkIcon YouTubeIcon" href="https://www.facebook.com"></a>
                            <a className="SocialNetWorkIcon FacebookIcon" href="https://www.facebook.com"></a>
                            <a className="SocialNetWorkIcon TwitterIcon" href="https://www.facebook.com"></a>                    
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideComponent;
