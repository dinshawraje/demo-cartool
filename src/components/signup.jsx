
import React, { Component } from 'react';
import { Container, Form, Row, Button, Col } from 'react-bootstrap';


export default class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      email: ""

    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);

  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  submitForm = (event) => {
    alert('A form was submitted: ' + this.state);
    fetch('http://localhost:8008/account/user/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(this.state)
    }).then(function (response) {
      console.log(response)
      return response.json();
    });

    event.preventDefault();
  }


  render() {

    return (
      <Container>
        <Row className="justify-content-md-center">
          <h1>SignUP</h1>
        </Row>
        {/* <Row className=""> */}
          <Form onSubmit= {this.submitForm}>
            <Form.Row>
            <Form.Group as={Col}md ='4'>
              <Form.Label>username</Form.Label>
              <Form.Control type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange}/>
            </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Firstname</Form.Label>
              <Form.Control type="text" placeholder="first_name" name="first_name" value={this.state.first_name} onChange={this.onChange}/>
            </Form.Group>     
            <Form.Group as={Col}>
              <Form.Label>Middle Name</Form.Label>
              <Form.Control type="text" placeholder="middle_name" name="middle_name" value={this.state.middle_name} onChange={this.onChange}/>
            </Form.Group>     
            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="last_name" name="last_name" value={this.state.last_name} onChange={this.onChange}/>
            </Form.Group>     

            </Form.Row>
            <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>RoleName</Form.Label>
              <Form.Control type="text" placeholder="roleName" name="roleName" value={this.state.roleName} onChange={this.onChange}/>
            </Form.Group>     
   

            <Form.Group controlId="formBasicEmail" as={Col}>
            <Form.Label>Email</Form.Label>

              <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.onChange} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword" as={Col}>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
            </Form.Group>

            </Form.Row>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.onSubmit}>
              Submit
            </Button>
          </Form>
        {/* </Row> */}
      </Container>
    )
  }
}
