import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {persons} from "../data"

function Count() {
  return (
    <div>
    <Row className="justify-content-center my-2 fs-4">
    <Col sm="8" className="">
    لديك {persons.length} مواعيد اليوم
    </Col>
    </Row>
    </div>
  )
}

export default Count
