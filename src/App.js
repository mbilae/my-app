import React from 'react';
import Header from '../src/Header/Header';
import Body from '../src/Body/Body';
import Footer from '../src/Footer/Footer';

import { BrowserRouter, Route, Link } from "react-router-dom";
import About from './About/About';
import Contact from './Contact/Contact';
import Login from './Login/Login';
import Product from './Product/Product';
import Team from './Team/Team';


function App() {
  return (
    <BrowserRouter>

      <div> 
       <Header />
        < Route exact path ="/" component={Body} />
        <Route path ="/about" component={About} />
        <Route path ="/contact" component={Contact} />
        <Route path ="/login" component={Login} />
        <Route path ="/product" component={Product} />
        <Route path ="/team" component={Team} />

        <Footer />
      </div>
    </BrowserRouter>
        
        //     <Body />

        //     <Footer /> 
        
      // </div>
    
  );
};

export default App;
