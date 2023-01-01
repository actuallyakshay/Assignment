import React, { useContext } from 'react'
import AddressSection from '../Component/ProfilePageCompo/AddressSection'
import ProfileSection from '../Component/ProfilePageCompo/ProfileSection'
import { UserContext } from '../Context/userContext'

const Profile = () => {

    const { state: { singleUserData }, dispatch } = useContext(UserContext)


    return (
        <div class='w-full  h-full flex mt-5'>
            <div class='border-r border-gray-300 h-full w-[40%]'>
                <ProfileSection {...singleUserData} />
            </div>
            <div class=' h-full w-[60%]'>
                <AddressSection {...singleUserData} />
            </div>
        </div>
    )
}

export default Profile