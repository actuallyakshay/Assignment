import React from 'react'
import Title from '../../Molecules/Title'

const SingleUserBox = ({ name,id, handleClick }) => {
    return (
        <div onClick={() => handleClick(id)} class='cursor-pointer flex gap-3 items-center border-b py-2 '>
            <img class='rounded-full w-[7%]' src="https://avatars.githubusercontent.com/u/107462720?v=4" alt="" />
            <div class='text-md text-gray-700 font-[400]'>
                <Title title={name} />
            </div>
        </div >
    )
}

export default SingleUserBox