import * as React from 'react';
import Slider  from 'react-slick'; 
import Img from 'react-image'; 
import * as style from './style.css'; 
import { TopHeader } from '../TopHeader'; 

export class MerchandisePage extends React.Component<any, any> {
  render() {
  	const sliderSettings = { 
  		focusOnSelect: true,
      dots: true,	
      arrows: true,
      className: style.Slider,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
  	}

    //Dynamic Context for Webpack loader. 
    const pathToCats = require.context('../../assets/img', true);

  	const images = 	[
          						[1,'../../assets/img/x1.png' ], [2,'../../assets/img/x2.png'], 
          						[3,'../../assets/img/x3.png' ], [4,'../../assets/img/x4.png']
  					        ];
    return (
      <div>
        <TopHeader title="商品一覧"/>
        <div className={style.Container}> 
        	<h3>X Kit Serise</h3>
            <Slider {...sliderSettings}> 
		          {images.map(([uniqueId, imgRef]) => <div key={uniqueId}><Img key={uniqueId} className={style.SliderImages} src={imgRef} /></div>)}
	      	  </Slider>
	      </div>
      </div>
    );
  }
}
