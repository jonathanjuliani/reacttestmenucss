import React, { Component } from 'react';
import TopNavbarApp from './navbar/TopNavbarApp';
import SideNavbarApp from './navbar/SideNavbarApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <TopNavbarApp />
          <SideNavbarApp />
        </div>
        <div className="container" id="id_content">
          teste
        </div>
      </div>
    );
  }
}

export default App;
