import React from 'react';
import {connect} from 'react-redux';
import { Table, Container, Row, Col } from 'react-bootstrap';
import './common-custom.css';
class ServiceDetails extends React.Component {
  render() {
    const emp = this.props.location ? this.props.location.state.detail : this.props;
    console.log(this.props.location)
    return(
      <Container>
        <Row className="service-info-form">
          <Col md='6'>123</Col>
          <Col md='6'>678</Col>
        </Row>
        <div className='mt-5'>
        <Table bordered hover size="sm">
        <thead>
          <tr> 
            <th>Category</th>
            <th>Skills</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          <td>abcd</td>
          <td>def</td>
          <td>hijk</td>
        </tbody>
      </Table>

        </div>

      </Container>
    )
  }

}

export default connect() (ServiceDetails);