import React, { useContext } from 'react'
import SingleUserBox from './SingleUserBox'
import Title from '../../Molecules/Title'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/userContext'

function UsersList() {
    const { state: { userData } } = useContext(UserContext);
    const navigate = useNavigate()

    const handleClick = (id) => {
        navigate(`/${id}`)
    }

    return (
        <div class="h-[85vh] shadow-2xl w-2/5 rounded-[25px] bg-white">
            <div class='w-full rounded-t-[25px] flex justify-center items-center h-[16vh] text-gray-600 bg-gray-100 text-xl'>
                <Title title="Select an account" />
            </div>
            <div class=' h-[65vh] pb-4 px-7 overflow-y-auto scrollbar scrollbar-thumb-gray-200 '>
                {
                    userData?.map((el, i) => {
                        return <SingleUserBox handleClick={handleClick} key={el.id} {...el} />
                    })
                }
            </div>
        </div>
    )
}

export default UsersList