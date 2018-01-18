import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Grid, Row, Col, Nav, Navbar} from 'react-bootstrap';

import Main  from './components/Main';

class App extends Component {
  render() {
    const navbarInstance = (<Navbar fluid={true}>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Todoist</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
      </Nav>
    </Navbar>);
    return (
      <Router>
        <div>
        {navbarInstance}
        <Grid>
          <Row>
            <Col xs={12} md={12}>
              <Route exact path="/" component={Main}/>
            </Col>
          </Row>
        </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
