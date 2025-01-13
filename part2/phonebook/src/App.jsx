import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchFilter from './SearchFilter'
import PersonForm from './PersonForm'
import RenderPeople from './RenderPeople'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('a new person...')
  const [newNumber, setNewNumber] = useState('000-0000000')
  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    
    const personObject = {
      name: newName,
      number: newNumber
    }

    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })

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
      <SearchFilter newSearch={newSearch} handleFilterName={handleFilterName}/>
      <h3>add a new</h3>
      <PersonForm addPerson={addPerson} newName={newName} handleAddName={handleAddName} newNumber={newNumber} handleAddNumber={handleAddNumber}/>
      <h3>Numbers</h3>
      <ul>
      <RenderPeople persons={persons} newSearch={newSearch}/>
      </ul>
    </div>
  )
}

export default App
