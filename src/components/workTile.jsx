import { MyDialog } from "./mydialog";
import { useState } from 'react'

export const WorkTile = (props) => {
  
    const [isOpen, setIsOpen] = useState(false);
    //() => props.setIsOpen(false)

    return (
        <>
        <div className="flex mx-auto justify-items-center my-auto rounded-full bg-[#ffe4e6] w-[50vw] h-[5rem] transition duration-500 hover:scale-110" onClick={() => {
            setIsOpen(true);
        }}>
            <div className="flex flex-grow items-stretch">
                <img src={props.img} alt="bruh" className="w-[7vh] mx-[0.8rem] my-auto"/>
                <p className=" flex-grow text-black font-semibold font-mono text-[1rem] mx-[1.25rem] my-auto w-1/2">{props.content}</p>
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