import * as React from 'react';
import * as style from './style.css';
import Img from 'react-image'; 
import { CompanyInformation, MerchandisePage, TopPage } from '../../components'
import { Route, NavLink } from 'react-router-dom'; 

const routes = [
  { 
    path: '/',
    exact: true,
    main: TopPage
  },
  { 
    path: '/companyinformaiton',
    exact: false,
    main: CompanyInformation
  },
  { 
    path: '/merchandise',
    exact: false,
    main: MerchandisePage
  }
]

export class SideNav extends React.Component<any, any> {
  render() {
    const Logo = require('../../assets/img/dna.png'); 
    const links = [
                    [1, '/', 'トップ', style.SideNavLink ], [2, '/companyinformaiton', '会社概要', style.SideNavLink ], [3, '/merchandise', '商品一覧', style.SideNavLink ], 
                    [4, '/', 'アクセス', style.SideNavLink ], [5, '/', '採用情報', style.Inactive ], [6, '/', 'お問合せ', style.SideNavLink ]
                  ] 
    return (
      <div>
        <div className={style.SideNav}>
            <div>
              <ul>
                {links.map(([uniqueId, href, title, classes]) => <li key={uniqueId} className={classes}><NavLink to={href} key={uniqueId}>{title}</NavLink></li>)}
              </ul>
            </div>
          <Img className={style.DnaPng} src={ Logo } /> 
        </div>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    );
  }
}
