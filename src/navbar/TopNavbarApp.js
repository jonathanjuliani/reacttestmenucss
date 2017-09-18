import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,  Route,  Link,  Switch } from 'react-router-dom'
import HomeApp from '../content/HomeApp';
import ServicosApp from '../content/ServicosApp';
import ProjetosApp from '../content/ProjetosApp';
import ContatoApp from '../content/ContatoApp';
import NoContentApp from '../content/NoContentApp';

const Home      = () => ( <HomeApp /> )
const Servicos  = () => ( <ServicosApp /> )
const Projetos  = () => ( <ProjetosApp /> )
const Contato   = () => ( <ContatoApp /> )
const NoContent = () => ( <NoContentApp /> )

function openTopNav () {
    document.getElementById("id_topNavbar").style.height = "100%";
}

function closeTopNav () {
    document.getElementById("id_topNavbar").style.height = "0%";
}

function home() {
  ReactDOM.render( <Home />, document.getElementById('id_content'))
  closeTopNav()
}

function servicos() {
  ReactDOM.render( <Servicos />, document.getElementById('id_content'))
  closeTopNav()
}

function projetos() {
  ReactDOM.render( <Projetos />, document.getElementById('id_content'))
  closeTopNav()
}

function contato() {
  ReactDOM.render( <Contato />, document.getElementById('id_content'))
  closeTopNav()
}

const TopNavbarApp = () => (

  <div className="topNavbar">

    <i className="fa fa-align-justify fa-2x" aria-hidden="true" onClick={openTopNav}></i> TopNav

    <Router>
      <div className="topnav" id="id_topNavbar">
        <Link to="" className="closeBtn" onClick={closeTopNav} > Close Top</Link>
        <Link to="/" onClick={home}><i className="fa fa-align-justify" aria-hidden="true"></i> Home</Link>
        <Link to="/servicos" onClick={servicos}><i className="fa fa-align-right" aria-hidden="true"></i> Servicos</Link>
        <Link to="/projetos" onClick={projetos}>Projetos</Link>
        <Link to="/contato" onClick={contato}>Contato</Link>
        <Link to="http://www.google.com" target="_blank">Google</Link>
      </div>
    </Router>
  </div>
)

export default TopNavbarApp
