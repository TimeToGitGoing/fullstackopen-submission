const Header = ({ name }) => <h1>{name}</h1>

const Total = ({ sum }) => <p><b>Total of {sum} exercises</b></p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Course = ({ course, sum }) => {
  return (
    <>
      <Header name={course.name}/>
      {course.parts.map(part => <Part key={part.id} part={part}/>)}
      <Total sum={sum} />
    </>
  )
}

const calculateSumOfExercises = (course) => {
  return course.parts.reduce((sum, part) => sum + part.exercises, 0)
}

const App = (props) => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  const sumOfExercises = calculateSumOfExercises(course)
  return <Course course={course} sum={sumOfExercises}/>
}

export default App