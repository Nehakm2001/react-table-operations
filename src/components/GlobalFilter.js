import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table';


//2 props filter - value of the text (search) input, setFilter - setter function of the set filter
const GlobalFilter = ({ filter, setFilter }) => {

    const [value, setValue] = useState(filter)

    //to give 1 sec of delay after typing the word to give the results
    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined)
    }, 1000)


    return (
        // <span>
//gives output right after typing
        //     Search: {' '}
        //     <input
        //         value={filter || ''}
        //         onChange={(e) => setFilter(e.target.value)}
        //     />
        // </span>
        <span>
 {/* //to give 1 sec of delay after typing the word to give the results */}
            Search: {' '}
            <input
                value={value || ''}
                onChange={(e) => {
                    setValue(e.target.value)
                    onChange(e.target.value)
                }}
            />
        </span>
    )
}

export default GlobalFilter;
// value={filter || ''}: This sets the current value of the input field to the value of the filter state. If filter is null or undefined,
//  it sets the value to an empty string ''.

//onChange={(e) => setFilter(e.target.value)}: This is an event handler that is called whenever the input field changes
//(i.e., whenever the user types something in the input field). The e parameter represents the event object. e.target.value is the
//current value of the input field. setFilter(e.target.value) updates the filter state with this new value.