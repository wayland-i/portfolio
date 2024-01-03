import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import "98.css";
import Link from 'next/link';
import Window from '../comps/window';


const Home: NextPage = () => {

  

  return (
    <div className='home-page'>
        <Head>
          <title>{`Ian Iversen's Portfolio`}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>

      <div className='landing-page'>
        <div>
          <Image src="/assets/style-palet.png" alt="Paint Bucket" width={35} height={35} />
          <p>Coming Soon</p>
        </div>
        <div>
          <Image src="/assets/projects.png" alt="Projects" width={35} height={35} />
          <p>
            Coming Soon
          {/* DEMO */}
          </p>
        </div>
        <div>
          {/* <Link href={'/prices'} className='landing-link'> */}
            <Image src="/assets/pricing.png" alt="Pricing" width={35} height={35} />
            <p>
              Coming Soon
            {/* The Prices */}
            </p>
          {/* </Link> */}
        </div>
        <div>
          <Link href={'/contact'} className='landing-link'>
            <Image src="/assets/fast-websites.png" alt="fast-websites" width={35} height={35} />
            <p>
              Contact Me
            </p>
          </Link>
        </div>
        <div>
          <Link href={'https://www.loom.com/share/e33548b98d9f4244be1080cc218f91c5'} target="_blank" className='landing-link' id='wcq'>
            <Image src="/assets/mic-input.png" alt="Mic with Fader" width={35} height={38} />
            <p>
              DEMO
            </p>
          </Link>
        </div>
        <div>
          <Link href={'/snake'} className='landing-link'>
            <Image 
              // src="/assets/snake.png"
              // src="/assets/snake-1.png" 
              // src="/assets/snake-2.png" 
              src="/assets/snake-4.png"  
              alt="AC plug" width={40} height={40} />
            <p>
              {/* Coming Soon */}
              Snake
            </p>
          </Link>
        </div>
        <div>
        {/* <Link href={'https://lambent-blancmange-d17a27.netlify.app/'} target="_blank" className='landing-link' id='wcq'> */}
            <Image src="/assets/worldwide.png" alt="Contact-Us" width={35} height={35} />
            <p>
              Coming Soon
            </p>
            {/* <p>
              My First Web App {' '}
              (sentimental)
            </p> */}
        {/* </Link> */}
        </div>
        <div>
          <Link href={'/about'} className='landing-link'>
            <Image src="/assets/about.png" alt="About" width={35} height={35} />
            <p>
            About Me
            </p>
          </Link>
        </div>
        <div>
          <Image src="/assets/folder.png" alt="folder" width={35} height={35} />
          <p>
            {`<- My Projects`}
          </p>
        </div>
        <div>
          <Image src="/assets/folder.png" alt="folder" width={35} height={35} />
          <p>
            {`<- My Projects`}
          </p>
        </div>

      </div>

        <Window />

    </div>
    

  )
}

export default Home
