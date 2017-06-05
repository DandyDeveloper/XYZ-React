import * as React from 'react';
import { NavLink } from 'react-router-dom'; 
import Img from 'react-image'; 
import * as style from './style.css';  


export class Logo extends React.Component<any, any> {
  render() {
    return (
        <NavLink to="/"><p className={style.logo}>XYZ Inc.</p></NavLink>
    );
  }
}
