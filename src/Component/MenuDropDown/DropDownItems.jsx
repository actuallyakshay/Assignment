import React, { useContext } from 'react'
import { UserContext } from '../../Context/userContext'
import Title from '../../Molecules/Title'
import SingleUserBox from '../HomePageComponents/SingleUserBox'
import data from "../../user.json"
import { useState } from 'react'
import { GET_SINGLE_USER_ACTION } from '../../Context/action'

const DropDownItems = () => {
    const { state: { singleUserData }, dispatch } = useContext(UserContext)
    const [userData, setData] = useState(data.users)

    const handleClick = (id) => {
        dispatch(GET_SINGLE_USER_ACTION(id))
    }

    return (
        <div className=' flex flex-col justify-center items-center gap-2 pb-3'>
            <img className='rounded-full' src="https://avatars.githubusercontent.com/u/107462720?v=4" alt="" width={'50% '} />
            < Title title={singleUserData?.name} />
            <p className='text-[14px] text-gray-400'>{singleUserData?.email}</p>
            <div className='mx-5 border-t border-gray-300 mt-3'>
                {
                    userData.slice(0, 2)?.map((el, i) => {
                        return <div onClick={() => handleClick(el.id)} class='cursor-pointer flex gap-3 justify-center items-center border-b py-2 '>
                            <img class='rounded-full w-[10%]' src="https://avatars.githubusercontent.com/u/107462720?v=4" alt="" />
                            <div class='text-md text-gray-700 font-[400]'>
                                <Title title={el.name} />
                            </div>
                        </div >
                    })
                }
            </div>
            <button className='mt-2 rounded-[20px] px-2 py-1 text-white bg-[#e15b22]'>
                <a href="/">Sign out</a>
            </button>
        </div >
    )
}

export default DropDownItems