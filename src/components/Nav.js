import React, { Component } from 'react'
import { FaAlignRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

export default class Nav extends Component {

    state={
        isExpand:false
    }

    handle_NavExpand = ()=>{
        this.setState((prevState,props)=>({ // note the format setState(()=>({}))
            isExpand: !prevState.isExpand
        }))
    }

    render() {
        return (
            <>
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/" ><img src={logo} alt="Bradford Inn"/></Link>
                        <button 
                            type="button" 
                            className="nav-btn"
                            onClick={this.handle_NavExpand}>
                                <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul 
                        className={this.state.isExpand?"nav-links show-nav":"nav-links"}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/suites">Suites</Link></li>
                    </ul>
                </div>
            </>
        )
    }
}
