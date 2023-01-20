import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Title } from '../components/Title';
import { Button } from '../components/Button';
import { Text } from '../components/Text';
import PointsSvg from '../static/points.svg';
import LogoSvg from '../static/logo.svg';
import TelegramSvg from '../static/telegram.svg';
import { TechCard } from '../components/TechCard';
import { Form } from '../components/Form';
import { NavButtons } from '../components/NavButtons';
import cardOne from '../static/images/1.png'
import cardTwo from '../static/images/2.png'
import { CompaniesSlider } from '../components/CompaniesSlider';
import { FAQ } from './blocks/FAQ';

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
          <div className={styles.logo}><LogoSvg /></div>
          <div className={styles.rightContent}>
            <NavButtons />
            <div className={styles.contacts}>
              <div className={styles.contact}>
                +7 (912) 123-45-67
              </div>
              <div className={styles.contact}>
                info@nmbits.ru
              </div>
              <div className={styles.iconRounded}> 
                <TelegramSvg />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.titleContainer}>
          <Title className={`${styles.titleGradient} ${styles.textCenter}`} variant='title1'>IT Разработка</Title>
          <Title className={styles.textCenter} variant='title2'>Сложных решений</Title>
        </div>
        <Button onClick={() => window.location.href = "#form"}>Оставить заявку</Button>
      </main>
      <div className={styles.padding}>
        <div id="products" className={styles.products}>
            <div className={styles.productsTitles}>
              <Title className={styles.colorDark} variant="subtitle1">Создаем</Title>
              <Title className={styles.colorMedium} variant="subtitle2">цифровые продукты</Title>
            </div>
            <div className={styles.productsCards}>
              <div style={{ backgroundImage: `url(${cardOne.src})` }} className={`${styles.productsCard} ${styles.adaptiveDN}`}>
              </div>
              <div className={styles.productsCard}>
                <Text variant="bodySemiboldL">
                  Web-приложения
                </Text>
                <Text variant="bodyM">
                  Усильте конкурентные преимущества и добавьте клиентам лояльности — создайте собственное приложение для вашего бизнеса.
                </Text>
              </div>
              <div className={styles.productsCard}>
                <Text variant="bodySemiboldL">
                  Чат-боты
                </Text>
                <Text variant="bodyM">
                  Усильте конкурентные преимущества и добавьте клиентам лояльности — создайте собственное приложение для вашего бизнеса.
                </Text>
              </div>
              <div className={styles.productsCard}>
                <Text variant="bodySemiboldL">
                  Мобильные приложения
                </Text>
                <Text variant="bodyM">
                  Усильте конкурентные преимущества и добавьте клиентам лояльности — создайте собственное приложение для вашего бизнеса.
                </Text>
              </div>
              <div className={styles.productsCard}>
                <Text variant="bodySemiboldL">
                  Торговые боты и стратегии
                </Text>
                <Text variant="bodyM">
                  Усильте конкурентные преимущества и добавьте клиентам лояльности — создайте собственное приложение для вашего бизнеса.
                </Text>
              </div>
              <div className={styles.productsCard}>
                <Text variant="bodySemiboldL">
                  Автоматизация процессов
                </Text>
                <Text variant="bodyM">
                  Усильте конкурентные преимущества и добавьте клиентам лояльности — создайте собственное приложение для вашего бизнеса.
                </Text>
              </div>
              <div className={styles.productsCard}>
                <Text variant="bodySemiboldL">
                  Развертывание и обслуживание продуктов
                </Text>
                <Text variant="bodyM">
                  Усильте конкурентные преимущества и добавьте клиентам лояльности — создайте собственное приложение для вашего бизнеса.
                </Text>
              </div>
              <div style={{ backgroundImage: `url(${cardTwo.src})` }} className={styles.productsCardDouble}>
                  <Text className={styles.colorBG} variant="bodySemiboldL">
                    Работаем как продуктовая и it-команда на аутсорсе
                  </Text>
                  <Text className={styles.colorBG} variant="bodyM">
                    Подбор команды для выполнения аутсорс задач.<br/>Знаем как говорить с бизнесом и понимаем с полуслова.
                  </Text>
              </div>
            </div>
          </div>
            <CompaniesSlider />
            <div id="processes" className={styles.processes}>
              <div className={styles.processesTitle}>
                <Title className={styles.mb32} variant="subtitle3">Прозрачные процессы</Title>
                <Text className={styles.processesDescription} variant="bodyM">Работаем по договору, обговорив сроки и стоимость необходимых работ. Декомпозируем на подзадачи и проектируем решения от бизнес-логики до интерфейса. Проводим полный цикл разработки и гарантируем поддержку продутка после его сдачи.</Text>
              </div>
              <div className={styles.pointsTableContainer}>
                <PointsSvg />
              </div>
            </div>
            <div className={styles.technologies}>
              <TechCard />
            </div>
            <FAQ />
            <Title className={styles.formTitle} variant="subtitle3">Поработаем над вашей задачей?</Title>
            <div id="form" className={styles.formContainer}>
              <div>
                <Form />
              </div>
              <div className={styles.formContacts}>
                <div className={styles.contactWithIcon}>
                  <div className={styles.contactIcon}>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.16497 4.20517L9.02681 5.22956C10.2205 6.64527 10.0967 8.77824 8.74251 10.1325L8.00746 10.8666C7.8115 11.063 7.74733 11.3552 7.84302 11.6156C8.11049 12.3467 8.79303 13.2602 9.88865 14.3559C10.9853 15.4526 11.8986 16.1342 12.6287 16.4027C12.8893 16.4981 13.1815 16.4336 13.3776 16.2372L14.1117 15.5031C15.4658 14.1488 17.5977 14.024 19.0152 15.2158L20.0395 16.0787C21.2085 17.0625 21.3273 18.8358 20.303 20.0385C19.7444 20.6848 18.9581 21.0907 18.1078 21.1719C14.8348 21.6128 11.4013 20.0356 7.80538 16.4393C4.20942 12.8431 2.63137 9.40833 3.07219 6.13605C3.0951 5.88001 3.14831 5.6276 3.23069 5.3841C3.42132 4.82474 3.75783 4.32643 4.20546 3.94065C5.40907 2.91726 7.18129 3.03515 8.16497 4.20517Z" fill="#3F8CD6"/>
                    </svg>
                  </div>
                  <Text variant="bodyM">+7 (912) 123-45-67</Text>
                </div>
                <div className={styles.contactWithIcon}>
                  <div className={styles.contactIcon}>
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.60957 0.877422C2.3452 0.899076 2.14085 0.929587 1.97653 0.967688L6.83599 5.23048C7.53636 5.84486 8.01591 6.26453 8.41521 6.56389C8.8036 6.85506 9.05065 6.98091 9.26439 7.04428C9.74452 7.18662 10.2555 7.18662 10.7356 7.04428C10.9494 6.98091 11.1964 6.85506 11.5848 6.56389C11.9841 6.26453 12.4636 5.84486 13.164 5.23048L18.0235 0.967688C17.8591 0.929587 17.6548 0.899076 17.3904 0.877422C16.8388 0.832237 16.1272 0.831386 15.0909 0.831386H4.90909C3.87281 0.831386 3.16121 0.832237 2.60957 0.877422Z" fill="#3F8CD6"/>
                      <path d="M0.364118 2.45973C0.304076 2.64892 0.257514 2.89992 0.227739 3.26528C0.182667 3.81832 0.181819 4.53173 0.181819 5.57063V10.9175C0.181819 11.9564 0.182667 12.6698 0.227739 13.2228C0.271769 13.7631 0.352506 14.0533 0.459257 14.2633C0.703298 14.7435 1.0927 15.1339 1.57166 15.3786C1.78117 15.4856 2.07066 15.5665 2.60957 15.6107C3.16121 15.6559 3.87281 15.6567 4.90909 15.6567H15.0909C16.1272 15.6567 16.8388 15.6559 17.3904 15.6107C17.9293 15.5665 18.2188 15.4856 18.4283 15.3786C18.9073 15.1339 19.2967 14.7435 19.5407 14.2633C19.6475 14.0533 19.7282 13.7631 19.7723 13.2228C19.8173 12.6698 19.8182 11.9564 19.8182 10.9175V5.57063C19.8182 4.53173 19.8173 3.81832 19.7723 3.26528C19.7425 2.89992 19.6959 2.64892 19.6359 2.45973L14.6008 6.87662L14.569 6.90449C13.9082 7.48416 13.3658 7.95993 12.8914 8.3156C12.3985 8.68514 11.9146 8.9757 11.3543 9.14182C10.4704 9.4039 9.52963 9.4039 8.64566 9.14182C8.08536 8.9757 7.60149 8.68514 7.10858 8.3156C6.63418 7.95995 6.09184 7.48419 5.43108 6.90455L5.39925 6.87662L0.364118 2.45973Z" fill="#3F8CD6"/>
                    </svg>
                  </div>
                  <Text variant="bodyM">info@nmbits.ru</Text>
                </div>
                <div className={styles.contactWithIcon}>
                  <div className={styles.contactIcon}>
                    <TelegramSvg />
                  </div>
                  <Text variant="bodyM">@AccNFR</Text>
                </div>
              </div>
        </div>
      </div>
      <div className={styles.footer}>
        <LogoSvg />
        <NavButtons />
        <div>
          <Text className={styles.colorNeutral} variant="bodyM">© {new Date().getFullYear()} All rights reserved</Text>
          <Text className={styles.colorNeutral} variant="bodyM">Terms and Conditions of Use</Text>
        </div>
      </div>
    </>
  )
}
