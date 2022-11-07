import React from 'react'
import { Row, Col } from 'react-bootstrap'

const MyButtons = ({fun,view}) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="my-3 d-flex justify-content-between ">
        <button onClick={fun} className="btn-del py-2 ">امسح الكل</button>
        <button onClick={view} className="btn-del py-2 "> عرض البيانات</button>
      </Col>
    </Row>
  )
}

export default MyButtons
