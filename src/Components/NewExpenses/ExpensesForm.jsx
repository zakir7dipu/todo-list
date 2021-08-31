import React, {useState} from "react";
import './ExpensesForm.css';

const ExpensesForm = () =>{
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const InputTitle = event =>{
        setEnteredTitle(event.target.value);
    }

    const InputPrice = event =>{
        setEnteredPrice(event.target.value);
    }

    const InputDate = event =>{
        setEnteredDate(event.target.value);
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