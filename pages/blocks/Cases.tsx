import { Text } from '../../components/Text';
import styles from '../../styles/Home.module.css';
import MiapSvg from '../../static/images/miap.svg';
import DocsysSvg from '../../static/images/docsys.svg';
import PostomatSvg from '../../static/images/postomat.svg';
import HuobibotsSvg from '../../static/images/huobibots.svg';
import SmartCity from '../../static/images/smartcity.svg';
import { Button, ButtonTheme } from '../../components/Button';
import { Title } from '../../components/Title';
import { handleClickScroll } from '../../utils';

export function Cases() {
    return (
        <div id="cases" className={styles.cases}>
            <div className={styles.casesContent}>
                <div className={styles.casesContainer}>
                    <span className={styles.faqTitle}>
                        <Text className={styles.colorWhite} variant="bodySemiboldS">
                            Кейсы
                        </Text>
                    </span>
                </div>
                <div className={styles.casesCard}>
                    <Text className={styles.colorMedium} variant="bodySemiboldXL">
                        <span className={styles.colorDark}>МИАП:</span> сервис мониторинга инновационной активности
                    </Text>
                    <MiapSvg />
                </div>
                <div className={styles.casesCard}>
                    <Text className={styles.colorMedium} variant="bodySemiboldXL">
                        <span className={styles.colorDark}>Docsys:</span> платформа для логистической компании
                    </Text>
                    <DocsysSvg />
                </div>
                <div className={styles.casesCard}>
                    <Text className={styles.colorMedium} variant="bodySemiboldXL">
                        <span className={styles.colorDark}>Постомат:</span> сервис для определения оптимальных мест размещения постаматов
                    </Text>
                    <PostomatSvg />
                </div>
                <div className={styles.huobiBots}>
                    <Text className={styles.color06} variant="bodySemiboldXL">
                        <span className={styles.colorBG}>Huobi Bots:</span> экосистема торговых ботов для криптобиржи
                    </Text>
                    <HuobibotsSvg />
                </div>
                <div className={styles.casesCard}>
                    <Text className={styles.colorMedium} variant="bodySemiboldXL">
                        <span className={styles.colorDark}>Умный город:</span> приложение для спортивных соревнований
                    </Text>
                    <SmartCity />
                </div>
                <div className={styles.leadForm}>
                    <div className={styles.leadFormTextGroup}>
                        <Title className={styles.colorBG} variant="subtitle3">
                            Расскажите о своём проекте
                        </Title>
                        <Text className={styles.color06} variant="bodyL">
                            Дадим консультацию и расскажем как дальше двигаться в решении вашей задачи
                        </Text>
                    </div>
                    <div>
                        <Button theme={ButtonTheme.WHITE} onClick={handleClickScroll('form')}>
                            Оставить заявку
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}