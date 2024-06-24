
import PropTypes from 'prop-types'

// const Usergreeting = (props) => {
//  if(props.isLoggedIn){
//      return <h2>Welcome to home page {props.username}</h2>
// }
// else {
//     return <h2> Please log in to continue</h2>
// }

// }

// export default Usergreeting;



const Usergreeting = (props) => {

    const welcomeMessage = <h2 className='welcome-message'>Welcome to home page {props.username}</h2>

    const loginPrompt = <h2 className='login-prompt'>Please log in to continue</h2>
//  return (props.isLoggedIn ? <h2 className='welcome-message'>Welcome to home page {props.username}</h2> : <h2 className='login-prompt'>Please log in to continue</h2>)


    return (props.isLoggedIn ? welcomeMessage : loginPrompt)
}

Usergreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

Usergreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}
export default Usergreeting;
