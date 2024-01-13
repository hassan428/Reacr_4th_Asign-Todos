import React, { useState } from 'react'
import { Todo_input } from './Todo_input'
import { Btn } from './Btn'

const Todo_list = () => {
    const [data, setdata] = useState([])
    const [render, setrender] = useState(false)
    let arr = [...data]
    const obj = (e) => {
        arr.push(e)
        // console.log(e)
        setdata(arr)
        setrender(true)
        // console.log(arr)
    }

    const delete_fun = () => {
        setrender(false)
        setdata([])
    }
    console.log(data)

    return (
        <>
            <Todo_input get_obj={obj} delete_obj={delete_fun} />
            {data.map((obj_data, index) => {
                return render ?
                    (<div key={index} className='flex-col justify-center items-center m-auto my-2 p-2 w-3/4 rounded-2xl border-2  border-black' >
                        
                        <div className='flex justify-between content-center w-full items-center'>
                            <div className='w-3/4'>
                            <strong className='font-black'>Title:- </strong>
                            <h1 className='overflow-auto'>{obj_data.Title}</h1>
                            </div>
                            <div className='flex'>
                                <Btn text="Edit" class="mx-1 px-3 py-1" />
                                <Btn text="Delete" class="mx-1 px-3 py-1" />
                            </div>
                        </div>

                        <div className='flex justify-between w-full items-center'>
                            <div className='w-2/4 lg:w-3/4  flex-col'>
                            <strong className='font-black'>Description:- </strong>
                            <h1 className='overflow-scroll'>{obj_data.Description}</h1>
                            {/* <textarea name="" className='p-2' defaultValue={obj_data.Description} id="" cols="50" rows="3">{obj_data.Description}</textarea> */}
                            </div>
                            <div className='flex'>
                                <Btn text="Edit" class="mx-1 px-3 py-1" />
                                <Btn text="Delete" class="mx-1 px-3 py-1" />
                            </div>
                        </div>
                    </div>)
                    : render == false
            })
            }
        </>
    )
}

export { Todo_list }