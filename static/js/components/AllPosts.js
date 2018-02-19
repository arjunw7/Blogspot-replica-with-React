import React, { PropTypes } from 'react'

class AllPosts extends React.Component {
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
                            <li><a href="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div id="postlist">
                                <div className="panel">
                                    <div className="panel-heading">
                                        <div className="text-center">
                                            <div className="row">
                                                <div className="col-sm-9">
                                                    <h3 className="pull-left">Welcome</h3>
                                                </div>
                                                <div className="col-sm-3">
                                                    <h4 className="pull-right">
                                                        <small><em>2014-07-30<br/>18:30:00</em></small>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel-body">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                        in... <a href="#">Read more</a>
                                    </div>

                                    <div className="panel-footer">
                                        <span className="label label-default">Welcome</span> <span className="label label-default">Updates</span> <span className="label label-default">July</span>
                                    </div>
                                </div>

                                <div className="panel">
                                    <div className="panel-heading">
                                        <div className="text-center">
                                            <div className="row">
                                                <div className="col-sm-9">
                                                    <h3 className="pull-left">Post With image</h3>
                                                </div>
                                                <div className="col-sm-3">
                                                    <h4 className="pull-right">
                                                        <small><em>2014-07-30 18:30:00</em></small>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel-body">
                                        <a href="#" className="thumbnail">
                                            <img alt="Image" src="http://i.imgur.com/tAHVmXi.jpg" />
                                        </a>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation... <a href="#">Read more</a>
                                    </div>

                                    <div className="panel-footer">
                                        <span className="label label-default">Image</span> <span className="label label-default">Updates</span> <span className="label label-default">July</span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center"><a href="#" id="loadmore" className="btn btn-primary">Older Posts...</a></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AllPosts;