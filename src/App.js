import React from "react";
import "./App.css";
import Garden from "./Garden";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { farm: [] };
    this.SIZE_GARDEN = 25;
    //garden: Array.from(Array(25).keys())
  }

  generateGarden = (size) => {
    let newGarden = [];
    for (let i = 0; i < size; i++) {
      newGarden.push({ id: i, emoji: "" });
    }
    return newGarden;
  };

  addGarden = (size) => {
    let newFarm = [...this.state.farm];
    newFarm.push(this.generateGarden(size));
    this.setState({ farm: newFarm });
  };

  componentDidMount() {
    //this.setState({ garden: this.generateGarden(size_garden)})
    this.addGarden(this.SIZE_GARDEN);
    //this.setState( {} )
  }

  componentDidUpdate() {
    console.log("farm", this.state.farm);
  }

  render() {
    return (
      <>
        <h1>Emojis Garden</h1>

        <div className="btn-container">
          <button
            onClick={() => this.addGarden(this.SIZE_GARDEN)}
            id="btn-add-garden"
            type="submit"
          >
            Add a garden
          </button>
        </div>

        {this.state.farm.map((elem) => {
          return (
            <div className="gdn-container">
              <Garden garden={elem} />
            </div>
          );
        })}
      </>
    );
  }
}

export default App;
