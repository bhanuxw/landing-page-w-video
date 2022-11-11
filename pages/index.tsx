import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde expedita, repudiandae atque commodi magni nemo ab earum ratione nihil veritatis incidunt ducimus magnam a culpa. Eum, dolore. Maiores, ipsa commodi!</p> 
        <p className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde expedita, repudiandae atque commodi magni nemo ab earum ratione nihil veritatis incidunt ducimus magnam a culpa. Eum, dolore. Maiores, ipsa commodi!</p> 
        <Link className={styles.btn} href={'/ninjas'}>Go to Ninjas</Link>
      </div>
    </>
  )
}
