import React from 'react';
import ReactDOM from 'react-dom';

class Feed extends React.Component {
  render() {
    return (
      <div>
        <div classNameName="fb-status-update-entry panel panel-default">
        <div classNameName="panel-body">
          <ul classNameName="nav nav-pills">
            <li role="presentation" classNameName="active">
              <a href="#"><span classNameName="glyphicon glyphicon-pencil"></span> <strong>Update Status</strong></a>
            </li>
            <li role="presentation">
              <a href="#"><span classNameName="glyphicon glyphicon-picture"></span> <strong>Add Photos/Video</strong></a>
            </li>
            <li role="presentation">
              <a href="#"><span classNameName="glyphicon glyphicon-th"></span> <strong>Create Photo Album</strong></a>
            </li>
          </ul>
          <div classNameName="media">
            <div classNameName="media-left media-top">
              PIC
            </div>
            <div classNameName="media-body">
              <div classNameName="form-group">
                <textarea classNameName="form-control" rows="2" placeholder="What's on your mind?"></textarea>
              </div>
            </div>
          </div>
          <div classNameName="row">
            <div classNameName="col-md-6">
              <div classNameName="btn-group" role="group">
                <button type="button" classNameName="btn btn-default">
                  <span classNameName="glyphicon glyphicon-camera"></span>
                </button>
                <button type="button" classNameName="btn btn-default">
                  <span classNameName="glyphicon glyphicon-user"></span>
                </button>
                <button type="button" classNameName="btn btn-default">
                  ☺
                </button>
                <button type="button" classNameName="btn btn-default">
                  <span classNameName="glyphicon glyphicon-pushpin"></span>
                </button>
              </div>
            </div>
            <div classNameName="col-md-6">
              <div classNameName="pull-right">
                <button type="button" classNameName="btn btn-default">
                  <span classNameName="glyphicon glyphicon-user"></span> Friends <span classNameName="caret"></span>
                </button>
                <button type="button" classNameName="btn btn-default">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fb-status-update panel panel-default">
        <div className="panel-body">
          <div className="row">
            <div className="col-md-10">
              <div className="media">
                <div className="media-left media-top">
                  PIC
                </div>
                <div className="media-body">
                  <a href="#">Someone</a>
                  <br /> Yesterday at 3:48pm · Austin, TX · <span className="glyphicon glyphicon-user"></span>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <span className="caret pull-right"></span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              ugh.
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-12">
              <ul className="list-inline">
                <li>
                <a href="#"><span className="glyphicon glyphicon-thumbs-up"></span> Like</a>
                </li>
                <li>
                <a href="#"><span className="glyphicon glyphicon-comment"></span> Comment</a>
                </li>
                <li>
                <a href="#"><span className="glyphicon glyphicon-share-alt"></span> Share</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="panel-footer">
          <div className="row">
            <div className="col-md-12">
              <a href="#">13 people</a> like this
            </div>
          </div>
          <hr />
          <ul className="media-list">
            <li className="media">
              <div className="media-left media-top">
                PIC
              </div>
              <div className="media-body">
                <a href="#">Someone Else</a> hope everything is ok!
                <br /><a href="#">Like</a> · <a href="#">Reply</a> · 20 hrs
              </div>
            </li>
            <li className="media">
              <div className="media-left media-top">
                PIC
              </div>
              <div className="media-body">
                <a href="#">Another Person</a> sending hugs your way
                <br /><a href="#">Like</a> · <a href="#">Reply</a> · 20 hrs
              </div>
            </li>
            <li className="media">
              <div className="media-left media-top">
                PIC
              </div>
              <div className="media-body">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Write a comment..." />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                      <span className="glyphicon glyphicon-camera"></span>
                    </button>
                    <button className="btn btn-default" type="button">
                      ☺
                    </button>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Feed />,
  document.getElementById('fb-feed')
);

// import React from 'react';
// import ReactDOM from 'react-dom';
//
// classNameName UghWorld extends React.Component {
//   render() {
//     return (
//       <p>ugh, world</p>
//     );
//   }
// }
//
// ReactDOM.render(
//   <UghWorld />,
//   document.getElementById('fb-feed')
// );
