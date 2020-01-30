import React from 'react'
import axios from 'axios'
import Card from './Card'

class Players extends React.Component {
    state = {
        players: []
    }


    componentDidMount() {
        axios
            .get('http://localhost:5000/api/players')
            .then(res => {
                this.setState({
                    players: res.data
                })
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }


    render() {
         return (
             <div className="flexy">
                 {this.state.players.map(player => (
                     <Card key={player.id} player={player}/>
                 ))}        
             </div>
         )
         
    }

}

export default Players

