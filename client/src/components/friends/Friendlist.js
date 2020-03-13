import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';
class FriendList extends Component {

   constructor(){
    super();
    this.state={
      friendlist:[],
      errors:{},

    }
    axios.get('/friend/list')
          .then(res=>this.setState({friendlist:res.data}));

  }

  onDeleteClick(id) {
    let newid={
      id:id
    };
    axios.post('/friend/delete',newid)
          .then(res=>this.setState({errors:res.data}))
          .catch(err=> this.setState({errors:err.response.data}));
           window.location.reload(false);
  }

  render() {

    const { errors, friendlist} = this.state;

    let list=[];


    if(friendlist.length > 0){
       list = friendlist.map(fnd => (
      <tr key={fnd._id}>
        <td>{fnd.name}</td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, fnd._id)}
            className="btn btn-danger"
          >
            Delete
          </button>

        </td>
      </tr>
    ));
  }

    return (
      <div>
        <h4 className="mb-4">FriendList Credentials</h4>

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th />
            </tr>
            {list}
          </thead>
        </table>
      </div>
    );
  }
}



export default FriendList;
