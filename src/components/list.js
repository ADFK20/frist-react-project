import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { persons } from '../data'
const list = () => {
  return (
    
    <div>
    <Row className="justify-content-center">
    <Col sm="8" className="">
    <div className="box">
      
    {persons.length ? (persons.map((item)=>{

        return(
          
      <div key={item.id} className="d-flex border-bottom">
      <img alt="person" src="person.png" className="img-avatar m-2"></img>
      <div className="m-2">
      <p className="fs-5 d-inline" > المريض :{item.name} عبدالله</p>
      <p className="fs-6" >  الساعة {item.date}</p>
      </div>
      </div>
        )
      })) : <h2 className="p-5 fs-1 text-center ">لا يوجد مواعيد </h2>}
      </div>
      </Col>
      </Row>
      </div>
  )
}

export default list
