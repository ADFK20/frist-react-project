import { Container } from "react-bootstrap"
import MyButtons from "./components/buttons";
import { persons } from "./data"
import List from "./components/list";
import Count from "./components/header"
import React, { useState } from "react";
function App() {

  const [dataPerson, setDataPerson] = useState(persons)
  const onDelete =()=>{
          setDataPerson([])
  }
  const viewData =()=>{
          setDataPerson(persons)
  }
  return ( 
    <div className="font body">
    <Container className="py-5  " >

    <Count persons={dataPerson} />

    <List persons={dataPerson} />
    <MyButtons fun={onDelete} view={viewData}/>
    </Container>
    </div>
  );
}

export default App;
