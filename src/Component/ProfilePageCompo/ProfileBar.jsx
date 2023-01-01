import React from 'react'
import { useParams } from 'react-router-dom'
import Title from '../../Molecules/Title'
import ProfileDropDown from '../MenuDropDown/ProfleDropDown'

const ProfileBar = () => {
    
    const { id } = useParams()
    return (
        <div class='flex h-full items-center justify-between '>
            <div className='capitalize text-[20px] text-gray-500'>
                <Title title={window.location.pathname == `/${id}/` || window.location.pathname == `/${id}` ? "Profile" : window.location.pathname.substring(3)} />
            </div>
            <ProfileDropDown />
        </div>
    )
}

export default ProfileBar