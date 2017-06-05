import * as React from 'react';
import * as style from './style.css'; 
import { TopHeader } from '../TopHeader'; 

const CompInfoContent =  () => ( 
        <div className={style.Content}>
          <p>新しい時代の覇権を選ばれた国民が得るは、歴史の必然である。</p>
          <p>ならば、我らは襟を正し、この戦局を打開しなければならぬ。</p>
          <p>我々は過酷な宇宙空間を生活の場としながらも共に苦悩し、</p>
          <p>錬磨して今日の文化を築き上げてきた。</p>
          <p>かつて、ジオン・ダイクンは人類の革新は宇宙の民たる我々から始まると言った。</p>
          <p>しかしながら地球連邦のモグラ共は、</p>
          <p>自分たちが人類の支配権を有すると増長し我々に抗戦する。</p>
          <p>諸君の父も、子もその連邦の無思慮な抵抗の前に死んでいったのだ！</p>
          <p>この悲しみも怒りも忘れてはならない！</p>
          <p>それを、ガルマは！死をもって我々に示してくれた！</p>
          <p>我々は今、この怒りを結集し、連邦軍に叩きつけて、初めて真の勝利を得ることができる。</p>
          <p>この勝利こそ、戦死者全てへの最大の慰めとなる。</p>
          <p>国民よ立て！悲しみを怒りに変えて、立てよ！</p>
          <p>国民よ！我らジオン国国民こそ選ばれた民であることを忘れないでほしいのだ。</p>
          <p>優良種である我らこそ人類を救い得るのである。ジーク・ジオン！</p>
        </div>
)

export class CompanyInformation extends React.Component<any, any> {
  render() {
    return (
      <div>
        <TopHeader title="会社概要"/>
        <CompInfoContent />
      </div>
    );
  }
}
