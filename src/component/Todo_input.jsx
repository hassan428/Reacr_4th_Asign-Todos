import React, { useState } from 'react'
import { Input_field } from './Input_field'
import { Btn } from './Btn'

const Todo_input = (props) => {
    const [inputs, setInputs] = useState({})

    let obj = { ...inputs }
    const create_btn = () => {
        props.get_obj(obj)
        
    }
    const delete_btn = () => {
        props.delete_obj()

    }
    const check = (value, key) => {
        obj[key] = value.target.value
        setInputs(obj)
    }
    // console.log(inputs)
  
    return <>
        <div className='flex justify-center items-center my-5 w-full xl:mb-10' >
            <Input_field todo_input={check} class="px-1 mx-1"
                label="Title" placeholder="Title" />
            <Input_field todo_input={check} class="px-1 mx-1"
                label="Description" placeholder="Description" />
            <Btn onclick={create_btn} text="Create" class="mx-1 px-2" />
            <Btn onclick={delete_btn} text="Delete" class="mx-1 px-2" />
        </div>
    </>
}

export { Todo_input }