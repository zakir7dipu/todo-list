import ExpencesDate from "./Expences_date";
import "../css/Expenses_item.css";
function ExpencesItem(props){
    return(
      <div className="expense-item">
          <ExpencesDate date={props.date}/>
          <div className="expense-item__description">
              <h2>{props.description}</h2>
          </div>
          <div className="expense-item__price">${props.price}</div>
      </div>
    );
}

export default ExpencesItem;