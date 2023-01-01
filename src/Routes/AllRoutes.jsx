import React from 'react'
import { Routes, Route } from "react-router-dom"
import Gallery from '../Pages/Gallery'
import Home from '../Pages/Home'
import Posts from '../Pages/Posts'
import Todo from '../Pages/Todo'
import UserProfile from '../Pages/UserProfile'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/:id" element={<UserProfile />}>
                <Route path="posts" element={<Posts />}></Route>
                <Route path="gallery" element={<Gallery />}></Route>
                <Route path="todo" element={<Todo />}></Route>
            </Route>
        </Routes>
    )
}

export default AllRoutes