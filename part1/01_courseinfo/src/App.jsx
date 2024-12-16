const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part1} {props.exercises1}
      {props.part2} {props.exercises2}
      {props.part3} {props.exercises3}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part1={props.parts[0].name} exercises1={props.parts[0].exercises}/>
      <Part part2={props.parts[1].name} exercises2={props.parts[1].exercises}/>
      <Part part3={props.parts[2].name} exercises3={props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return <p>{props.parts[3].name} {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    },
    {
      name: 'Number of exercises '
    }
  ]
  
  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App