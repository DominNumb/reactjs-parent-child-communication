import './App.css'
import React, { Component, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

//RODIČ
export default function App() {
  const [decka, setDecka] = useState([
    { jmeno: 'Dominik', rok: '2000' },
    { jmeno: 'Sebastian', rok: '2007' },
  ])

  const handleSetJmena = (noveJmeno, index) => {
    const copyDecka = [...decka]
    copyDecka[index].jmeno = noveJmeno
    setDecka(copyDecka)
  }
  const handleSetRok = (novyRok, index) => {
    const copyDecka = [...decka]
    copyDecka[index].rok = novyRok
    setDecka(copyDecka)
  }

  return (
    <div className="App">
      <header className="App-header">
        {decka.map((d, index) => (
          <div key={index}>
            <TheDecko
              decko={d}
              onSetJmeno={handleSetJmena}
              onSetRok={handleSetRok}
              myIndex={index}
            />{' '}
            <br />
          </div>
        ))}
      </header>
    </div>
  )
}

//DĚCKO
const TheDecko = ({ decko, onSetJmeno, onSetRok, myIndex }) => {
  //LOKALNI PROMNĚNNÉ
  const [jmeno, setJmeno] = useState('')
  const [rok, setRok] = useState('')

  //ZMENA JMENA
  const handleJmenoSubmit = (e) => {
    e.preventDefault()
    console.log(jmeno)
  }
  const handleJmenoInput = (e) => {
    setJmeno(e.target.value)
  }

  //ZMENA ROKU
  const handleRokSubmit = (e) => {
    e.preventDefault()
    console.log(rok)
  }
  const handleRokInput = (e) => {
    setRok(e.target.value)
  }

  //hlavni DOM
  return (
    <div>
      <div>
        Cus jsem člověk jmenem <strong>{decko.jmeno}</strong>{' '}
      </div>
      <div>
        A narodil jsem se v roce <strong>{decko.rok}</strong>{' '}
      </div>

      <form onSubmit={handleJmenoSubmit}>
        <input
          className="form-control"
          type="text"
          value={jmeno}
          placeholder="Change name"
          onChange={handleJmenoInput}
        />
      </form>
      <form onSubmit={handleRokSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Change year"
          value={rok}
          onChange={handleRokInput}
        />
      </form>

      <div>
        <span
          className="badge badge-secondary m-2"
          onClick={() => onSetJmeno(jmeno, myIndex)}
        >
          Jmeno zmena
        </span>
        <span
          className="badge badge-secondary m-2"
          onClick={() => onSetRok(rok, myIndex)}
        >
          Rok zmena
        </span>
      </div>
    </div>
  )
}
