import React from 'react'
import ekMlz from '../../data/ekMlz.json'
import Check from '../../components/Check'

function Form({
    handleSubmit,
    handleChange,
    formData
}) {
    const selectDough = ["Hamur Kalınlığı","İnce","Orta","Kalın"]
    const selectSize = ["Küçük","Orta","Büyük"]
return (
  <form onSubmit={handleSubmit}>
    <label>Boyut Seç *</label>
      {selectSize.map((s,index)=> (<div  key={index}>
      <label><input type="radio" id="html" value={s} name='size' onChange={handleChange} checked={formData.size === s}/>
      {s}</label>
      </div>))}
    
    <label>Hamur Seç *</label>
      <div><select name = "doughTickness" onChange={handleChange} value={formData.doughTickness}>
      {selectDough.map((s, index)=> (<option key={index} value={s}>{s}</option>))}
      </select></div>

    <label>Ek Malzemeler:</label>
      {ekMlz.map((mlz, index)=> (
        <Check
          changeFn={handleChange}
          isChecked={formData.additionalIngredients.includes(mlz.value)}
          fieldName="additionalIngredients"
          value={mlz.value}
          label={mlz.label}
          key={index}
        />
    ))}

    <label>İsim:<input type="text" name="clientName" onChange={handleChange} value={formData.clientName}/></label>

    <label>Sipariş Notu:<input type="text" name="purchaseNote" onChange={handleChange} value={formData.purchaseNote}/></label>

    <button >Sipariş Ver</button>
  </form>
  )
}

export default Form