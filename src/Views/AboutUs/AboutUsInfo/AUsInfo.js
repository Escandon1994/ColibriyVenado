import React,{Component} from 'react';
import "./AUInfo.scss";

class AUInfo extends Component {
    render(){
        return(
            <div className="AUInfoContainer">
                <div className="PrincipalContainer">
                    <div className="AboutUsTextContainer">
                        <h1>Sobre Nosotros</h1>
                        <hr/>
                        <div className="TextContainer">
                            <p><strong>Colibrí y Venado Arte Escénico</strong> surge como un proyecto 
                            académico de la creación de <strong>Fernanda Ruíz Vargas y Noemí Contreras 
                            Cano</strong>  en el resguardo de donde ahora son egresadas, la Escuela 
                            Nacional de Danza Folklórica del Instituto Nacional de Bellas Artes.  
                            </p>
                            <p>La raíz de su inspiración está en la <strong>danza y música 
                            mexicana</strong>  y en la relación innata que entre estas artes existe.
                            </p>
                            <p>Así es que logran fundir en cada una de sus obras escénicas el canto, 
                            la poesía, la danza y la música, en un solo verbo y que al conjugarlas 
                            con la disciplina de otras artes y la experiencia que cada una de sus 
                            fundadoras ha forjado, logran un trabajo interdisciplinario y un lenguaje 
                            extrasensorial como experiencia para el espectador, que no sólo se queda 
                            en la vivencia de un espectáculo, sino que traspone hasta tocar las fibras 
                            más sensibles de las emociones humanas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AUInfo;