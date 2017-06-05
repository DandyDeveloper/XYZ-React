import * as React from 'react';
import * as style from './style.css';
import Img from 'react-image'; 
import { CompanyInformation, MerchandisePage, TopPage } from '../../components'
import { Route, Link } from 'react-router-dom';

//Originally for mapping Routes -> Webpack bug found. Reverted to static Routes
const routes = [
  { 
    path: '/',
    exact: true,
    component: TopPage
  },
  { 
    path: '/companyinformation',
    exact: false,
    component: CompanyInformation
  },
  { 
    path: '/merchandise',
    exact: false,
    component: MerchandisePage
  }
]

export class SideNav extends React.Component<any, any> {
  render() {

    const Logo = require('../../assets/img/dna.png'); 
    const links = [
                    [1, '/', 'トップ', style.SideNavLink ], [2, '/companyinformation', '会社概要', style.SideNavLink ], [3, '/merchandise', '商品一覧', style.SideNavLink ], 
                    [4, '/', 'アクセス', style.SideNavLink ], [5, '/', '採用情報', style.Inactive ], [6, '/', 'お問合せ', style.SideNavLink ]
                  ] 
    return (
      <div>
        <div className={style.SideNav}>
            <div>
              <ul>
                {links.map(([uniqueId, href, title, classes]) => <li key={uniqueId} className={classes}><Link to={href} key={uniqueId}>{title}</Link></li>)}
              </ul>
            </div>
          <Img className={style.DnaPng} src={ Logo } /> 
        </div>
        <Route path="/" exact component={ TopPage } />
        <Route path="/companyinformation" component={ CompanyInformation } />
        <Route path="/merchandise" component={ MerchandisePage } />
      </div>
    );
  }
}
