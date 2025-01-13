import Contact from "./Contact"

const RenderPeople = ({persons, newSearch, clickDelete}) => {
  return (
    persons
      .filter(person => person.name.toLowerCase().includes(newSearch))
      .map(person => <Contact key={person.name} contact={person} clickDelete={clickDelete} persons={persons}/>)
  )
}

export default RenderPeople