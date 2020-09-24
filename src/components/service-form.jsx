import React from 'react';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom'
import { Container, Form, Row, Button, Col } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./service-form.css";
class ServiceForm extends React.Component {
  constructor() {
    super();
    const token = localStorage.getItem("token");
    let loggedIn = true
    if (token == null) {
      loggedIn = false
    }
    this.state = {
      loggedIn,
      target: '',
      yearPicked: new Date(),
      duOptions: '',
      locationOptions: '',
      isSubmit: false,
      serviceName: '',
      serviceManager: '',
      accountName: '',
      deliveryManager: '',
      agents: [{ name: "" }],
      reviewers: [{ name: "" }],
      defects: [{
        defectCode: "",
        lifeCycle: "",
        impacted: ""
      }],

    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);

  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleDateChange = date => {
    this.setState({
      yearPicked: date
    });
  };
  handleAgentNameChange = idx => evt => {
    const newAgents = this.state.agents.map((agent, sidx) => {
      if (idx !== sidx) return agent;
      return { ...agent, name:evt.target.value };
    });

    this.setState({ agents: newAgents });
  };
  handleAddAgent = () => {
    this.setState({
      agents: this.state.agents.concat([{ name: "" }])
    });
  };
  handleRemoveAgent = idx => () => {
    this.setState({
      agents: this.state.agents.filter((s, sidx) => idx !== sidx)
    });
  };
  handleReviewerNameChange = idx => evt => {
    const newReviewers = this.state.reviewers.map((reviewer, sidx) => {
      if (idx !== sidx) return reviewer;
      return { ...reviewer, name:evt.target.value };
    });

    this.setState({ reviewers: newReviewers });
  };
  handleAddReviewer = () => {
    this.setState({
      reviewers: this.state.reviewers.concat([{ name: "" }])
    });
  };
  handleRemoveReviewer = idx => () => {
    this.setState({
      reviewers: this.state.reviewers.filter((s, sidx) => idx !== sidx)
    });
  };
  submitForm = (event) => {
    event.preventDefault();
    let data = this.state;
    console.log('Data fetch submitted' + JSON.stringify(data))
    this.props.history.push({
      pathname: '/accountinfo',
      state: { detail: data }
    })
    // console.log('A form was submitted: ' + JSON.stringify(this.state));
    // fetch('http://localhost:8008/account/user/', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   // We convert the React state to JSON and send it as the POST body
    //   body: JSON.stringify(this.state)
    // }).then(function (response) {
    //   console.log(response)
    //   return response.json();
    // });

    // event.preventDefault();
  }


  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/signin" />
    }

    return (
      <Container>
        <Row className="justify-content-md-center">
          <h1>Step 1- Submit Account Details</h1><br />
        </Row><br />
        <form  onSubmit= {this.submitForm} className="service-info-form">
        <Row className="set-margin">
        <Col md='6'>
          <Form.Group as={Row}>
            <Form.Label column sm={4} >DU Name</Form.Label>
            <Col>
              <Form.Control as="select" defaultValue="Choose..." name="duOptions" value={this.state.duOptions} onChange={this.onChange}>
                <option>Choose...</option>
                <option>       UK-FPO</option>
                <option>UK-RTTU</option>
                <option>FR-Aeroline</option>
                <option>FR-VR</option>
                <option> Germany</option>
                <option> Other CE</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={4} >Account Name</Form.Label>
            <Col>
            <Form.Control type="text" placeholder="Account Name" name="accountName" value={this.state.accountName} onChange={this.onChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
          <Form.Label column sm={4} >Support Team </Form.Label>
            <Col>
            <Form.Control type="text" placeholder="Enter Support Team Name" name="serviceName" value={this.state.serviceName} onChange={this.onChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
          <Form.Label column sm={4} >Service Manager</Form.Label>
            <Col>
            <Form.Control type="text" placeholder="Enter Service Manager Unit" name="serviceManager" value={this.state.serviceManager} onChange={this.onChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
          <Form.Label column sm={4} >Team Members&nbsp; 
            <span>
              <button type="button" onClick={this.handleAddAgent} className="btn-info small" >  +  </button>
            </span> 
          </Form.Label>
            <Col>
              {this.state.agents.map((agent, idx) => (
                <div className="agent">
                  <input type="text" placeholder={`Name #${idx + 1} `} value={agent.name} onChange={this.handleAgentNameChange(idx)} className="agent-field" /> &nbsp;
                  <button type="button" onClick={this.handleRemoveAgent(idx)} className="btn btn-danger small" >-     </button>
                </div>
              ))}
            </Col>
          </Form.Group>
          
        </Col>
        <Col md='6'>
          <Form.Group as={Row}>
            <Form.Label column sm={4} >Location </Form.Label>
            <Col>
              <Form.Control as="select" defaultValue="Choose..." name="locationOptions" value={this.state.locationOptions} onChange={this.onChange}>
              <option>Choose...</option>
              <option>Noida</option>
              <option>Chennai</option>
              <option>Pune</option>
              <option>Bangalore</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={4} >Quality Target %</Form.Label>
            <Col>
              <Form.Control type="number" placeholder="Ex-95%" name="target" value={this.state.target} onChange={this.onChange}  className="number"/>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={4} >Year</Form.Label>
            <Col>
            <DatePicker selected={this.state.yearPicked} onChange={this.handleDateChange} />
            </Col>
          </Form.Group>
          
          <Form.Group as={Row}>
          <Form.Label column sm={4} >Delivery manager</Form.Label>
            <Col>
            <Form.Control type="text" placeholder="Enter Delivery Manager Unit" name="deliveryManager" value={this.state.deliveryManager} onChange={this.onChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={4} >Reviewers&nbsp; 
              <span>
                <button type="button" onClick={this.handleAddReviewer} className="btn-info small" >  +  </button>
              </span> 
            </Form.Label>
            <Col>
              {this.state.reviewers.map((review, idx) => (
                <div className="review">
                  <input type="text" placeholder={`Reviewer #${idx + 1} `} value={review.name} onChange={this.handleReviewerNameChange(idx)} className="agent-field" /> &nbsp;
                  <button type="button" onClick={this.handleRemoveReviewer(idx)} className=" btn btn-danger small" >-     </button>
                </div>
              ))}
            </Col>
          </Form.Group>
        </Col>

        
        </Row>
        
          <Button variant="primary" type="submit" onClick={this.onSubmit} className="float-right mt-5">
            Next
          </Button>
        </form>
      </Container>
    )
  }
}



export default connect()(ServiceForm);