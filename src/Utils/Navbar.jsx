import React, { memo } from 'react'
import { useParams } from 'react-router-dom'

const linkarr = [
    { link: "", title: "profile" },
    { link: "posts", title: "posts" },
    { link: "gallery", title: "gallery" },
    { link: "toDO", title: "toDO" },

]

const Navbar = () => {

    const { id } = useParams()

    return (
        <div class='bg-gradient-to-r from-[#5168cd] to-[#3e57c8]  h-[95vh] w-[21vw] rounded-[23px] flex flex-col justify-center items-center px-8 text-white'>
            {
                linkarr?.map((el, i) => {
                    return <div key={i} class='border-b capitalize border-white block w-full py-3'>
                        <a href={`/${id}/${el.link}`}>{el.title}</a>
                    </div>
                })
            }


        </div>
    )
}
export default memo(Navbar)