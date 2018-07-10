import React from 'react';
import './global.css';
import css from './css.css';
import cssModule from './css.module.css';
import stylus from './stylus.styl';
import stylusModule from './stylus.module.styl';

export default () => (
  <div className="global-ok">
    <div className={css.cssOk} />
    <div className={cssModule.cssModuleOk} />
    <div className={stylus.stylusOk} />
    <div className={stylusModule.stylusModuleOk} />
  </div>
);
