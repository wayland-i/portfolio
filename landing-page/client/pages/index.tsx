import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='landing-page'>
      <div>
        <Image src="/assets/style-palet.png" alt="Paint Bucket" width={35} height={35} />
      </div>
      <div>
        <Image src="/assets/projects.png" alt="Projects" width={35} height={35} />
      </div>
      <div>
        <Image src="/assets/pricing.png" alt="Pricing" width={35} height={35} />
      </div>
      <div>
        <Image src="/assets/fast-websites.png" alt="fast-websites" width={35} height={35} />
      </div>
      <div>
        <Image src="/assets/editor.png" alt="Editor" width={35} height={35} />
      </div>
      <div>
        <Image src="/assets/contact-us.png" alt="Contact-Us" width={35} height={35} />
      </div>
      <div>
        <Image src="/assets/cms.png" alt="CMS" width={35} height={35} />
      </div>
      <div>
        <Image src="/assets/blog.png" alt="Blog" width={35} height={35} />
      </div>
      <div>
        <Image src="/assets/about.png" alt="About" width={35} height={35} />
      </div>
    </div>
  )
}

export default Home
