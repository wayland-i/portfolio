import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import "98.css";
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className='home-page'>
    <div className='landing-page'>
      <div>
        <Image src="/assets/style-palet.png" alt="Paint Bucket" width={35} height={35} />
        <p>Coming Soon</p>
      </div>
      <div>
        <Image src="/assets/projects.png" alt="Projects" width={35} height={35} />
        <p>
        DEMO
        </p>
      </div>
      <div>
        <Image src="/assets/pricing.png" alt="Pricing" width={35} height={35} />
        <p>
        My Performance
        </p>
      </div>
      <div>
        <Image src="/assets/fast-websites.png" alt="fast-websites" width={35} height={35} />
        <p>
          Contact Me
        </p>
      </div>
      <div>
        <Image src="/assets/editor.png" alt="Editor" width={35} height={35} />
        <p>
          Coming Soon
        </p>
      </div>
      <div>
        <Image src="/assets/contact-us.png" alt="Contact-Us" width={35} height={35} />
        <p>
          Coming Soon
        </p>
      </div>
      <div>
        <Image src="/assets/cms.png" alt="CMS" width={35} height={35} />
        <p>
          Coming Soon
        </p>
      </div>
      {/* <div>
        <Image src="/assets/blog.png" alt="Blog" width={35} height={35} />
        <p>
          My Blog
        </p>
      </div> */}
      <div>
        <Link href={'/about'}>
          <Image src="/assets/about.png" alt="About" width={35} height={35} />
          <p>
          About Me
          </p>
        </Link>
      </div>
      <div>
        <Image src="/assets/folder.png" alt="folder" width={35} height={35} />
        <p>
          Folder
        </p>
      </div>

    </div>

      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">Social Links</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>

        <div className="window-body">
          <div>
            <button className='window-button'>
              LinkedIn
              <Image src="/assets/network_internet_pcs_installer-4.png" alt="Projects" width={25} height={25} />
            </button>
          </div>
          <div>
            <button className='window-button'>
              GitHub
              <Image src="/assets/expand_hierarchial_array-1.png" alt="Projects" width={25} height={25} />
            </button>
          </div>
          <div>
            <button className='window-button'>
              Resume
              <Image src="/assets/document-0.png" alt="Projects" width={25} height={25} />
            </button>
          </div>
          <div>
            <button className='window-button'>
              Blog
              <Image src="/assets/desktop_w95-0.png" alt="Projects" width={25} height={25} />
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
