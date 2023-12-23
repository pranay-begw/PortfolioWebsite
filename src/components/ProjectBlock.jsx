// import { MyDialog } from "./mydialog";
// import { useState } from 'react'

// export const ProjectBlock = (props) => {
  
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <>
//         <div
//             className="p-5 flex items-center mx-auto my-auto rounded-full bg-[#ffe4e6] transition duration-500 hover:scale-105 justify-center cursor-pointer"
//             onClick={() => {
//                 setIsOpen(true);
//             }}
//             >
//             <div className="min-w-[25vw] flex max-h-[10vw] aspect-[16/7]">
//                 <div className="flex flex-col justify-center mx-4 p-5">
//                     <h6 className="text-2xl font-bold">{props.heading}</h6>
//                     <p className="text-gray-600 font-semibold font-mono text-sm mt-2">{props.tech}</p>
//                 </div>
//             </div>
//         </div>

//         <MyDialog
//             open={isOpen}
//             onClose={() => setIsOpen(false)}
//             experience = {props.overview}
//         />
//         </>
//     );
// };
import { MyDialog } from "./mydialog";
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

export const ProjectBlock = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px)'); // Adjust the breakpoint as needed

    return (
        <>
            <div
                className={`p-2 flex items-center mx-auto my-auto rounded-full bg-[#ffe4e6] transition duration-500 hover:scale-105 justify-center cursor-pointer ${isMobile ? 'min-w-[40vw]' : 'min-w-[25vw]'} ${isMobile ? 'my-auto' : ''} ${isMobile ? 'min-h-[70vw]' : 'min-h-[10vw]'} overflow-hidden`}
                onClick={() => {
                    setIsOpen(true);
                }}
            >
                <div className={`flex ${isMobile ? 'flex-col' : ''} max-h-[10vw] aspect-[16/7]`}>
                    <div className={`flex ${isMobile ? 'flex-col justify-center mx-auto' : 'flex-col justify-center mx-auto p-4'}`}>
                        <h6 className={`font-bold ${isMobile ? 'text-[3vw]' : 'text-xl'}`}>{props.heading}</h6>
                        <p className={`text-gray-600 font-semibold font-mono mt-1 ${isMobile ? 'text-[3vw]' : 'text-sm'}`}>{props.tech}</p>
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
