import React, {Component} from 'react';
import './login.css';
import {Redirect} from 'react-router-dom'
import { Container, Form, Row, Button } from 'react-bootstrap';


export default class Login extends Component{
    constructor(){
        super()
        this.state = {
          email: "",
          password: "",
          loggedIn: false
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    
      }
      onChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
      submitForm(e) {
        e.preventDefault();
        const {email, password} = this.state;
        if((email === "dinshaw.raje@gmail.com" && password === "12345678")) {
          const token = Math.random().toString(36).substr(2);
          localStorage.setItem("token", token);
          this.setState({
            loggedIn: true
          })
        }
      }
      render() {
        if(this.state.loggedIn) {
          return <Redirect to= {{
                pathname: '/',
                state: { email: this.state.email }
            }}/>
        }
        return (
          <Container>
          <Row className="justify-content-md-center">
            <h1>Login</h1>
          </Row>
          <Row className="justify-content-md-center">
            <Form onSubmit= {this.submitForm}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.onChange} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={this.onSubmit}>
                Submit
              </Button>
            </Form>
          </Row>
        </Container>
      
        )
      }
    }
    