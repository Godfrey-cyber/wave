import React from 'react'
import Image from 'next/image'

const Adverts = () => {
    return (
        <div className="flex mx-auto md:rounded-md lg:px-20 my-4 w-full">
            <div className="flex bg-white p-2 rounded space-x-2">
                <div className="rounded-md">
                    <Image className="rounded hover:scale-105 translation-all duration-100"  height={350} width={700} src="https://ke.jumia.is/cms/2022/W02/HP/Sliders/KE_Electronics_SuperSaver_Afcon_0122_S.jpg" alt="myimage" />
                </div>
                <div className="rounded-md">
                    <Image className="rounded hover:scale-105 translation-all duration-100"  height={350} width={700} src="https://ke.jumia.is/cms/2022/W02/HP/Sliders/KE_Electronics_SuperSaver_Afcon_0122_S.jpg" alt="myimage" />
                </div>
            </div>
        </div>
    )
}

export default Adverts
