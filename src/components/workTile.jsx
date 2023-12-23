import { MyDialog } from "./mydialog";
import { useState } from 'react'

export const WorkTile = (props) => {
  
    const [isOpen, setIsOpen] = useState(false);
    //() => props.setIsOpen(false)

    return (
        <>
        <div className="flex mx-auto my-auto rounded-full bg-[#ffe4e6] transition duration-500 hover:scale-105 justify-center items-center" onClick={() => {
            setIsOpen(true);
        }}
        style={{ minWidth: '20vw', maxWidth: '80vw', height: '8vw', boxSizing: 'border-box', padding: '0 1.25rem' }}>
            <div className="py-8 max-h-[8vw] aspect-[16/7]">
                <p className="text-slate-700 font-mono my-auto overflow-hidden"
                style={{
                    fontSize: '1.25vw',
                    textAlign: 'center',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'normal',
                    margin: 'auto',
                    fontWeight: 'bold',
                }}>
                    {props.org}
                </p>
                
                <p className="text-slate-700 my-auto font-mono overflow-hidden"
                style={{
                    fontSize: '1vw',
                    textAlign: 'center',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'normal',
                    margin: 'auto',
                }}>
                    {props.role}
                </p>

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