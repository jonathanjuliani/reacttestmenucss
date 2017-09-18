import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,  Route,  Link,  Switch } from 'react-router-dom'
import HomeApp from '../content/HomeApp';
import ServicosApp from '../content/ServicosApp';
import ProjetosApp from '../content/ProjetosApp';
import ContatoApp from '../content/ContatoApp';
import NoContentApp from '../content/NoContentApp';

function openSideNav () {
    document.getElementById("id_sideNavbar").style.width = "100%";
}

function closeSideNav () {
    document.getElementById("id_sideNavbar").style.width = "0";
}

function home() {
  ReactDOM.render( <HomeApp />, document.getElementById('id_content'))
  closeSideNav()
}

function servicos() {
  ReactDOM.render( <ServicosApp />, document.getElementById('id_content'))
  closeSideNav()
}

function projetos() {
  ReactDOM.render( <ProjetosApp />, document.getElementById('id_content'))
  closeSideNav()
}

function contato() {
  ReactDOM.render( <ContatoApp />, document.getElementById('id_content'))
  closeSideNav()
}

function noContent(){
  ReactDOM.render( <NoContentApp />, document.getElementById('id_content'))
  closeSideNav()
}

const SideNavbarApp = () => (

  <div className="sideNavbar">

    <i className="fa fa-align-justify fa-2x" aria-hidden="true" onClick={openSideNav}></i> SideNav

    <Router>
      <div className="sidenav" id="id_sideNavbar">
        <Link to="" className="closeBtn" onClick={closeSideNav} > Close Top</Link>
        <Link to="/" onClick={home}><i className="fa fa-align-justify" aria-hidden="true"></i> Home</Link>
        <Link to="/servicos" onClick={servicos}><i className="fa fa-align-right" aria-hidden="true"></i> Servicos</Link>
        <Link to="/projetos" onClick={projetos}>Projetos</Link>
        <Link to="/contato" onClick={contato}>Contato</Link>
        <Link to="http://www.google.com" target="_blank">Google</Link>

        <Switch>
          <Route component={NoContentApp}/>
        </Switch>
      </div>
    </Router>
  </div>
)
export default SideNavbarApp
