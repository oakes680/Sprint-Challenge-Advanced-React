import React from 'react'
import ReactCardFlip from 'react-card-flip';
import BackOfCard from './BackOfCard'
import Front from './Front'
import Players from './Players'


class CardFlip extends React.Component {
    constructor() {
      super();
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
   
    render() {
      return (
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
          <div>
              <Front/>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
   
          <div>
            <BackOfCard/>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </ReactCardFlip>
      )
    }
  }

  export default CardFlip