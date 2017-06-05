import * as React from 'react';
import * as style from './style.css';

export class Footer extends React.Component<any, any> {
  render() {
    return (
      <div className={style.Footer}>
      	<p className={style.Copyright}>Copyright © XYZ Inc. All Rights Reserved.</p>
      </div>
    );
  }
}
