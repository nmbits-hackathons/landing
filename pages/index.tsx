import Head from 'next/head'
import Image from 'next/image'
import { Roboto } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Title } from '../components/Title'
import { Button } from '../components/Button'

const roboto = Roboto({ weight: ['500'], subsets: ['cyrillic'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>NMBITS</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.headerGradient}>
        <div className={styles.navBar}>
          <div className={styles.logo}>NMBITS</div>
          <div className={styles.rightContent}>
            <div className={styles.navButtons}>
              <div className={styles.navButton}>
                Услуги
              </div>
              <div className={styles.navButton}>
                Кейсы
              </div>
              <div className={styles.navButton}>
                Процесс
              </div>
              <div className={styles.navButton}>
                FAQ
              </div>
            </div>
            <div className={styles.contacts}>
              <div className={styles.contact}>
                +7 (912) 123-45-67
              </div>
              <div className={styles.contact}>
                info@nmbits.ru
              </div>
              <div> 
                TODO: icon
              </div>
            </div>
          </div>
        </div>
        <div className={styles.titleContainer}>
          <Title className={styles.titleGradient} variant='title1'>IT Разработка</Title>
          <Title variant='title2'>Сложных решений</Title>
        </div>
        <Button>Оставить заявку</Button>
      </main>
    </>
  )
}
