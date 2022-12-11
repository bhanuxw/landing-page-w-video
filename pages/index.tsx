import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  const fb_src = "https://i.ibb.co/x7P24fL/facebook.png";
  const twi_src = "https://i.ibb.co/Wnxq2Nq/twitter.png";
  const ins_src = "https://i.ibb.co/ySwtH4B/instagram.png";

  return (
    <>
      <Head>
        <title>Travel | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <section className="showcase">
        
        <video width="100%" height="100%" muted loop={true} controls={true} autoPlay={true} >
          <source src="./production ID_5101165.mp4" type="video/mp4"/>
        </video>

        <div className="overlay"></div>
        <div className="text">
          <h2>Never Stop To </h2> 
          <h3><span className='color-span'>Exploring</span> The World</h3>
          <p>Explore restaurants around your area</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href="#">Explore</a>
        </div>
        <ul className="social">
          <li><Link href="#"><Image width={'22'} height={'30'} loader={() => fb_src} src={fb_src} alt='facebook' /></Link></li>
          <li><Link href="#"><Image width={'22'} height={'30'} loader={() => twi_src} src={twi_src}  alt='twitter' /></Link></li>
          <li><Link href="#"><Image width={'22'} height={'30'} loader={() => ins_src} src={ins_src} alt='instagram' /></Link></li>
        </ul>
      </section>
    </>
  )
}
