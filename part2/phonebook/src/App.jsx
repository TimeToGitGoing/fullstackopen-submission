import { useState } from 'react'

const Contact = ({ contact }) => {
  return (
    <li>{contact.name}</li>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1 }
  ]) 
  const [newName, setNewName] = useState('a new person...')

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    
    const personObject = {
      name: newName,
      id: String(persons.length + 1)
    }

    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handleAddName = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
            <input 
              value={newName}
              onChange={handleAddName}
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <Contact key={person.id} contact={person}/>
        )}
      </ul>
    </div>
  )
}

export default App
