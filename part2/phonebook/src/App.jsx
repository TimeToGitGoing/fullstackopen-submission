import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchFilter from './SearchFilter'
import PersonForm from './PersonForm'
import RenderPeople from './RenderPeople'
import personService from './services/persons'
import Notification from './services/Notification'
import BadNotification from './services/BadNotification'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('a new person...')
  const [newNumber, setNewNumber] = useState('000-0000000')
  const [newSearch, setNewSearch] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  console.log(persons)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const clickDelete = (person) => {
    console.log('clicked!')
    if (window.confirm(`Do you really want to delete ${person.name}?`)) {
      const idToDelete = person.id

      personService
        .deletePerson(idToDelete)
        .then(initialPersons => {
          console.log('deleted successfully!')
          console.log('after delete ok', persons)
          setPersons(persons.filter( person => person.id !== idToDelete ))
        })
        .catch(error => {
          console.log('Failed to delete the item')
          console.log(persons)
        })
    }
  }  

  const addPerson = (event) => {
    event.preventDefault()

    let samePersonName = ''
    if (persons.some(person => person.name === newName)) {
      window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      samePersonName = newName
      const samePersonId = persons.find(p => p.name === samePersonName).id
      
      const updatePersonObject = {
        name: samePersonName,
        number: newNumber
      }

      personService
        .update(samePersonId, updatePersonObject)
        .then(returnedPerson => {
          console.log('what is in returnedPerson', returnedPerson, 'what is in persons', persons)
          setPersons(persons.map(p => p.id === returnedPerson.id ? returnedPerson : p ))
          setNewName('')
          setNewNumber('')
          setSuccessMessage(`Successfully edited ${returnedPerson.name}'s number.`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        })
        .catch(error => {
          setErrorMessage(`Information of ${samePersonName} has already been removed from server.`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
    }
    
    else {
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
        setSuccessMessage(`Added ${returnedPerson.name} successfully.`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
        setPersons(persons.concat(personObject))
      })
      .catch(error => {
        // this is the way to access the error message
        console.log(error.response.data.error)
        setErrorMessage(error.response.data.error)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setPersons(persons)
      })

    setNewName('')
    setNewNumber('')
  }}

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
      <Notification message={successMessage}/>
      <BadNotification message={errorMessage}/>
      <SearchFilter newSearch={newSearch} handleFilterName={handleFilterName}/>
      <h3>add a new</h3>
      <PersonForm addPerson={addPerson} newName={newName} handleAddName={handleAddName} newNumber={newNumber} handleAddNumber={handleAddNumber}/>
      <h3>Numbers</h3>
      <ul>
      <RenderPeople persons={persons} newSearch={newSearch} clickDelete={clickDelete} setPersons={setPersons}/>
      </ul>
    </div>
  )
}

export default App
