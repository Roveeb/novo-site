import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Youtube',
    Svg: require('../../static/img/youtube.svg').default,
    description: (
      <>
        Canal focado em ensinar sobre Software Livre e utilização de softwares.
      </>
    ),
  },
  {
    title: 'Documentações',
    Svg: require('../../static/img/note.svg').default,
    description: (
      <>
        Tutoriais em formato de texto para você seguir.
      </>
    ),
  },
  {
    title: 'Comunidade',
    Svg: require('../../static/img/people.svg').default,
    description: (
      <>
        Networking, ajudas e novos aprendizados em comunidade.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
