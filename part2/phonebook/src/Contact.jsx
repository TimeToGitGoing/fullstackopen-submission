const Contact = ({ contact, clickDelete }) => {
    return (
        <li>{contact.name} {contact.number} <button onClick={() => clickDelete(contact)}>delete</button></li>
    )
}

export default Contact