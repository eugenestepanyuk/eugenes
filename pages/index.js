import Head from 'next/head'
import Loader from '../containers/loader'
import Main from '../containers/main'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eugene Stepanyuk | Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Loader />
        <Main />
      </main>
    </div>
  )
}
