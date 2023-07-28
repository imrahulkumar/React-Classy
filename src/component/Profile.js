import {React, Component}  from 'react';


class ProfileClass extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "Rahul"
        }
        console.log("state ", this.state);
        console.log("Constructor is called");
    }

    componentDidMount() {

        // best place to call the api.
        // because it is called after render

        this.timer = setInterval(() => {
            console.log("Call from timer. Hey i m Rahul.")
        }, 1000)
    }
    componentDidUpdate() {
        console.log("Child componentDidUpdate");
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("Child componentWillUnmount");
    }

     render() {
    console.log("Child render");
    return (
      <div>
        <div>This is Class Component</div>
        <div className="mt-3">Passing Props in class component? this.props</div>
        <div>Form Props : Full Name : {this.props.fullname}</div>
        <div>State : Name : {this.state.name}</div>
        <button
          className="px-2 py-1 bg-green-400"
          onClick={() => {
            this.setState({
              name: "SetState Name triggered",
            });
          }}
        >
        </button>
      </div>
    );
  }
}

export default ProfileClass;