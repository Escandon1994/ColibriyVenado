import React,{Component} from 'react';
import "./SliderThree.scss";
import Alma from "../../../Assets/img/Home/SliderThree/sombrasDeLuna_logo.png";

class SliderThree extends Component {
    render(){
        return(
            <div className="SliderThreeContainer">
                <div className="TextContainer">
                    <img src={Alma} alt="Un alma como la mía logo"/>
                    <p>Algunos son cuentos,
                        <br/>
                        otras son realidades contadas
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

export default SliderThree;