import React from "react";

import './NewExpenses.css'
import ExpensesForm from "./ExpensesForm";

const NewExpenses = () => {
    return(
      <div className='new-expense'>
          <ExpensesForm />
      </div>
    );
}

export default NewExpenses;