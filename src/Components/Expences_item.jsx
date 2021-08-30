import React, {useState} from "react";
import ExpencesDate from "./Expences_date";
import "../css/Expenses_item.css";
function ExpencesItem(props){
    const [title, setTitle] = useState(props.description);
    const changeTitle = () =>{
        setTitle('Updated');
        console.log(title);
    }
    return(
      <div className="expense-item">
          <ExpencesDate date={props.date}/>
          <div className="expense-item__description">
              <h2>{title}</h2>
          </div>
          <div className="expense-item__price">${props.price}
              <button onClick={changeTitle}>Change</button></div>
      </div>
    );
}

export default ExpencesItem;