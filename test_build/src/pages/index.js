import React from 'react';
import './global.css';
import css from './css.css';
import cssModule from './css.module.css';
import stylus from './stylus.styl';
import stylusModule from './stylus.module.styl';
import sass from './sass.sass';
import sassModule from './sass.module.sass';
import scss from './scss.scss';
import scssModule from './scss.module.scss';
import less from './less.less';
import lessModule from './less.module.less';
import './whitelisted.css';
import other from './other.css';
import './ignored.css';
import './ignored/ignoredFolder.css';
import '../pages2/style.css';
import '../pages2/style_ignore.css';
import '../pages3/style.css';

export default () => (
  <div className="global-ok">
    <div className={css.cssOk} />
    <div className={cssModule.cssModuleOk} />
    <div className={stylus.stylusOk} />
    <div className={stylusModule.stylusModuleOk} />
    <div className={sass.sassOk} />
    <div className={sassModule.sassModuleOk} />
    <div className={scss.scssOk} />
    <div className={scssModule.scssModuleOk} />
    <div className={less.lessOk} />
    <div className={lessModule.lessModuleOk} />
    //btn-large
    <div className={other.btnLarge} />
    <div className={other.btn_small} />
    <div className={other['btn-medium']} />
  </div>
);
