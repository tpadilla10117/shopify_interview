import React, { useState, useEffect, useRef } from 'react';


function Table() {

    const [btnPressed, setBtnPressed] = useState(false);
    let ListTemplate;
    let initialRender = useRef(true);
    
    const [query, setQuery] = useState('');
    let lowerCasedQuerys = query.toLowerCase();

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

      /*  let items = [
        {id: 198355, name: "Fancy pen", description: "Write in red or blue!", price: 1000},
        {id: 168031, name: "Bad pen", description: "Barely works, not worth the money", price: 2000},
        {id: 296110, name: "Fabric softener", description: "From the other leading brand ", price: 1850},  
        {id: 183544, name: "Coffee cup", description: "Dark blue with an ergonomic handle", price: 1600},
        {id: 174200, name: "Desk chair", description: "Your back will thank you", price: 120000},
        {id: 203287, name: "Pillow", description: "Soft and cushiony", price: 5000},
        {id: 107058, name: "Cactus", description: "Some greenery for your home", price: 2000},
        {id: 226912, name: "Desk lamp", description: "Because who wants a dark office?", price: 6000}
       ]; */

       
    function inputHandler() {
        if (query === "" ) {
            console.log("You cannot search without entering in a term!")
            alert("You cannot search without entering in a term!")
            return;
        }

        console.log(query)
        

        let lowerCasedQuery = query.toLowerCase();
        let newItems =[];

        for(let i = 0; i < items.length; i++) {

            if(items[i].name.toLowerCase().includes(lowerCasedQuery) || items[i].description.toLowerCase().includes(lowerCasedQuery)) {
                console.log(items[i] ) /* I've found the correct matches at this point */
                
            newItems.push(items[i])
                
            } 
            
        }
        /* return alert('submitted') */
        console.log(newItems)
        setItems(newItems)
        /* console.log(items) */
        
       
    }

    useEffect( () => {
        
        console.log(items)
    },[items])

    /* for(let i = 0; i < items.length; i++) {
        if(items[i].name.toLowerCase().includes(lowerCasedQuerys) || items[i].description.toLowerCase().includes(lowerCasedQuerys)) {
            

            ListTemplate = items.map((data) =>
                <div id={data.id} key={data.id} className="table-rows">
                    <h1 className='table-name-cell'>{data.name}</h1>
                    <p className='table-description-cell'>{data.description}</p>
                    <p className='table-price-cell'>{data.price}</p>
                </div>
            )
            
        } else {
            ListTemplate = <p>No Results Found</p>
        }
    } */
    
/* Need to update state based on return of query

    - needs to have initial values on first render
    - subsequent renders get the updated values
*/

    /* function buttonToggle() {
       if(btnPressed === true) {
           setBtnPressed(false)
       } else if (btnPressed === false) {
           setBtnPressed(true)
       }
    }

    useEffect(() => {
        
        if(initialRender.current) {
            initialRender.current = false;
        } else {
            
            let newValue = inputHandler();
            console.log(newValue);
            setItems(newValue);
        }

    }, [btnPressed])
    console.log(btnPressed) */
    

    /* function clickHandler() {
       ListTemplate = items.map( (data) => {
            if(data.name.toLowerCase().includes(lowerCasedQuerys) || data.description.toLowerCase().includes(lowerCasedQuerys) ) 
            return (
            <div id={data.id} key={data.id} className="table-rows">
                <h1 className='table-name-cell'>{data.name}</h1>
                <p className='table-description-cell'>{data.description}</p>
                <p className='table-price-cell'>{data.price}</p>
            </div>
            )
            
           
            
        })
    } */

    
    

  return (

    <section className='table-parent-container'>

        <div className='table-searchbar-parent-container'>
            <input className='table-searchbar' type="text" placeholder='Search for Products...' /* ref={searchRef} */ value={query}  onChange={event => setQuery(event.target.value)} >
            </input>

            <button id='button' onClick={inputHandler}>Search</button>

        </div>
        
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

                {ListTemplate}
                
            {/* {
                    items.map( (data) => {
                        if(data.name.toLowerCase().includes(lowerCasedQuerys) || data.description.toLowerCase().includes(lowerCasedQuerys) ) 
                        return (
                        <div id={data.id} key={data.id} className="table-rows">
                            <h1 className='table-name-cell'>{data.name}</h1>
                            <p className='table-description-cell'>{data.description}</p>
                            <p className='table-price-cell'>{data.price}</p>
                        </div>
                        )
                        
                       
                        
                    })

            } */}
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

               

                {/* <p>No results found</p> */}

            </div>
        

        
    </section>
  )
}

export default Table;