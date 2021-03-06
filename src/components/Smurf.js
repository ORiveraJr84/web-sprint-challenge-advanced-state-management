import React from "react";

class Smurf extends React.Component {
  render() {
    const { smurf } = this.props;
    console.log("this.props from Smurf component", smurf);

    return (
      <div data-testid="smurf" className="smurfCard">
        <header>
          <h3 className="card-title">{smurf.name}</h3>
          <p>
            {smurf.nickname} &#8226; {smurf.position}
          </p>
        </header>
        <p>{smurf.description}</p>
      </div>
    );
  }
}

export default Smurf;

//Task List:
//1. Access smurf to be displayed through props. ✔️
//2. Display the name, position, nickname and description of the provided smurf as needed. ✔️
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/) ✔️
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading. ✔️
