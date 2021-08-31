import React from "react";
import './ExpensesForm.css';

const ExpensesForm = () =>{
    const InputTitle = (event) =>{
        console.log(event.target.value);
    }

    const InputPrice = (event) =>{
        console.log(event.target.value);
    }

    const InputDate = (event) =>{
        console.log(event.target.value);
    }
    return(
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" onChange={InputTitle}/>
                </div>
                <div className='new-expense__control'>
                    <label>Price</label>
                    <input type="number" min='0.01' step='0.01' onChange={InputPrice}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min='01-01-2019' max='31-12-2021' onChange={InputDate}/>
                </div>
                <div className='new-expense__actions'>
                    <button type="submit">Save</button>
                </div>
            </div>
        </form>
    );
}

export default ExpensesForm;