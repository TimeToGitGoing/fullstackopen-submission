const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p><b>Total of {sum} exercises</b></p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    <Part
      part={parts[0]} 
    />
    <Part
      part={parts[1]} 
    />
    <Part
      part={parts[2]} 
    />      
  </>

const Course = ({ course, sum }) => {
  console.log(sum)
  return (
    <>
      <Header course={course.name}/>
      <Part part={course.parts[0]}/>
      <Part part={course.parts[1]}/>
      <Part part={course.parts[2]}/>
      <Part part={course.parts[3]}/>
      <Total sum={sum} />
    </>
  )
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
  const individualParts = course.parts
  const sumOfExercises = individualParts.reduce(function(sum, parts) {
    return sum + parts.exercises
  }, 0)

  return <Course course={course} sum={sumOfExercises}/>
}

export default App