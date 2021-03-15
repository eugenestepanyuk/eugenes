import Head from 'next/head'
import Loader from '../containers/loader'
import Menu from '../containers/menu'
import styles from '../styles/App.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eugene Stepanyuk | Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap" />
      </Head>

        <main>
          <Loader />
          <Menu />
        </main>
    </div>
  )
}
