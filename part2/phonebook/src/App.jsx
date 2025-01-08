import { useState } from 'react'

const Contact = ({ contact }) => {
  return (
    <li>{contact.name} {contact.number}</li>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]) 
  const [newName, setNewName] = useState('a new person...')
  const [newNumber, setNewNumber] = useState('000-0000000')
  const [newSearch, setNewSearch] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    
    const personObject = {
      name: newName,
      id: String(persons.length + 1),
      number: newNumber
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleAddName = (event) => {
    setNewName(event.target.value)
  }

  const handleAddNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterName = (event) => {
    setNewSearch(event.target.value.toLowerCase())
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <div>filter shown with <input value={newSearch} onChange={handleFilterName}/></div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleAddName}/></div>
        <div>number: <input value={newNumber} onChange={handleAddNumber}/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons
          .filter(person => person.name.toLowerCase().includes(newSearch))
          .map(person => 
            <Contact key={person.id} contact={person}/>
          )
        }
      </ul>
    </div>
  )
}

export default App
