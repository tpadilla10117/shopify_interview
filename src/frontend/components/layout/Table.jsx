import React, { useState, useEffect } from 'react';


function Table() {

    /* const searchRef = useRef(); */
    let initialRender = true;

    const [query, setQuery] = useState('');
    const [ newCell, setNewCell] = useState();

    const [items, setItems] = useState([
        {id: 198355, name: "Fancy pen", description: "Write in red or blue!", price: 1000},
        {id: 168031, name: "Bad pen", description: "Barely works, not worth the money", price: 2000},
        {id: 296110, name: "Fabric softener", description: "From the other leading brand ", price: 1850},  
        {id: 183544, name: "Coffee cup", description: "Dark blue with an ergonomic handle", price: 1600},
        {id: 174200, name: "Desk chair", description: "Your back will thank you", price: 120000},
        {id: 203287, name: "Pillow", description: "Soft and cushiony", price: 5000},
        {id: 107058, name: "Cactus", description: "Some greenery for your home", price: 2000},
        {id: 226912, name: "Desk lamp", description: "Because who wants a dark office?", price: 6000}
       ]);

    function inputHandler() {
        console.log(query)

        for(let i = 0; i < items.length; i++) {
            /* console.log(items[i].name.includes(query)) */
            let loopedItemName = items[i].name;
            let loopedItemDescription = items[i].description;

            /* loopedItemDescription = loopedItemDescription.toLowerCase();
            loopedItemName = loopedItemName.toLowerCase(); */

            if(items[i].name.toLowerCase().includes(query) || items[i].description.toLowerCase().includes(query)) {
                console.log([items[i] ]) 
                
               /*  console.log("The Looper item name: ", loopedItemName)
                console.log("The looped Item Description: ", loopedItemDescription); */
                
                /* theQueriedItem = [items[i]] */
                /* setNewCell([items[i]])
                console.log("Here is newcell: ", newCell) */
            } 
        }
        /* console.log(items) */
        return items;
    }

    function changeToLowerCase() {
        for(let i = 0; i < items.length; i++) {
        
            items[i].name.toLowerCase()
            items[i].description.toLowerCase()
           
        }
        console.log(items);
    }

  /* change state to reflect the query */
/* Reliant on the query value itself */

  /*   useEffect(() => {
       
        
    }, [query]) */

  return (

    <section className='table-parent-container'>

        <div className='table-searchbar-parent-container'>
            <input className='table-searchbar' type="text" placeholder='Search for Products...' /* ref={searchRef} */ value={query}  onChange={event => setQuery(event.target.value)}>
            </input>

            <button onClick={inputHandler}>Search</button>

        </div>

        {/*  
        Input: name || description
        Output: all the params

        - filter through array based on if name / description are included
        .includes() method
        .filter() method
        
        */}

        
            <div className="table-wrapper">
                <div className="table-rows">
                    <div>
                        Name
                    </div>
                    <div>
                        Description
                    </div>
                    <div>
                        Price
                    </div>
                
                </div>

                {
                    items.map( (data) => {
                        return (
                        <div id={data.id} key={data.id} className="table-rows">
                            <h1 className='table-name-cell'>{data.name}</h1>
                            <p className='table-description-cell'>{data.description}</p>
                            <p className='table-price-cell'>{data.price}</p>
                        </div>
                        )
                    })
                }

            </div>
        

        
    </section>
  )
}

export default Table;