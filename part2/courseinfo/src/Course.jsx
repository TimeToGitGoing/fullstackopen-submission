const Header = ({ name }) => <h2>{name}</h2>

const Part = ({ part }) => 
    <p>
        {part.name} {part.exercises}
    </p>

const Total = ({ sum }) => <p><b>Total of {sum} exercises</b></p>

const Course = ({ course, sum }) => {
const sumOfExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0)

    return (
        <>
        <Header name={course.name}/>
        {course.parts.map(part => <Part key={part.id} part={part}/>)}
        <Total sum={sumOfExercises} />
        </>
    )
}

export default Course