import './App.css';
import { useState } from 'react';

function App() {

  const [number, setNumber] = useState(0);
  const [date, setDate] = useState({
    day: 0,
    month: 0,
    year: 0
  })

  const [texto1, setTexto1] = useState(0);
  const [texto2, setTexto2] = useState(0);
  const [texto3, setTexto3] = useState(0);

  const handleClick = () => {
    fetch(`http://numbersapi.com/${number}/math?json`)
    .then(response => response.json())
    .then(data => setTexto1(data.text))  
  }

  const getDate = () => {
    fetch(`http://numbersapi.com/${date.month}/${date.day}/date?json`)
    .then(response => response.json())
    .then(data => setTexto2(data.text))  
  }

  const getYear = () => {
    fetch(`http://numbersapi.com/${date.year}/year?json`)
    .then(response => response.json())
    .then(data => setTexto3(data.text))  
  }

  const handleClicks = () => {
    getDate();
    getYear();  
  }

  const handleNumberChange = (event) => setNumber(event.target.value)

  const handleDateChange = (event) => {
    const inputDate = event.target.value;
    const [inputYear, inputMonth, inputDay] = inputDate.split("-")
    setDate({
      day: inputDay,
      month: inputMonth,
      year: inputYear
    });
  }


  return (
    <main>

      <h1>Datos sobre números y fechas</h1>

      <section>
        <h2>Obtener un dato sobre un número</h2>
        <input type="number" onChange={handleNumberChange} />
        <button onClick={handleClick}>Enviar</button>
        <p className="result-box">{texto1}</p>
      </section>

      <section>
        <h2>Obtener un dato sobre una fecha</h2>
        <input type="date" onChange={handleDateChange} />
        <button onClick={handleClicks}>Enviar</button>
        <h3>Dato sobre la fecha</h3>
        <p className="result-box">{texto2}</p>
        <h3>Dato sobre el año</h3>
        <p className="result-box">{texto3}</p>
      </section>

    </main>
  );
}

export default App;