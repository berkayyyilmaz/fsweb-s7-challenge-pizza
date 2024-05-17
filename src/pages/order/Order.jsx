import React, {useState} from 'react'
import Check from '../components/Check'
import ekMlz from '../../data/ekMlz.json'
import pizza from '../../data/pizza.json'
import { useHistory } from 'react-router-dom'

const initialFormData = {
  boyut:'',
  hamur:'Hamur Kalınlığı',
  siparisNotu:'',
  isim: '',
  ekMalzemeler: []
}



function Order() {
  const [formData,setFormData] = useState(initialFormData);
  const history = useHistory();

const handleChange = (e) => {
  console.log(e.target.value)
const {name, value, checked, type} = e.target;

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

const disableForm = (
  formData.ekMalzemeler.length>10 || 
  formData.boyut == '' || 
  formData.hamur =='Hamur Kalınlığı' ||
  formData.isim.length<3)
  return (
    <div>
      <h1>Teknolojik Yemekler</h1>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>

      <form onSubmit={handleSubmit}>
        <label>Boyut Seç *</label>
        <div>
        <label><input type="radio" id="html" value="Küçük" name='boyut'onChange={handleChange} checked={formData.boyut === 'Küçük'}/>
        Küçük</label>
        </div>
        <div>
        <label><input type="radio" id="html" value="Orta" name='boyut' onChange={handleChange} checked={formData.boyut === 'Orta'}/>
        Orta</label>
        </div>
        <div>
        <label><input type="radio" id="html" value="Büyük" name='boyut' onChange={handleChange} checked={formData.boyut === 'Büyük'}/>
        Büyük</label>
        </div>
        <div><label>Hamur Seç *</label></div>
        <div><select name = "hamur" onChange={handleChange} value={formData.hamur}>
          <option value="Hamur Kalınlığı">Hamur Kalınlığı</option>
          <option value="İnce">İnce</option>
          <option value="Orta">Orta</option>
          <option value="Kalın">Kalın</option>
        </select></div>

        <label>Ek Malzemeler:</label>
        {ekMlz.map((mlz, index)=> (
        <Check
          changeFn={handleChange}
          isChecked={formData.ekMalzemeler.includes(mlz.value)}
          fieldName="ekMalzemeler"
          value={mlz.value}
          label={mlz.label}
          key={index}
        />
        ))}
        <label>İsim:<input type="text" name="isim" onChange={handleChange} value={formData.isim}/></label>
        <label>Sipariş Notu:<input type="text" name="siparisNotu" onChange={handleChange} value={formData.siparisNotu}/></label>
        <button disabled={disableForm}>Sipariş Ver</button>
        </form>
        
    </div>
  )
}

export default Order