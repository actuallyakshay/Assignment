import React from 'react'
import TitleFontWeight from '../../Molecules/TitleFontWeight'
import TitleWithLessFontWeigth from '../../Molecules/TitleWithLessFontWeigth'




const ProfileSection = ({ name, username, email, phone, website, company }) => {
    const arr = [
        { title: "Username", data: username },
        { title: "email", data: email },
        { title: "phoneNumber", data: phone },
        { title: "website", data: website },
    ]
    const subArray = [
        { title: "Company Name", data: company?.name },
        { title: "catchPhrase", data: company?.catchPhrase },
        { title: "bs", data: company?.bs },]
    return (
        <div class='flex flex-col  w-full items-center h-full justify-center'>
            <img class='rounded-full w-[48%]' src="https://avatars.githubusercontent.com/u/107462720?v=4" alt="" />
            <TitleFontWeight title={name} />
            <div class='flex flex-col gap-2 border-b border-gray-300 py-3'>
                {
                    arr?.map((el, i) => {
                        return <div key={i} class='flex gap-3 items-center justify-center'>
                            <TitleWithLessFontWeigth title={`${el.title}   :`} />
                            <TitleFontWeight title={el.data} />
                        </div>
                    })
                }
            </div>
            <div class='flex flex-col gap-2  py-3'>
                {
                    subArray?.map((el, i) => {
                        return <div key={i} class='flex gap-3 items-center justify-center'>
                            <TitleWithLessFontWeigth title={`${el.title}   :`} />
                            <TitleFontWeight title={el.data} />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default ProfileSection