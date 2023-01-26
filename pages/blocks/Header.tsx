import styles from '../../styles/Home.module.css';
import { Button } from '../../components/Button';
import { Title } from '../../components/Title';
import { handleClickScroll } from '../../utils';
import { NavButtons } from '../../components/NavButtons';
import LogoSvg from '../../static/logo.svg';
import TelegramSvg from '../../static/telegram.svg';
import Typewriter from 'typewriter-effect';
import CommandSvg from '../../static/images/command.svg';
import TruckSvg from '../../static/images/truck.svg';
import CommandArrowSvg from '../../static/images/arrow-command.svg';
import TruckArrowSvg from '../../static/images/arrow-truck.svg';

export function Header() {
    return (
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
            <Title className={`${styles.titleGradient} ${styles.textCenter}`} variant='title1'>
                <Typewriter
                options={{
                    strings: 'IT разработка',
                    autoStart: true,
                    cursor: '|'
                }}
                />
            </Title>
            <Title className={styles.textCenter} variant='title2'>
                <Typewriter
                    options={{ cursor: '' }}
                    onInit={(typewriter) => {
                    typewriter
                        .pauseFor(2200)
                        .typeString('Сложных решений')
                        .start();
                    }}
                />
                </Title>
            </div>
            <Button onClick={handleClickScroll('form')}>Оставить заявку</Button>
            <div className={styles.commandContainer}>
                <div className={styles.commandArrow}>
                    <CommandArrowSvg />
                </div>
                <CommandSvg />
            </div>
            <div className={styles.truckContainer}>
                <div className={styles.truckArrow}>
                    <TruckArrowSvg />
                </div>
                <TruckSvg />
            </div>
        </main>
    )
}