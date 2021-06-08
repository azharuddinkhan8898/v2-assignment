import React from 'react'
import { Table } from 'react-bootstrap'

export default function DataTable({ userData }) {
  return (
    <>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <h3>User Data</h3>
      <p>&nbsp;</p>
      <div className="data-table">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email ID</th>
              <th>Designation</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Country</th>
              <th>State</th>
              <th>District</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{userData.fullName}</td>
              <td>{userData.emailId}</td>
              <td>{userData.designation}</td>
              <td>{userData.dob}</td>
              <td>{userData.gender}</td>
              <td>{userData.country}</td>
              <td>{userData.state}</td>
              <td>{userData.district}</td>
            </tr>

          </tbody>
        </Table>
      </div>
    </>
  )
}
