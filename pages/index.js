
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed/Feed'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import Widgets from '../components/Widgets/Widgets'
import styles from '../styles/Home.module.css'
import { useStateValue } from "../utils/StoreProvider"
import Login from './login'


export default function Home() {
  const [{ user }, dispatch] = useStateValue()

  return (
    <div>
      <Head>
        <title>Facebook Clone in Next js</title>
        <meta name="description" content="Facebook clone made with next js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className={styles.app__body}>
        {!user ? (
          <Login />
        ) : (
          <>
            {/* header */}
            < Header />
            <div className={styles.app__body}>

              <Sidebar />

              {/* feed */}
              <Feed />
              <Widgets />

            </div>
          </>
        )}
      </div>
      hello miki
    </div>
  )
}
