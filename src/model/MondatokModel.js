import { szenvedoMondatok } from "./angol";
export default class MondatokModel {
    #mondatoklista = [];
    #cim = ""
    #aktObj = {};
    #aktElem = 2;
    #hossz = 0
    #sugoSzoveg="";
    constructor() {
        this.#mondatoklista = szenvedoMondatok;
        this.#cim = this.getcim();
        this.#hossz = this.gethossz();
        this.#sugoSzoveg=this.getsugoSzoveg()
        this.aktMondatOsszeallit(this.#aktElem)
    }
    kovElem(index){
        this.#aktElem=this.#aktElem+1
        if (this.#aktElem>=this.#hossz) {
            this.#aktElem=2
        }
        return this.#aktElem
        
    }
    getcim() {
        return this.#mondatoklista[0]
    }
    getsugoSzoveg() {
        return this.#mondatoklista[1]
    }
    gethossz() {
        return this.#mondatoklista.length - 2;
    }
    aktMondatOsszeallit(index) {
        let egeszObj = this.#mondatoklista[index]
        let egeszMondat = egeszObj.mondat.replace("_", egeszObj.valasztas[0])
        let egeszM = egeszMondat.split(" ")
        this.#aktObj = {
            index : this.#aktElem,
            mondat: egeszObj.mondat,
            alap: egeszObj.alap,
            helyes: egeszObj.valasztas[0],
            teljesmondat:egeszM
        }
        return this.#aktObj;
    }
 
}
