import { MyDialog } from "./mydialog";
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

export const ProjectBlock = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px)'); // Adjust the breakpoint as needed

    return (
        <>
            <div
                className={`p-4 flex items-center mx-auto my-4 rounded-full bg-[#ffe4e6] transition duration-500 hover:scale-105 justify-center cursor-pointer ${isMobile ? 'w-[90vw]' : 'w-[40vw]'} h-auto overflow-hidden`}
                onClick={() => {
                    setIsOpen(true);
                }}
            >
                <div className={`flex flex-col w-full`}>
                    <div className={`flex flex-col justify-center mx-4 p-4`}>
                        <h6 className={`font-bold ${isMobile ? 'text-[5vw]' : 'text-xl'}`}>{props.heading}</h6>
                        <p className={`text-gray-600 font-semibold font-mono mt-2 ${isMobile ? 'text-[3.5vw]' : 'text-base'}`}>{props.tech}</p>
                    </div>
                </div>
            </div>

            <MyDialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                experience={props.experience}
            />
        </>
    );
};