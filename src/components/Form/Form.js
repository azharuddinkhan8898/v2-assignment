
import { Button, Col, Form, Row } from "react-bootstrap";

export default function UserForm({ tempUserData, countryDetails, setUserData, setTempUserData }) {



  const changeHandler = (e, name) => {
    setTempUserData({ ...tempUserData, [name]: e.target.value })
    if (name === "country" && e.target.value === "NA") {
      setTempUserData({ ...tempUserData, state: "NA", district: "NA" })
    }
  }
  return (
    <>
      <p>&nbsp;</p>
      <h3>User form</h3>
      {
        tempUserData && <Form>
          <p>&nbsp;</p>
          <Row>
            <Col>
              <Form.Group controlId="formFullname">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" value={tempUserData.fullName} onChange={(e) => changeHandler(e, 'fullName')} placeholder="Full Name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={tempUserData.emailId} onChange={(e) => changeHandler(e, 'emailId')} type="email" placeholder="Enter email" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group controlId="formDesignation">
                <Form.Label>Designation</Form.Label>
                <Form.Control value={tempUserData.designation} onChange={(e) => changeHandler(e, 'designation')} type="text" placeholder="Designation" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formdob">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control value={tempUserData.dob} onChange={(e) => changeHandler(e, 'dob')} type="date" placeholder="Date of Birth" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group controlId="forGender">
                <Form.Label>Gender</Form.Label>
                <Form.Control defaultValue={tempUserData.gender} onChange={(e) => changeHandler(e, 'gender')} as="select" >
                  <option value="NA">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="forCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control defaultValue={tempUserData.country} onChange={(e) => changeHandler(e, 'country')} as="select">
                  <option value="NA">Select Country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group controlId="forState">
                <Form.Label>State</Form.Label>
                <Form.Control defaultValue={tempUserData.state} onChange={(e) => changeHandler(e, 'state')} as="select">
                  <option value="NA">Select State</option>
                  {
                    countryDetails[tempUserData.country.toLowerCase()]?.states?.map(el => <option key={el} value={el}>{el}</option>)
                  }
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="forDist">
                <Form.Label>District</Form.Label>
                <Form.Control defaultValue={tempUserData.district} onChange={(e) => changeHandler(e, 'district')} as="select">
                  <option value="NA">Select District</option>
                  {
                    countryDetails[tempUserData.country.toLowerCase()]?.districts[tempUserData.state]?.map(el => <option key={el} value={el}>{el}</option>)
                  }
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit" onClick={(e) => {
            e.preventDefault();
            setUserData(tempUserData)
          }}>
            Update
      </Button>
        </Form>
      }

    </>
  )
}
