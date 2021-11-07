import React from 'react';
import './global.css';
import './css.css';
import * as cssModule from './css.module.css';
import './stylus.styl';
import * as stylusModule from './stylus.module.styl';
import './sass.sass';
import * as sassModule from './sass.module.sass';
import './scss.scss';
import * as scssModule from './scss.module.scss';
import './less.less';
import * as lessModule from './less.module.less';
import './whitelisted.css';
import './other.css';
import './ignored.css';
import './ignored/ignoredFolder.css';
import '../pages2/style.css';
import '../pages2/style_ignore.css';
import '../pages3/style.css';

export default () => (
  <div className="global-ok">
    <div className={'cssOk'} />
    <div className={cssModule.cssModuleOk} />
    <div className={'stylusOk'} />
    <div className={stylusModule.stylusModuleOk} />
    <div className={'sassOk'} />
    <div className={sassModule.sassModuleOk} />
    <div className={'scssOk'} />
    <div className={scssModule.scssModuleOk} />
    <div className={'lessOk'} />
    <div className={lessModule.lessModuleOk} />
    {/* btn-large */}
    <div className={'btnLarge'} />
    <div className={'btn_small'} />
    <div className={'btn-medium'} />
  </div>
);
