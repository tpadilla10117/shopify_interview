import React, { useState, /* useEffect  */} from 'react';


function Table() {

/* State values for a new query & a filtered search: */
    const [newSearch, setNewSearch] = useState()
    const [query, setQuery] = useState('');

    const [items] = useState([
        {id: 198355, name: "Fancy pen", description: "Write in red or blue!", price: 1000},
        {id: 168031, name: "Bad pen", description: "Barely works, not worth the money", price: 2000},
        {id: 296110, name: "Fabric softener", description: "From the other leading brand ", price: 1850},  
        {id: 183544, name: "Coffee cup", description: "Dark blue with an ergonomic handle", price: 1600},
        {id: 174200, name: "Desk chair", description: "Your back will thank you", price: 120000},
        {id: 203287, name: "Pillow", description: "Soft and cushiony", price: 5000},
        {id: 107058, name: "Cactus", description: "Some greenery for your home", price: 2000},
        {id: 226912, name: "Desk lamp", description: "Because who wants a dark office?", price: 6000}
       ]);
       
/* Handler that takes value of input field from .table-searchbar  */
    function inputHandler() {
        if (query === "" || query === null ) {
            console.log("You cannot search without entering in a term!")
            alert("You cannot search without entering in a term!")
            return;
        }

    /* I lowercase the input value since case insensitive, initialize my items state to a filtered value using .toLowerCase() & .includes() to check for any instance of the query:  */
        let lowerCasedQuery = query.toLowerCase();

        const result = items.filter(filteredItems);
        function filteredItems(item) {
            if(item.name.toLowerCase().includes(lowerCasedQuery) || item.description.toLowerCase().includes(lowerCasedQuery)) {
                console.log(item)
                return item
            } 
            
        }
        console.log(result);
        setNewSearch(result)
        
        if(result.length === 0) {
            return alert("No results found")
        } else {
            return result
        }
        /* return result; */
    };

/* Checks the result of the search: */
   /*  useEffect( () => {
        
        console.log(newSearch)
    },[newSearch]) */


  return (

    <section className='table-parent-container'>

        <div className='table-searchbar-parent-container'>
            <input className='table-searchbar' type="text" placeholder='Search for Products...' /* ref={searchRef} */ value={query}  onChange={event => setQuery(event.target.value)} >
            </input>

            <button id='searchbar-button' onClick={inputHandler}>Search</button>

        </div>
        
            <div className="table-wrapper">
                <div className="table-rows">
                    <div className='table-heading'>
                        Name
                    </div>
                    <div className='table-heading'>
                        Description
                    </div>
                    <div className='table-heading'>
                        Price
                    </div>
                
                </div>

        {/* If newSearch does not have content, show the original items state, else show the filtered data: */}
              {
                  
                !newSearch ?
                    items.map( (data) => {
                        
                        return (
                        <div id={data.id} key={data.id} className="table-rows">
                            <h1 className='table-name-cell'>{data.name}</h1>
                            <p className='table-description-cell'>{data.description}</p>
                            <p className='table-price-cell'>{data.price}</p>
                        </div>
                        )
                       
                    })
            
                    :
                    newSearch.map((data) => {
                        
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