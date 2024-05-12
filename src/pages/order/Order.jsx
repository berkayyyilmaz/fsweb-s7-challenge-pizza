import React, {useState} from 'react'

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
        <div>
          <input type="checkbox" value="Pepperoni"  />
          <label>Pepperoni</label>
        </div>
        <div>
          <input type="checkbox" value="Domates"/>
          <label>Domates</label>
        </div>
        <div>
          <input type="checkbox" value="Biber"  />
          <label>Biber</label>
        </div>
        <div>
          <input type="checkbox" value="Sosis" />
          <label>Sosis</label>
        </div>
        <div>
          <input type="checkbox" value="Mısır" />
          <label>Mısır</label>
        </div>
        <div>
          <input type="checkbox" value="Sucuk"    />
          <label>Sucuk</label>
        </div>
        <div>
          <input type="checkbox" value="Soğan" />
          <label>Soğan</label>
        </div>
        <div>
          <input type="checkbox" value="Mantar"/>  
          <label>Mantar</label>
        </div>
        <div>
          <input type="checkbox" value="Zeytin"  />
          <label>Zeytin</label>
        </div>
        <div>
          <input type="checkbox" value="Ananas"  />
          <label>Ananas</label>
        </div>

        </form>
        
    </div>
  )
}

export default Order