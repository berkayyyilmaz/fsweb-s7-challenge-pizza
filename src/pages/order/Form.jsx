import React from 'react'
import ekMlz from '../../data/ekMlz.json'
import Check from '../../components/Checkbox/Check'
import './Form.css'
import { Container, Row, Col } from 'reactstrap';

function Form({
    handleSubmit,
    handleChange,
    formData
}) {
    const selectDough = ["Hamur Kalınlığı","İnce","Orta","Kalın"]
    const selectSize = ["Küçük","Orta","Büyük"]
return (

  <form onSubmit={handleSubmit}>
    <Container>
      <Row>
        <Col>
        <label>Boyut Seç *</label>
          {selectSize.map((s,index)=> (<div  key={index}>
          <label><input type="radio" id="html" value={s} name='size' onChange={handleChange} checked={formData.size === s}/>
          {s}</label>
          </div>))}
        </Col>
        <Col>
    <label>Hamur Seç *</label>
      <div><select name = "doughTickness" onChange={handleChange} value={formData.doughTickness}>
      {selectDough.map((s, index)=> (<option key={index} value={s}>{s}</option>))}
      </select></div>
      </Col>
      </Row>
      <Row>
        <Col xs='3'></Col>
        <Col xs="6" className='materialsColumn'>
    <label>Ek Malzemeler:</label>
    <div className='checkbox-container'>
      {ekMlz.map((item, index)=> (
        <Check
          changeFn={handleChange}
          isChecked={formData.toppings && formData.toppings.includes(item.value)}
          fieldName="toppings"
          value={item.value}
          label={item.label}
          key={index}
        />
    ))}
      </div>
      </Col>
      </Row>
    <label>İsim:<input type="text" name="clientName" onChange={handleChange} value={formData.clientName}/></label>

    <label>Sipariş Notu:<input type="text" name="purchaseNote" onChange={handleChange} value={formData.purchaseNote}/></label>

    <button >Sipariş Ver</button>
    </Container>
  </form>
  )
}

export default Form