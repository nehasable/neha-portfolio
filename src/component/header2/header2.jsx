import React,{Component} from 'react'
import './header2.css'
class Header2 extends Component {
  render() {
    return(
    <div className='header2'>
      <div className='heading'>
        <h1>{this.props.heading}</h1>
        <p>{this.props.text}</p>
      </div>
    </div>
    )
  }
}

export default Header2
