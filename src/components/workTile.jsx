import { MyDialog } from "./mydialog";
import { useState } from 'react'

export const WorkTile = (props) => {
  
    const [isOpen, setIsOpen] = useState(false);
    //() => props.setIsOpen(false)

    return (
        <>
        <div className="flex mx-auto my-auto rounded-full bg-[#ffe4e6] w-[70vw] transition duration-500 hover:scale-110 items-center" onClick={() => {
            setIsOpen(true);
        }}>
            <div className="flex items-stretch h-[100px]">
                <img src={props.img} alt="bruh" className="w-[7.5vh] mx-[0.5rem] my-auto"/>
                <p className="text-slate-700 font-semibold font-mono text-[1rem] mx-[1.25rem] my-auto w-fit ">{props.content}</p>
            </div>
        </div>

        <MyDialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            experience = {props.experience}
        />
        </>
    );
};