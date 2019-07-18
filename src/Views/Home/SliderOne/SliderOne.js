import React,{Component} from 'react';
import "./SliderOne.scss";
import ColibriLogo from "../../../Assets/img/Home/SliderOne/colibri_y_venado_logo.png";
// import Menu from "../../../Assets/img/SideBar/menu.svg";

class SliderOne extends Component {

    render(){
        return(
            <div id="SliderOneContainer" className="SliderOneContainer">
                <div className="PrincipalContainer">
                    <div className="TextContainer">
                        <img src={ColibriLogo} alt="Logo colíbri y venado"/>
                        <p className="TitleHome">Somos una mágica plataforma de posibilidades escénicas</p>
                        <p className="SubTitleHome">Compañía de producción escénica enfocada en el trabajo artístico interdisciplinar</p>
                        {/* <div className="NextSlider">
                            <p>Ver nuestras producciones</p>
                            <div className="FloatingImage"></div>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default SliderOne;