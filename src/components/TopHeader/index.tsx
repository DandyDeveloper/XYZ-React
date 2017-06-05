import * as React from 'react';
import * as style from './style.css';

export interface Props { 
	title: string; 
} 

export class TopHeader extends React.Component<Props, object> {
  render() {
    return ( 
    	<div className={style.TopPanel} > 
        	<p className={style.Title} >{ this.props.title }</p> 
        	<div className={style.BoxIndicator} />
        </div>
    );
  }
}
