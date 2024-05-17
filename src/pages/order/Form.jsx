import React from 'react'
import ekMlz from '../../data/ekMlz.json'
import Check from '../components/Check'

function Form({
    handleSubmit,
    handleChange,
    disableForm,
    formData

}) {
    const selectDough = ["Hamur Kalınlığı","İnce","Orta","Kalın"]
  return (
    <form onSubmit={handleSubmit}>
        <label>Boyut Seç *</label>

        <div>
        <label><input type="radio" id="html" value="Küçük" name='size'onChange={handleChange} checked={formData.size === 'Küçük'}/>
        Küçük</label>
        </div>
        <div>
        <label><input type="radio" id="html" value="Orta" name='size' onChange={handleChange} checked={formData.size === 'Orta'}/>
        Orta</label>
        </div>
        <div>
        <label><input type="radio" id="html" value="Büyük" name='size' onChange={handleChange} checked={formData.size === 'Büyük'}/>
        Büyük</label>
        </div>
        <div><label>Hamur Seç *</label></div>
        <div><select name = "doughTickness" onChange={handleChange} value={formData.doughTickness}>
            {selectDough.map((s, index)=> (<option value={s}>{s}</option>))}
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
        <button disabled={disableForm}>Sipariş Ver</button>
        </form>
  )
}

export default Form