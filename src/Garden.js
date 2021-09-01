import React from 'react'
import "./Garden.css"

class Garden extends React.Component {
    constructor(props) {
        super(props)
        this.state = { garden: props.garden}
    }

    // componentDidUpdate() {
    //     console.log("nb of emojis", this.getNbOfEmojis())
    // }

    getNbOfEmojis = () => {
        let nbOfEmojis = this.state.garden.filter( (elem) => elem.emoji !== "")
        return nbOfEmojis.length
    }

    addPlant = () => {
        this.growGarden()
        if (this.getNbOfEmojis() < 25) {
            let newGarden = [...this.state.garden]
            newGarden.find(elem => elem.emoji === "").emoji = "🌱";
            this.setState({ garden: newGarden })
        }
    }

    growGarden = () => {
        let newGarden = [...this.state.garden];
        newGarden.map((elem) => {
            if(elem.emoji === "🌱") return elem.emoji = "🌿"
            if(elem.emoji === "🌿") return elem.emoji = "🌳"
            else return elem.emoji
        })
        this.setState({ garden: newGarden })
        if (this.getNbOfEmojis() > 0) {
            setTimeout(() => {
                this.growGarden()
            }, 2000);
        }
    }

    deleteEmoji = (id) => {
        let newGarden = [...this.state.garden]
        newGarden[id].emoji = ''
        this.setState({ garden: newGarden, count: this.state.count - 1 })
        //this.setState({ count: this.state.count - 1 })
    }

    render() {
        let ligne = this.state.garden.map((cell, index) => {
            return(
                <div className="cell" key={cell.id} onClick={() => this.deleteEmoji(cell.id)}>
                    {cell.emoji}
                </div>)
            })
            return (
                <>
                <div className="grid-container">
                    {ligne}
                </div>
                <div className="btn-container">
                    <button id="btn-add-plant" type="submit" onClick={this.addPlant}>Plant an Emoji</button>
                </div>
                </>
            )
    }
}

export default Garden;