import React, { PropTypes } from 'react'

class Login extends React.Component {
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
                      <li><a href="/">Home</a></li>
                      <li><a href="/signup"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    </ul>
                  </div>
                </nav>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <center><h3>Login to MyTravelBlog</h3><br/></center>
                          <form className="form-horizontal" >
                            <div className="form-group">
                              <label className="control-label col-sm-2">Email:</label>
                              <div className="col-sm-10">
                                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
                              </div>
                            </div>
                            <div className="form-group">
                              <label className="control-label col-sm-2" >Password:</label>
                              <div className="col-sm-10">          
                                <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd"/>
                              </div>
                            </div>
                            <div className="form-group">        
                              <div className="col-sm-offset-2 col-sm-10">
                                <div className="checkbox">
                                  <label><input type="checkbox" name="remember"/> Remember me</label>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">        
                              <div className="col-sm-offset-2 col-sm-10">
                                <button type="submit" className="btn btn-default">Submit</button>
                              </div>
                            </div>
                          </form>    
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;