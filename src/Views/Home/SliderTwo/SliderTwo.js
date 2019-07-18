import React,{Component} from 'react';
import "./SliderTwo.scss";
import Alma from "../../../Assets/img/Home/SliderTwo/unAlmaComoLaMia_logo.png";

class SliderTwo extends Component {
    render(){
        return(
            <div className="SliderTwoContainer">
                <div className="TextContainer">
                    <img src={Alma} alt="Un alma como la mía logo"/>
                    <p>Existen eventos desafortunados
                        <br/>
                        que derivan en tragedias inesperadas...
                    </p>
                    <div className="SocialNetworkContainer">
                        <a className="SocialNetWorkIcon TicketIcon" href="https://www.facebook.com"></a>
                        <a className="SocialNetWorkIcon InstagramIcon" href="https://www.facebook.com"></a>
                        <a className="SocialNetWorkIcon YouTubeIcon" href="https://www.facebook.com"></a>
                        <a className="SocialNetWorkIcon FacebookIcon" href="https://www.facebook.com"></a>
                        <a className="SocialNetWorkIcon TwitterIcon" href="https://www.facebook.com"></a>                    
                    </div>
                    <button>Sobre la obra</button>
                </div>
            </div>
        )
    }
}

export default SliderTwo;