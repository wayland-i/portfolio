import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import "98.css";

const Window = () => {
  return (
    <>
        <div className="window">
            <div className="title-bar">
            <div className="title-bar-text">Important Links</div>
            <div className="title-bar-controls">
                <button aria-label="Minimize" />
                <button aria-label="Maximize" />
                <button aria-label="Close" />
            </div>
            </div>


            <div className="window-body">
            <div>
                <Link href={'https://www.linkedin.com/in/ian-iversen/'} target="_blank">
                <button className='window-button'>
                    LinkedIn
                    <Image src="/assets/network_internet_pcs_installer-4.png" alt="Projects" width={25} height={25} />
                </button>
                </Link>
            </div>
            <div>
                <Link href={'https://github.com/wayland-i'} target="_blank">
                <button className='window-button'>
                    GitHub
                    <Image src="/assets/expand_hierarchial_array-1.png" alt="Projects" width={25} height={25} />
                </button>
                </Link>
            </div>
            <div>
                <Link href="/public/resume.pdf" as="/resume.pdf" passHref target="_blank">  
                <button className='window-button'>
                    Resume
                    <Image src="/assets/document-0.png" alt="Projects" width={25} height={25} />
                </button>
                </Link>
                </div>
            <div>
                <Link href={'https://dev.to/waylandi'} target="_blank">
                <button className='window-button'>
                    Blog
                    <Image src="/assets/desktop_w95-0.png" alt="Projects" width={25} height={25} />
                </button>
                </Link>
                <div>
                </div>
            </div>
            </div>
        </div>

    </>
  )
}

export default Window;