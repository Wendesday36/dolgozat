export default function MondatKiegeszit(props) {
  const mondatLista = props.mondatObj.mondat.split(" ");
  function kovetkezo() {
    document.getElementsByClassName("hiba")[0].classList.add("elrejt");
    document.getElementsByClassName("pipa")[0].classList.add("elrejt");
    props.kovetkezo(props.mondatObj.index);
  }
  
  return (
    <p>
      {mondatLista.map((elem, i) => {
        if (elem === "_") {
          return <input className="bevitel" key={i} id={i}></input>;
        } else {
          return <span key={i}>{elem} </span>;
        }
      })}
      <span>({props.mondatObj.alap})</span>
      <span className="elrejt pipa" > ✔️
        {" "}
        <button className="btn btn-success kovetkezo" onClick={kovetkezo}> 
         Következő</button>

      </span>
      <span className="elrejt hiba"> ❌
      </span>
    </p>
  );
}
