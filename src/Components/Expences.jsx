import ExpencesItem from "./Expences_item";
import "../css/Expenses.css";
function Expences(props){
    const expencesData = [
        {date: new Date('2021-1-21'), description:"By a Care", price:800},
        {date: new Date('2021-2-21'), description:"By a Book", price:31},
        {date: new Date('2021-3-21'), description:"By a Tissue", price:1.5},
        {date: new Date('2021-4-21'), description:"By a Pen", price:2},
    ]
    return(
      <div className="expenses">
          <ExpencesItem date={expencesData[0].date} description={expencesData[0].description} price={expencesData[0].price} />
          <ExpencesItem date={expencesData[1].date} description={expencesData[1].description} price={expencesData[1].price} />
          <ExpencesItem date={expencesData[2].date} description={expencesData[2].description} price={expencesData[2].price} />
          <ExpencesItem date={expencesData[3].date} description={expencesData[3].description} price={expencesData[3].price} />
      </div>
    );
}

export default Expences;