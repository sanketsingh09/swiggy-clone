import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sanketsingh09");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    console.log(this.props.name + "Child Render");

    const { name, location, avatar_url, bio } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} width={100} height={100} />
        <h2>
          Name: <u>{name}</u>
        </h2>
        <p>
          <b>Bio:</b> {bio}
        </p>
        <h4>Location: {location}</h4>
        <h4>Contact: @sanketsingh09</h4>
      </div>
    );
  }
}

export default UserClass;
