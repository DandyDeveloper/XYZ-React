import * as React from 'react';
import * as style from './style.css';
import { Logo, SideNav, Footer } from '../../components';

export class App extends React.Component<any, any> {
  render() {
    return (
      <div className={style.normal}>
        <Logo />
        <SideNav />
        <Footer />
      </div>
    );
  }
}

