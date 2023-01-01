import React, { useContext, useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import ProfileBar from '../Component/ProfilePageCompo/ProfileBar'
import { GET_SINGLE_USER_ACTION } from '../Context/action'
import { UserContext } from '../Context/userContext'
import Navbar from '../Utils/Navbar'
import Profile from './Profile'

function UserProfile() {

  const { id } = useParams()

  const { state: { singleUserData }, dispatch } = useContext(UserContext)

  useEffect(() => {
    dispatch(GET_SINGLE_USER_ACTION(id))
  }, [])


  return (
    <div class='w-screen h-screen  flex gap-10 px-8  pt-3 overflow-x-hidden'>
      <Navbar />
      <div class='flex flex-col w-full'>
        <div class='h-[13vh]  w-[100%] border-b border-gray-300'>
          <ProfileBar />
        </div>
        <div className={`${window.location.pathname == `/${id}` || window.location.pathname == `/${id}/` ? 'block' : "hidden"} `}>
          < Profile />
        </div>
        <Outlet />
      </div>
    </div >
  )
}

export default UserProfile