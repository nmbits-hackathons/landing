import React, { ReactElement } from "react";
import styles from '../styles/Home.module.css';
import { Title } from "./Title";
import TypescriptSvg from '../static/tech_icons/typescript.svg';
import ReactSvg from '../static/tech_icons/react.svg';
import ReduxSvg from '../static/tech_icons/redux.svg';
import VueSvg from '../static/tech_icons/vue.svg';
import CSvg from '../static/tech_icons/c.svg';
import MySQLSvg from '../static/tech_icons/mysql.svg';
import DockerSvg from '../static/tech_icons/docker.svg';
import K8Svg from '../static/tech_icons/kubernetes.svg';
import PandasSvg from '../static/tech_icons/pandas.svg';
import GoSvg from '../static/tech_icons/go.svg';
import PythonSvg from '../static/tech_icons/python.svg';
import JavaSvg from '../static/tech_icons/java.svg';
import PostgreSvg from '../static/tech_icons/postgre.svg';
import RedisSvg from '../static/tech_icons/redis.svg';
import MongoSvg from '../static/tech_icons/mongo.svg';
import AWSSvg from '../static/tech_icons/aws.svg';
import FastAPISvg from '../static/tech_icons/fastapi.svg';
import Numpy from '../static/tech_icons/numpy.svg';

export const TechCard: React.FC = () => {

    function renderLogo(Logo: any) {
        return (
            <div className={styles.techLogo}>
                <Logo />
            </div>
        )
    }

    return (
        <div className={styles.techCard}>
        <Title className={styles.techTitle} variant="subtitle3">
          <span className={styles.techTitleMedium}>
            <span className={styles.techTitleWhite}>Технологии</span>, с которыми мы на короткой ноге
          </span>
        </Title>
        <div className={`${styles.techRow} ${styles.techRowFirst}`}>
            {[TypescriptSvg, ReactSvg, ReduxSvg, VueSvg, CSvg, MySQLSvg, DockerSvg, K8Svg, PandasSvg].map(renderLogo)}
        </div>
        <div className={styles.techRow}>
            {[GoSvg, PythonSvg, JavaSvg, PostgreSvg, RedisSvg, MongoSvg, AWSSvg, FastAPISvg, Numpy].map(renderLogo)}
        </div>
      </div>
    )
}