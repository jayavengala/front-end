import React from 'react';
import axios from 'axios';
import Input from './input';
import CardList from './cardlist';



class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            characters: [],
            name: '',
        }
    }
    componentDidMount() {
        axios.get('https://thronesapi.com/api/v2/Characters').then(resp => {

            this.setState({
                characters: resp.data
            })
        });
    }

    setName = (e) => {
        this.setState({
            name: e.target.value
        })

    }

    render() {
        const { characters, name } = this.state;
        const filteredCharacters = characters.filter((character) =>
            (character.firstName.toLowerCase() + ' ' + character.lastName.toLowerCase()).includes(name.toLowerCase()))

        return (
            <React.Fragment>
                <Input placeholder="Type the name" handleChange={this.setName} />
                <CardList results={filteredCharacters} />
            </React.Fragment>
        )
    }
}

export default Main;