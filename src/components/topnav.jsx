import React from 'react';
import PranayBegwaniResume from '../static/PranayBegwaniResume.pdf';
import './topnav.css';
import Barca from '../static/barcelona.png';
import Gt from '../static/gt.png'
import {WorkTile} from './workTile.jsx';
import linkedInLogo from '../static/linkedInLogo.png';
import mediumLogo from '../static/mediumLogo.png';
import messagegearslogo from '../static/messagegearslogo.png';
import tidlab from '../static/tidlab.png';
import gtflogo from '../static/gtflogo.png';
import dsgt from '../static/h.png';
import schoolkartlogo from '../static/schoolkartlogo.png';
import messi from '../static/messi.png';
import dsgtorig from '../static/dsgt.png';
import gtsfic from '../static/gtsf.png';
import strings from '../res/strings';
import email from '../static/emailLogo.png';
import {ProjectBlock} from './ProjectBlock.jsx';
import {CustomizedTimeline} from './CustomizedTimeline.jsx';
import { SkillBall } from './skillLogo.jsx';
import android from '../res/android.png';
import azure from '../res/azure.png';
import css from '../res/css.png';
import django from '../res/django.png';
import git from '../res/git.png';
import html from '../res/html.png';
import java from '../res/java.png';
import numpy from '../res/numpy.png';
import pandas from '../res/Pandas_logo.svg.png';
import python from '../res/python.png';
import react from '../res/react.png';
import sql from '../res/sql.png';
import scikit from '../res/scikit.png'; 
import tailwind from '../res/tailwind.png';
import ts from '../res/ts.png';
import amazonlogo from '../static/amazonlogo.webp';


export const TopNavigation = () => {

    const timelineData = [
        {
            date: 'May 2024 - July 2024',
            icon: <img src={amazonlogo} alt=''/>,
            content: <WorkTile img={amazonlogo} org={strings.amazon.company} role={strings.amazon.role} experience={strings.amazon.work} />,            
        },
        {
          date: 'May 2023 - Aug 2023',
          icon: <img src={messagegearslogo} alt=''/>,
          content: <WorkTile img={messagegearslogo} org={strings.messagegears.company} role={strings.messagegears.role} experience={strings.messagegears.work} />,
        },
        {
          date: 'Jan 2023 - Present',
          icon: <img src={gtflogo} alt=''/>,
          content: <WorkTile img={gtflogo} org={strings.gtf.company} role={strings.gtf.role} experience={strings.gtf.work}/>
        },
        {
          date: 'Aug 2022 - Present',
          icon: <img src={tidlab} alt='' className='w-[10vh] mx-[0.5rem] my-auto'/>,
          content: <WorkTile img={tidlab} org={strings.tidlab.company} role={strings.tidlab.role} experience={strings.tidlab.work} />
        },
        {
          date: 'May 2022 - Oct 2022',
          icon: <img src={schoolkartlogo} alt=''/>,
          content: <WorkTile img={schoolkartlogo} org={strings.schoolkart.company} role={strings.schoolkart.role} experience={strings.schoolkart.work} />
        },
        {
          date: 'Aug 2021 - Jan 2023',
          icon: <img src={gtsfic} alt=''/>,
          content: <WorkTile img={gtsfic} org={strings.gtsf.company} role={strings.gtsf.role} experience={strings.gtsf.work}/>
        },
        {
          date: 'Aug 2021 - Jan 2023',
          icon: <img src={dsgt} alt=''/>,
          content: <WorkTile img={dsgt} org={strings.dsgt.company} role={strings.dsgt.role} experience={strings.dsgt.work} />
        },
      ];  


    return (
        <div className='overflow-hidden bg-squiggleBg bg-opacity-90' style={{backgroundSize: '175%', backgroundPosition: 'center'}}>
        
            <div className='flex-col align-middle h-[45vh] pt-[20vh]'>
                <div className='text-[10vh] font-limelight text-center w-vw pt-3 text-slate-800 font-bold'>
                    <a href='/home'><h1>PRANAY BEGWANI</h1></a>
                </div>
                <div className='flex flex-auto justify-center'>
                    <a href='https://www.linkedin.com/in/pranay-begwani/'><img src={linkedInLogo} alt='' className='w-[4vh] m-3'/></a>
                    <a href='https://medium.com/@pranaybeg'><img src={mediumLogo} alt='' className='w-[4vh] m-3' /></a>
                    <a href='mailto:pbegwani3@gatech.edu'><img src={email} alt='' className='w-[4vh] m-3'/></a>
                </div>
                <div className='flex flex-auto justify-center'>
                <a href= {PranayBegwaniResume} class="inline-block text-lg group">
                    <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-slate-800 rounded-lg group-hover:text-white">
                        <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-orange-400"/>
                        <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"/>
                        <span class="relative">📄Resume</span>
                    </span>
                </a>
                </div>
            </div>

            <div className='relative flex flex-col pt-[30vh]'>
                <div className="z-10 mx-auto max-w-[70vw] h-auto rounded-lg shadow-lg">
                    <div className="px-1 py-1 z-10">
                        <h4 className="text-[3rem] z-10 font-limelight font-bold text-slate-800">About Me</h4>
                        <p className="text-[2rem] text-slate-900 font-semibold font-mono"> I am Pranay, a tech-savvy, curious, and versatile individual at the 🐝<span className="text-yellow">Georgia</span> Institute of <span className='text-yellow'>Tech</span>nology🐝. 
                        I am excited about machine learning 🤖 and quantitative research 🤓. The potential for generating impact and the hunger to learn drive me. In my free time, you can find me 💸analyzing investments📈, and watching ⚽football⚽ or 🏎️Formula 1🏎️</p>
                    </div>
                </div>
                <img src={Barca} alt="" className='absolute w-[13vh] -rotate-12 z-0'/>
                <img src={Gt} alt="" className=' absolute w-[13vh] rotate-12 bottom-0 z-0'/>
                <img src={messi} alt="" className='absolute w-[25vh] -rotate-12 bottom-0 -right-10 z-0'/>
                <img src={dsgtorig} alt="" className='absolute w-[20vh] -rotate-12 -right-10 z-0'/>
            </div>

            <div className='pt-[30vh] flex flex-col space-y-6 my-auto'>
                <CustomizedTimeline data={timelineData}/>
            </div>

            <div className="z-10 mx-auto max-w-[80vw] h-auto space-y-5 rounded-lg shadow-lg pt-[20vh]">
                <div className="grid grid-cols-4 gap-10 my-auto mx-auto place-items-stretch justify-center">
                    <SkillBall icon={android}/>
                    <SkillBall icon={azure}/>
                    <SkillBall icon={css}/>
                    <SkillBall icon={django}/>
                    <SkillBall icon={git}/>
                    <SkillBall icon={html}/>
                    <SkillBall icon={java}/>
                    <SkillBall icon={numpy}/>
                    <SkillBall icon={pandas}/>
                    <SkillBall icon={python}/>
                    <SkillBall icon={react}/>
                    <SkillBall icon={sql}/>
                </div>
                <div className="grid grid-cols-3 gap-10 mx-auto pt-10 place-items-stretch justify-center">
                    <SkillBall icon={scikit}/>
                    <SkillBall icon={tailwind}/>
                    <SkillBall icon={ts}/>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-[5vh] mx-auto md:max-w-[90vw]'>
                <ProjectBlock heading={strings.project_aiatl.heading} tech={strings.project_aiatl.tech} experience={strings.project_aiatl.overview} />
                <ProjectBlock heading={strings.project_docushare.heading} tech={strings.project_docushare.tech} experience={strings.project_docushare.overview} />
                <ProjectBlock heading={strings.project_frogger.heading} tech={strings.project_frogger.tech} experience={strings.project_frogger.overview} />
                <ProjectBlock heading={strings.project_labMgmtSys.heading} tech={strings.project_labMgmtSys.tech} experience={strings.project_labMgmtSys.overview} />
                <ProjectBlock heading={strings.project_moviePred.heading} tech={strings.project_moviePred.tech} experience={strings.project_moviePred.overview} />
                <ProjectBlock heading={strings.project_thisWebsite.heading} tech={strings.project_thisWebsite.tech} experience={strings.project_thisWebsite.overview} />
            </div>



            
            <div className='font-limelight text-slate-800 pt-[10vh] py-auto flex-col flex text-center'>
                <h3 className='text-[2.6rem]'>Contact</h3>
                <h4 className='text-[1.25rem]'>pbegwani3@gatech.edu</h4>
            </div>


        </div>
    );
};