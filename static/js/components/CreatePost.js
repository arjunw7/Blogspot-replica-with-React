import React, { PropTypes } from 'react'

class CreatePost extends React.Component {
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
                      <li><a href="/home">Home</a></li>
                      <li><a href="/createPost">New Post</a></li>
                      <li><a href="/">Logout</a></li>
                    </ul>
                  </div>
                </nav>
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <center><h2>New Post</h2></center>
                          <form className="form-horizontal" >
                            <div className="form-group">
                              <label className="control-label col-sm-2">Title:</label>
                              <div className="col-sm-10">
                                <input type="text" className="form-control" id="title" placeholder="Enter title" name="title"/>
                              </div>
                            </div>
                            <div className="form-group">
                              <label className="control-label col-sm-2">Password:</label>
                              <div className="col-sm-10">          
                                <textarea className="form-control" id="pwd" placeholder="Enter password" name="pwd"></textarea>
                              </div>
                            </div>
                            <div className="form-group">
                              <label className="control-label col-sm-2">Attachments:</label>
                              <div className="col-sm-10">          
                                <input type="file" className="form-control" id="files" placeholder="Enter title" name="files"/>
                              </div>
                            </div>
                            <div class="form-group">        
                              <div className="col-sm-offset-2 col-sm-10">
                                <button type="submit" className="btn btn-default">Submit</button>
                              </div>
                            </div>
                          </form>
                    </div>
                  </div>
                </div>
    
            
            </div>
        )
    }
}

export default CreatePost;