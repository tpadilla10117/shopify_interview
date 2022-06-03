import React, { useState } from 'react';


/* 
- Input: data like [ {} ]
- Output: show product name, deacription, price


- Considerations:
    - search results return matches AND partial matches from name and description fields

    - Results case insensitive
    - ignore leading / trailing spaces -> how?

- Interactions & Edge Cases - 
    - users can navigate and submit search form using a keyboard or mouse
    - if no results, display 'No results found' INSTEAD of product grid
    - prevemt searches when there is no value in the search field


- Possible Approach:

    - 1) save input data in a variable.  I'm going to save it in React state with useState

    - 2) Need to create a basic searchbar, and a form that populates the data -> UI components

    - 3) Make sure I can target an input from the search bar -> want to be able to read string inputs so I can manipulate that data

    Functionality:
        - 4) With the string input, need to compensate for leading / trailing spaces, as well as check for partial matches
            - e.g. trailing spaces - I can use .trim()
            - for matches / partial matches -> I can use the .filter() method based on some conditions
                - so I can check to see if a query has a lowercasedletter in its name or description since it's case insensitive

        - 5) if no results, return 'No Results Found' instead of product grid

*/

function Table2() {

    const [ items ] = useState([
        {id: 198355, name: "Fancy pen", description: "Write in red or blue!", price: 1000},
        {id: 168031, name: "Bad pen", description: "Barely works, not worth the money", price: 2000},
        {id: 296110, name: "Fabric softener", description: "From the other leading brand ", price: 1850},  
        {id: 183544, name: "Coffee cup", description: "Dark blue with an ergonomic handle", price: 1600},
        {id: 174200, name: "Desk chair", description: "Your back will thank you", price: 120000},
        {id: 203287, name: "Pillow", description: "Soft and cushiony", price: 5000},
        {id: 107058, name: "Cactus", description: "Some greenery for your home", price: 2000},
        {id: 226912, name: "Desk lamp", description: "Because who wants a dark office?", price: 6000}
       ]);

       const [ query, setQuery ] = useState('')


       function searchInputHandler() {
           console.log(query)
       };


  return (
    <section className='table-parent-container'>
        <div className='table-searchbar-container'>
            <input 
                id='table-searchbar'
                className='table-searchbar'
                placeholder='Search for a product'
                value={query}
                onChange={ event => setQuery(event.target.value)}
            />
            <label htmlFor='table-searchbar'></label>

            <button className='table-searchbar-btn'
                onClick={searchInputHandler}
            >
                Search
            </button>

        </div>

        <table className='table-wrapper'>
            <tbody>
                <tr className='table-rows'>
                    <td className='table-heading'>
                        Name
                    </td>
                    <td className='table-heading'>
                        Description
                    </td>   
                    <td className='table-heading'>
                        Price
                    </td>
                </tr>
            </tbody>

            <tbody>

                {items.map( (tabledata) => {
                    return (
                        <tr
                            id={tabledata.id}
                            key={tabledata.id}
                            className='table-rows'
                        >
                            <td className='table-name-cell'>
                                {tabledata.name}
                            </td>
                            <td className='table-name-cell'>
                                {tabledata.description}
                            </td>
                            <td className='table-name-cell'>
                                {tabledata.price}
                            </td>

                        </tr>
                    )
                })}
            </tbody>

        </table>
        
    </section>
  )


}

export default Table2;