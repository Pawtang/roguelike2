import Inventory from './Inventory'
import React, {useState} from 'react';

const Exploration = () => {
const [inventorystate, setInventoryState] = useState('invclosed');
//This array should be generated...


    return(
        <div className="exploration">
           <h2>This is the exploration area</h2>
           <div className="mapgrid">
               <div className="maptile"></div>

               
           </div>
           {(inventorystate === 'invopen') && (<button onClick = {() => setInventoryState('invclosed')}>Inventory</button>)}
           {(inventorystate === 'invclosed') && (<button onClick = {() => setInventoryState('invopen')}>Inventory</button>)}
           {(inventorystate === 'invopen') && (<Inventory />)}
        </div>
    );
  }
  
  export default Exploration;
  