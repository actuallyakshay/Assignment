import React from 'react'
import TitleFontWeight from '../../Molecules/TitleFontWeight'
import TitleWithLessFontWeigth from '../../Molecules/TitleWithLessFontWeigth'



const AddressSection = ({ address }) => {

    const arr = [
        { title: "Street", data: address?.street },
        { title: "Suite", data: address?.suite },
        { title: "City", data: address?.city },
        { title: "Zipcode", data: address?.zipcode },]

    return (
        <div class='flex flex-col gap-4'>
            <div class='pl-9 mt-2'>
                <TitleWithLessFontWeigth title="Address:" />
            </div>
            <div class='ml-[70px] flex flex-col gap-1'>
                {
                    arr?.map((el, i) => {
                        return <div key={i} class='flex gap-3 items-center'>
                            <TitleWithLessFontWeigth title={`${el.title}   :`} />
                            <TitleFontWeight title={el.data} />
                        </div>
                    })
                }
            </div>
            <div class='flex flex-col w-full justify-center items-center gap-1'>
                <img class='w-[80%]' src="https://user-images.githubusercontent.com/107462720/210083129-f7d59313-06e0-4e39-bffd-107793a6da12.jpg" alt="" />
                <div class='flex flex-row-reverse w-[80%] m-[auto]  gap-4 text-[12px]'>
                    <div class='flex gap-2'>
                        <p class='text-gray-400'>Lat:</p>
                        <p>{address?.geo?.lat}</p>
                    </div>
                    <div class='flex gap-2'>
                        <p class='text-gray-400'>Long:</p>
                        <p>{address?.geo?.lng}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddressSection