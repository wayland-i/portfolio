import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      <Image src="/assets/paintbucket.png" alt="Paint Bucket" width={50} height={50} />
    </div>
  )
}

export default Home
