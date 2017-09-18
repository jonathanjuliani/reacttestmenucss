import React from 'react'
import { BrowserRouter as Router,  Route,  Link,  Switch } from 'react-router-dom'
import HomeApp from '../content/HomeApp';
import ServicosApp from '../content/ServicosApp';
import ProjetosApp from '../content/ProjetosApp';
import ContatoApp from '../content/ContatoApp';
import NoContentApp from '../content/NoContentApp';

function openTopNav () {
    document.getElementById("navBar").style.height = "100%";
}

function openSideNav () {
    document.getElementById("navBar").style.width = "100%";
}

function closeTopNav () {
    document.getElementById("navBar").style.height = "0%";
}

function closeSideNav () {
    document.getElementById("navBar").style.width = "0";
}

const TopNavbarApp = () => (
  <div>

    <div className="navTopButton">
      <i className="fa fa-align-justify fa-2x" aria-hidden="true" onClick={openTopNav}></i> TopNav
    </div>
    <div className="navSideButton">
      <i className="fa fa-align-justify fa-2x" aria-hidden="true" onClick={openSideNav}></i> SideNav
    </div>

    <Router>
      <div className="sidenav" id="navBar">
        <div className="closeTopNav">
          <Link to="javascript:void(0)" className="closeBtn" onClick={closeTopNav} > Close Top</Link>
        </div>
        <div className="closeSideNav">
          <Link to="javascript:void(0)" className="closeBtn" onClick={closeSideNav} > Close Side</Link>
        </div>
        <Link to="/"><i className="fa fa-align-justify" aria-hidden="true"></i> Home</Link>
        <Link to="/servicos"><i className="fa fa-align-right" aria-hidden="true"></i> Servicos</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/contato">Contato</Link>
        <Link to="http://www.google.com" target="_blank">Google</Link>

        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/servicos" exact component={Servicos}/>
          <Route path="/projetos" exact component={Projetos}/>
          <Route path="/contato" exact component={Contato}/>
          <Route component={NoContent}/>
        </Switch>
      </div>
    </Router>
  </div>
)

const Home      = () => ( <HomeApp /> )
const Servicos  = () => ( <ServicosApp /> )
const Projetos  = () => ( <ProjetosApp /> )
const Contato   = () => ( <ContatoApp /> )
const NoContent = () => ( <NoContentApp /> )

export default TopNavbarApp
