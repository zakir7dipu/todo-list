import React from "react";
import Expences from "./Components/Expences";
import NewExpenses from "./Components/NewExpenses/NewExpenses";
function App(){

    return(
      <div>
          <NewExpenses/>
         <Expences/>
      </div>
    );
}

export default App;