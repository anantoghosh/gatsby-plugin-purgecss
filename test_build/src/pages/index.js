import React from 'react';
import Component from '../components/component';
import './index.css';
import './stylus.styl'
import styles from './stylus.module.styl'

export default () => (
  <div className="ok1 ok2 ok3">
    <Component />
    <section>section</section>
    <div className="stylusok" />
    <div className={styles.stylusModuleOk} />
  </div>
);
