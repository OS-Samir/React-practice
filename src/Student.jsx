// props = read-only properties that are shared between components.
// A parent component can send data to a child component

//<Component key= value />


import propTypes from 'prop-types'
const Student = (props) => {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>


    </div>
  )
}
Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool
}
Student.defaultProps = {
    name: "guest",
    age: 0,
    isStudent: false
}
export default Student
