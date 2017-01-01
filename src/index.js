import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Nav, Navbar, NavDropdown, MenuItem, NavItem, Tabs, Tab } from 'react-bootstrap';
import App from './App';
import Finance from './Finance'
import './index.css';

//nhung chuc nang chinh

function tick() {
  ReactDOM.render(
  <App />,
  document.getElementById('content')
);
}
function tick1() {
  ReactDOM.render(
  <Finance />,
  document.getElementById('content1')
);
}

class App1 extends Component {
  constructor(props) {
      super(props);
    
      this.state = {
         action: "1",
      }
   }
   handleSelect(selectedKey) {
    if (selectedKey === 2) {
    document.getElementById('content1').style.display='block'; 
      setInterval(tick1, 1000);
    document.getElementById('content').style.display='none';
    this.setState( {action: selectedKey} );
    }
    else
    {
      document.getElementById('content').style.display='block'; 
      document.getElementById('content1').style.display='none';
      setInterval(tick, 1000);
      this.setState( {action: selectedKey} );
    }
   }
     render() {
    return (
          <Navbar>
            <Nav bsStyle="pills" activeKey={parseFloat(this.state.action)} onSelect={this.handleSelect.bind(this)}>
              <NavItem eventKey={1}>TopGainers</NavItem>
              <NavItem eventKey={2}>TopLoser</NavItem>
            </Nav>
          </Navbar>
    );
  }
}
  ReactDOM.render(
  <App1 />,
  document.getElementById('root')
);

setInterval(tick, 1000);


