
import { showItem } from '../redux/utils';
import { useAppDispatch } from '../redux/store';
import React, { FC, memo } from 'react';
import Iconify from '../elements/icon';

interface Props {
    title: string;
    children: React.ReactNode;
    desc?: string;
    size?: "sm" | "md"
    pad?:string
}


const CustomModal: FC<Props> = ({ title, children, desc, size = "md", pad='8' }) => {

    const dispatch = useAppDispatch();


    return (
        <>
            <div className="absolute top-0 left-0">
                <div className="inset-0 fixed bg-[#B1B1B41A] w-screen overflow-y-auto z-50 h-[100vh] bg-opacity-80  px-3">
                    <div data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        className={`mx-auto w-full h-screen  pt-20 top-1/4 ${size === "sm" ? "md:w-1/4" : "md:w-2/3 lg:w-1/2"} `}>
                        <div className=" bg-white border-2 border-primary border-solid top-1/3 pt-4  shadow-lg h-max">
                            <div className={`flex justify-between items-center px-${pad}`}>
                                <div className='space-y-2'>
                                    <h3 className="text-sm lg:text-base font-bold "> {title}</h3>
                                    {desc && <p className='subtitles font-medium text-slate-600'>{desc}</p>}
                                </div>
                                <button onClick={() => dispatch(showItem(null))} type="button" className="text-black bg-transparent rounded-lg text-xl p-1.5 ml-auto inline-flex items-center hover:scale-105">
                          
                                    <Iconify icon='fontisto:close'/>
                                </button>
                            </div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(CustomModal);
