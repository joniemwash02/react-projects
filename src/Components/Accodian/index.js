//single selection

import { useState } from "react";
import data from "./data";
import "./style.css";

//multiple selection

export default function Accodian() {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [miltiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentID) {
    setSelected(getCurrentID === selected ? null : getCurrentID);
  }
  function handleMultipleselection(getCurrentID) {
    let cpyMutiple = [...miltiple]
    const findIndexOfcCurrentId= cpyMutiple.indexOf(getCurrentID)
    console.log(findIndexOfcCurrentId)
    if(findIndexOfcCurrentId===-1){
        cpyMutiple.push(getCurrentID)
    }
    else cpyMutiple.splice(findIndexOfcCurrentId, 1)
    setMultiple(cpyMutiple)
  }

  console.log(selected, miltiple);

  return (
    <div className="wrapper">
      <button
        onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
      >
        enable multiple selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                onClick={
                  enableMultipleSelection
                    ? () => handleMultipleselection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.title}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id || miltiple.indexOf(dataItem.id) !==-1 ? (
                <div className="content">{dataItem.info}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div> no data found</div>
        )}
      </div>
    </div>
  );
}
