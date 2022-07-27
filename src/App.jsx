import './App.css'
import Card from './components/Card'

function App() {
  const person = {
    name: 'Stefano',
    age: 36,
    favoriteMovie: 'Interestelar',
    favoriteMusic: 'EDM'
  }

  let {name, age, favoriteMovie, favoriteMusic } = person

  const hobbies = {
    title: "Hobbies",
    list: ["Música", "Ir a la playa", "Jugar computadora", "Correr"]
  }

  const food = {
    title: "Mi comida favorita",
    list: ["Pasticho", "Pizza", "Higado encebollado", "Mondongo"]
  }

  const stackTech = {
    title: "Mi stack tech",
    list: ["HTML", "CSS", "SAAS", "SAAS"]
  }

  return (
    <div className="App">
      <div className='contenedor1'>
        <ul className='list'>
          <li className='list__items'><strong>Nombre: </strong>{name}</li>
          <li className='list__items'><strong>Edad: </strong>{age}</li>
          <li className='list__items'><strong>Película favorita: </strong>{favoriteMovie}</li>
          <li className='list__items'><strong>Música favorita: </strong>{favoriteMusic}</li>
        </ul>
      </div>
      <Card objInfo={hobbies} />
      <Card objInfo={food} />
      <Card objInfo={stackTech} />
    </div>
  )
}

export default App
