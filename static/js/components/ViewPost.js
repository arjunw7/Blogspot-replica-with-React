import React, { PropTypes } from 'react'

class ViewPost extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( 
            <div> 
                <nav className="navbar navbar-inverse">
                  <div className="container-fluid">
                    <div className="navbar-header">
                      <a className="navbar-brand" href="#">MyTravelBlog</a>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">New Post</a></li>
                      <li><a href="/signup"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    </ul>
                  </div>
                </nav>
                <h2>This is a ViewPost component</h2>
                { this.props.children } 
            </div>
        )
    }
}

export default ViewPost;