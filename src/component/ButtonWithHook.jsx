import React, { useEffect, useState } from 'react'


function ButtonWithHook() {
  const [key1, setKey1] = useState("this is the default state of a function component")
  const [key2, setKey2] = useState(0)

  const [countries, setCountries] = useState([]) //2 tombbel jon vissza, az elso az alap erteke, a masodik amire valtozik, demindketto uj kulon tomb az useState-ben

/*   fetch("https://restcountries.com/v3.1/all")
  .then(res => res.json())
  .then(countriesData => setCountries(countriesData)) */
  
  /*   console.log('render') */
  
  useEffect( //2 argumentum: callback fv, array: amibe ha valtozast irunk akkor ujra fut a useeffect
  () => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(countriesData => setCountries(countriesData))

        },
        []
    )
    

  return (
      <>
    <div>{key1}</div>
    <button onClick={() => setKey1("This is the NEW state of a function component")}>{key1}</button>
    <button onClick={() => setKey2(1)}>{key2}</button>

    <div className='countries'>
        {countries.map((country, index) => <div key={index}>{country.name.common}</div>)}
    </div>
    </>
  )
}

export default ButtonWithHook