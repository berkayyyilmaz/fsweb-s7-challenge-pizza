import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

//Data
import initialFormData from '../../data/initialFormData.json'
import pizzaInfo from '../../data/pizzaInfo.json'

//Helper Functions
import isFormDisabled  from '../../functions/isFormDisabled'
//Components
import Form from './Form'




function Order() {
  const [formData,setFormData] = useState(initialFormData);
  const history = useHistory();

const handleChange = (e) => {
  console.log(e.target.value)
const {name, value, checked, type} = e.target;

//Checking the checkboxes
let newValue;
if (type && type ==='checkbox') {
  
  const oldValues = formData[name];

  if (oldValues.includes(value)){
    newValue = oldValues.filter((v)=> v !== value);
  } else{
    newValue = [...oldValues, value];
  }
} else {
  newValue = value;
}

setFormData({
  ...formData,
  [name]: newValue,
})
}

const handleClear = () =>{
  setFormData(initialFormData);
}

const handleSubmit = (event) =>{
  event.preventDefault();
  console.log(formData)
    handleClear();
  history.push('/siparisalindi')
  
}

  return (
    <div>
      <h1>Teknolojik Yemekler</h1>
  
      <h2>{pizzaInfo.name}</h2>
      <p>{pizzaInfo.description}</p>

      <Form handleSubmit={handleSubmit}
      handleChange={handleChange}
      disableForm={isFormDisabled(formData)}
      formData={formData}
      />
        
    </div>
  )
}

export default Order