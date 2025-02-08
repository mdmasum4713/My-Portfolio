import { Facebook, Github, Instagram, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';



const socialData = [
    {
        title: "Youtube",
        icon: <Youtube width={20} height={20} />,
        link: "https://www.youtube.com/",
    },
    {
        title: "Github",
        icon: <Github width={20} height={20} />,
        link: "https://github.com/mdmasum4713",
    },
    {
        title: "Linkedin",
        icon: <Linkedin width={20} height={20} />,
        link: "https://www.linkedin.com/in/md-masum-khondkher/",
    },
    {
        title: "Facebook",
        icon: <Facebook width={20} height={20} />,
        link: "https://web.facebook.com/md.masum.khondker",
    },
    {
        title: "instagram",
        icon: <Instagram width={20} height={20} />,
        link: "https://www.instagram.com/",
    },
];


const SocialLinks = () => {


    return (
        <TooltipProvider>
            <div className='flex items-center gap-3'>
                {socialData?.map((item) => (
                    <Tooltip key={item?.title}>
                        <TooltipTrigger asChild >
                            <Link href={item?.link} className='text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full hover:bg-lightSky/10 hover:text-lightSky hoverEffect'>
                                {item?.icon}
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent className='text-xs uppercase font-medium rounded-[5px]'>
                            {item?.title}
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider>
    )
}

export default SocialLinks