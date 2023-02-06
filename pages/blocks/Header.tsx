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
import useWindowDimensions from '../../hooks/useWindowDimensions';
import HamburgerSvg from '../../static/hamburger.svg';
import MailSvg from '../../static/mail.svg';
import PhoneSvg from '../../static/phone.svg';

export function Header({ isOpened, setIsOpened }: any) {
    const { width } = useWindowDimensions();
    const isMobile = width <= 1120;

    function renderNavbar() {

        if (isMobile) {
            return (
                <div className={styles.navBar}>
                    <div className={styles.rowBetween}>
                        <div onClick={() => setIsOpened(!isOpened)}>
                            <HamburgerSvg />
                        </div>
                        <div className={styles.rightContent}>
                            <a href='https://google.com' className={styles.iconRounded}> 
                                <PhoneSvg />
                            </a>
                            <a href='https://google.com' className={styles.iconRounded}> 
                                <MailSvg />
                            </a>
                            <a href='https://google.com' className={styles.iconRounded}> 
                                <TelegramSvg />
                            </a>
                        </div>
                    </div>
                <div className={styles.logo}><LogoSvg /></div>
            </div>
            );
        }

        return (
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
        )
    }


    return (
        <main className={styles.headerGradient}>
            {renderNavbar()}
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
                <CommandSvg className={styles.commandSvg} />
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