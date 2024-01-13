import React from 'react'

const Btn = (props) => {
    return (
        // <div>
        //     </div>
        <button onClick={props.onclick} className={`${props.class} cursor-pointer border border-black rounded bg-purple-800 text-white font-bold hover:bg-purple-100 hover:text-purple-800`}>{props.text}</button>
    )
}

export { Btn }