import React, { PropTypes } from 'react'

class Signup extends React.Component {
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
                      <li><a href="/login"><span class="glyphicon glyphicon-user"></span> Login</a></li>
                    </ul>
                  </div>
                </nav>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <center><h3>Signup to MyTravelBlog</h3><br/></center>
                          <form className="form-horizontal" >
                            <div className="form-group">
                              <label className="control-label col-sm-3">Name:</label>
                              <div className="col-sm-9">
                                <input type="text" className="form-control" id="email" placeholder="Enter name" name="email"/>
                              </div>
                            </div>
                            <div className="form-group">
                              <label className="control-label col-sm-3">Email:</label>
                              <div className="col-sm-9">
                                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
                              </div>
                            </div>
                            <div className="form-group">
                              <label className="control-label col-sm-3">Username</label>
                              <div className="col-sm-9">
                                <input type="text" className="form-control" id="email" placeholder="Enter username" name="email"/>
                              </div>
                            </div>
                            <div className="form-group">
                              <label className="control-label col-sm-3" >Password:</label>
                              <div className="col-sm-9">          
                                <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd"/>
                              </div>
                            </div>
                            <div className="form-group">
                              <label className="control-label col-sm-3" >Confirm Password:</label>
                              <div className="col-sm-9">          
                                <input type="password" className="form-control" id="pwd" placeholder="Enter password again" name="pwd"/>
                              </div>
                            </div>
                            <div className="form-group">        
                              <div className="col-sm-offset-3 col-sm-9">
                                <div className="checkbox">
                                  <label><input type="checkbox" name="remember"/> I agree to all the terms and conditions</label>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">        
                              <div className="col-sm-offset-3 col-sm-9">
                                <button type="submit" className="btn btn-default">I am ready</button>
                              </div>
                            </div>
                          </form>    
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;