import * as React from 'react';
import * as style from './style.css';

export class TopPage extends React.Component<any, any> {
  render() {
    return (
      <div className={style.Wrapper}>
      	<div className={style.TopMainHeading}> 
      		<h1>頭は間違うことがあっても、</h1>
          <h1>血は間違わない。</h1>
          <p>中島敦 光と風と夢</p>
  		  </div>
        <div className={style.TopSubHeading}>
          <h2>DNA検査なら、XYZ Inc.</h2>
        </div>
        //CSS Crossbars for Top Page
        <div className={style.Crossbar1} />
        <div className={style.Crossbar2} />
        <div className={style.Crossbar3} />
      </div>
    );
  }
}
