
const SkillBall = (data) => {

    return (
        <div className='flex flex-col items-center justify-center transition duration-500 hover:scale-110 w-15 h-15 '>
            <img src={data.icon} alt='' className='max-w-[10vh] max-h-[10vh] m-5'/>
        </div>
    );
};

export {SkillBall};