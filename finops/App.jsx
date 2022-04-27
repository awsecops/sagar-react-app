import React, { useEffect } from 'react';
import {withRouter} from 'react-router'
import { BrowserRouter,HashRouter, Route, Switch } from 'react-router-dom';
import authRoutes from 'auth-app/AuthRoute';
import finOpsRoutes from './Routes';

import Headernav from './src/components/Headernav';
import {connect} from 'react-redux'


function App(){
  const routes = [...authRoutes, ...finOpsRoutes];
  const userName=localStorage.getItem("username");
  useEffect(()=>{
    console.info(userName);
  })
  return (
      
    <HashRouter>
            {/* <AppComponent/> */}
             {userName?<Headernav/>:null}
             <React.Suspense fallback={<div>Loading...</div>}> 
               <Switch>
                 {routes.map((route,index) => (
                   <Route
                     key={index}
                     path={route.path}
                     component={route.component}
                     exact={route.exact}
                   />
                 ))}
               </Switch>
             </React.Suspense>
 
 
       
       </HashRouter>
       
     );
}

export default connect() (App);
