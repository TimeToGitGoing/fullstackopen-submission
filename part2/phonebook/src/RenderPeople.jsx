import Contact from "./Contact"

const RenderPeople = ({persons, newSearch}) => {
  return (
    persons
      .filter(person => person.name.toLowerCase().includes(newSearch))
      .map(person => <Contact key={person.id} contact={person}/>)
  )
}

export default RenderPeople