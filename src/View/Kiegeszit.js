import { useState } from "react";
import MondatokModel from "../model/MondatokModel";
import MondatKiegeszit from "./MondatKiegeszit";
export default function Kiegeszit() {
    const mondatokModel = new MondatokModel();
    let cim = mondatokModel.getcim();
    const [mondat, setMondat] = useState(mondatokModel.aktMondatOsszeallit(2));
    function kovetkezo(index) {
        let i = mondatokModel.kovElem(index)
        setMondat(mondatokModel.aktMondatOsszeallit(i))
        console.log(i)
    }   
     function sugo(){
        let sugo = mondatokModel.getsugoSzoveg()
        console.log(sugo)
    } 
    return (
        <article className="tartalom">
            <h3>
                {cim}
                <button className="sugo-btn btn btn-succes"
                    onClick={sugo}
                >
                    sugo
                </button>
            </h3>
            <h4>Írd be a helyes választ!</h4>
            
            <section className="mondat">
            <MondatKiegeszit mondatObj={mondat} kovetkezo={kovetkezo}/>
            </section>
 
        </article>
 
    );
}