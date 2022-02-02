import React from 'react'
import Image from "next/image"

const Banner = () => {
    return (
        <div className="mx-auto mt-5 flex-grow lg:col-span-8 col-span-12">
            {/* <div className=""> */}
                <Image className="rounded-md h-full w-full" height={400}  width={800} loading="lazy" objectfit="contain" src="https://ke.jumia.is/cms/2022/W02/HP/Sliders/KE_Electronics_SuperSaver_Afcon_0122_S.jpg" alt="helloimage"/>
            {/* </div> */}
        </div>
    )
}

export default Banner
