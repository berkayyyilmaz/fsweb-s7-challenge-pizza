import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
//Data
import initialFormData from '../../data/initialFormData.json'
import pizzaInfo from '../../data/pizzaInfo.json'
//Components
import Form from './Form'
import Header from '../../components/Header/Header'
import Quantity from '../../components/Quantity/Quantity'
//Toastify
import { ToastContainer,toast, Flip } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function Order() {
  const [formData,setFormData] = useState(initialFormData);
  const [quantity,setQuantity] = useState(1)
  const [toppingCost, setToppingCost] = useState(0)
  const [totalCost, setTotalCost] = useState(pizzaInfo.price)
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

useEffect(()=>{
  setToppingCost(formData.additionalIngredients.length*5*quantity)
  setTotalCost(formData.additionalIngredients.length*5*quantity+pizzaInfo.price*quantity)
},[formData,quantity])

const handleClear = () =>{
  setFormData(initialFormData);
}

const handleSubmit = (e) =>{
  e.preventDefault();
  
  const checkFormValidity = (data) => {
    const errors =[];
    if (!data.size) {
      errors.push("Lütfen pizza boyutunu seçin.");
    }
    if (data.doughTickness === "Hamur Kalınlığı") {
      errors.push("Lütfen hamur kalınlığını seçiniz.");
    }
    if (data.clientName.length<3) {
      errors.push("İsim en az 3 harfli olmalıdır.");
    }
    return errors;
  }

  const errors = checkFormValidity(formData)

  if (errors.length>0) {
    errors.forEach(error => {
      toast.error(error, {transition: Flip});
    })
    return; //Hata varsa aşağıya geçmemesi için
  }


    console.log(formData)
    toast.success('Siparişiniz Alınıyor', {
    position: "bottom-center",
    autoClose: 2000,
    closeOnClick: true,
    pauseOnHover: false,
    progress: undefined,
    theme: "light",
    transition: Flip,
    });
      handleClear();
      setTimeout(() => {
        history.push('/siparisalindi');
      }, 2800);
  
}
  const handleMenuClick = () => {
    toast.warn('Daha çok yeniyiz ve menü hazır değil 😥, Bu pizzayı yesen olmaz mı? 😪')
  }

  return (
    <div>
      <h1>Teknolojik Yemekler</h1>
      <Header handleMenuClick={handleMenuClick}/>
      <h2>{pizzaInfo.name}</h2>
      <p>{pizzaInfo.description}</p>

      <Form handleSubmit={handleSubmit}
      handleChange={handleChange}
      formData={formData}
      />
      <Quantity quantity={quantity} setQuantity={setQuantity}/>
      <div><label>Seçimler:{toppingCost}₺</label></div>
      <div><label>Toplam:{totalCost}₺</label></div>
      <ToastContainer/>
    </div>
  )
}

export default Order