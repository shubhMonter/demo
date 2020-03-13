import React ,{Component} from 'react';
import classnames from 'classnames';
import axios from 'axios';
class Addfriend extends Component {
  constructor(){
    super();
    this.state={
      name:"",
      errors:{},
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e){
    this.setState({[e.target.name]:e.target.value});
  }
  onSubmit(e){
    e.preventDefault();
    const addFriend={
      name:this.state.name
    };
    axios.post('/friend/add',addFriend)
          .then(res=>this.setState({errors:res.data}))
          .catch(err=> this.setState({errors:err.response.data}));
          this.setState({name:''});
  }
  render(){
    const {errors} = this.state;
    return(
      <div className="add_friend">
        <div className="container">
          <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center"> Add Friend </h1>

                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                    type="text"
                    className={classnames("form-control form-control-m",{'is-invalid':errors.name,'is-valid':errors.msg})}
                    placeholder="name"
                    value={this.state.name}
                    name="name"
                    onChange={this.onChange}
                    />
                    {errors.name && (<div className= "invalid-feedback">{errors.name}</div>)}
                    {errors.msg && (<div className= "valid-feedback">{errors.msg}</div>)}
                    <input
                    type="submit"
                    value="Add"
                    className="btn btn-info btn-block mt-4"
                    />

                  </div>
                </form>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Addfriend;
