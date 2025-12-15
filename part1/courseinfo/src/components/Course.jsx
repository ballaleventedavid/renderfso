function Header(props) {
    return (
      <>
      <h1>{props.course}</h1>
      </>
    )
  }
  
  const Content = ({parts}) => {
    return(
      <>
      {parts.map(part =>
      <Part key={part.id}
      part = {part}
      />)}
      </>
        
      
    )
  
  }
  
  function Part({part}) {
    return (
      <p>{part.name} {part.exercises}</p>
    )
  }
  
  function Total({parts}) {
    const sum = parts.reduce((next, part) => next + part.exercises, 0)
    return (
      <>
      <b>Number of exercises {sum}</b>
      </>
      
    )
  }

const Course = ({course}) => {
    return (
      <div>
        <Header
        course = {course.name}
        />
        <Content
        parts = {course.parts}
        />
        <Total
        parts = {course.parts}
        />
      </div>
    )
  }

export default Course