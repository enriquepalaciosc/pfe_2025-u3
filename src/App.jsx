import { useState, useEffect } from "react"
import { Alert, Badge } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const colores = [
    { "id": 1, "color": "peru" },
    { "id": 2, "color": "brown" },
    { "id": 3, "color": "red" },
]

// View (componente App)
function App() {
  const [nombre, setNombre] = useState('Waripolo')

  // Sirve para ejecutar código cuando se termina de cargar
  // la página
  useEffect(() => {
      // P.ej. se utiliza cuando deseamos cargar algo
      // apenas la página está lista para mostrar
      // (EJEMPLO DE CARGAR LISTA DE USUARIOS)
      setNombre("Juan Carlos Bodoque")
  }, [])

  return (
    <>
      <h1>App vacía para boilerplate de unidad III</h1>
        <Alert variant='success'>
            <span>El contenido de la alerta verde {nombre}.</span> <br />
            <span>{2 === 2 ? '2 es igual a 2' : '2 no es igual 2' }</span>
        </Alert>
        {colores.map(function (color) {
            return <Badge key={color.id} bg="info">{color.color}</Badge>
        })}
    </>
  )
}

export default App
