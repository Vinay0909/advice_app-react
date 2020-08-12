import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hello: ''
    }
    this.fetchAdvice = this.fetchAdvice.bind(this)
  }

  componentDidMount() {
    this.fetchAdvice()
  }

  fetchAdvice() {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ hello: advice });//Since the destruct name is also advice and the attribute name is also advice in state we can write only advice 
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { hello } = this.state;
    return (
      <div className="hello">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
      </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      <div className="app">
        <div className="card">
          <h1 className="heading">{hello}</h1>
          <button className="button" onClick={this.fetchAdvice}><span>Give me another advice!</span></button>
        </div>
      </div>
      </div>
    )
  }
}
export default App 