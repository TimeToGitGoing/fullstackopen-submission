const PersonForm = ({addPerson, newName, handleAddName, newNumber, handleAddNumber}) => (
    <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleAddName}/></div>
        <div>number: <input value={newNumber} onChange={handleAddNumber}/></div>
        <div><button type="submit">add</button></div>
    </form>
)

export default PersonForm