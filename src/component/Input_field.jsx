// import PropTypes from 'prop-types'
import React from 'react'

export const Input_field = (props) => {
    return (
        <>
            <label className='font-black xl:text-xl' htmlFor={props.label}>{props.label}</label>
            <input type="text" onChange={(e)=>props.todo_input(e , props.label)} className={`${props.class} xl:w-1/4 min-xl:w-2/4 rounded border border-black bg-purple-100 hover:bg-white`} 
            id={props.label} placeholder={`${props.placeholder}`} />
        </>
    )
}

// Input_field.propTypes = {
//   second: PropTypes.third
// }

