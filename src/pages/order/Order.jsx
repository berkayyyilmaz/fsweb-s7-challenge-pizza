import React, {useState} from 'react'
import Check from '..components/Check'
import ekMlz from '../data/ekMlz.json'

function Order() {
  return (
    <div>
      <h1>Teknolojik Yemekler</h1>
      <h2>Acı Pizza</h2>
      <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana
göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha
sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,
genellikle yuvarlak, düzleștirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>

      <form>
        <label>Boyut Seç:</label>
        <div>
        <input type="radio" id="html" value="Küçük" name='boyut'/>
        <label>Küçük</label>
        </div>
        <div>
        <input type="radio" id="html" value="Orta" name='boyut'/>
        <label>Orta</label>
        </div>
        <div>
        <input type="radio" id="html" value="Büyük" name='boyut'/>
        <label>Büyük</label>
        </div>
        <div><label>Hamur Seç:</label></div>
        <div><select >
          <option value="İnce">İnce</option>
          <option value="Orta">Orta</option>
          <option value="Kalın">Kalın</option>
        </select></div>

        <label>Ek Malzemeler:</label>
        <Check changeFn={handleChange}
    isChecked={FormData.ekMlz.includes()}
    fieldName
    value
    label></Check>
        </form>
        
    </div>
  )
}

export default Order