import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Image src="/assets/style-palet.png" alt="Paint Bucket" width={35} height={35} />
      <Image src="/assets/projects.png" alt="Projects" width={35} height={35} />
      <Image src="/assets/pricing.png" alt="Paint Bucket" width={35} height={35} />
      <Image src="/assets/fast-websites.png" alt="Paint Bucket" width={35} height={35} />
      <Image src="/assets/editor.png" alt="Paint Bucket" width={35} height={35} />
      <Image src="/assets/contact-us.png" alt="Paint Bucket" width={35} height={35} />
      <Image src="/assets/cms.png" alt="Paint Bucket" width={35} height={35} />
      <Image src="/assets/blog.png" alt="Paint Bucket" width={35} height={35} />
      <Image src="/assets/about.png" alt="Paint Bucket" width={35} height={35} />
    </div>
  )
}

export default Home
