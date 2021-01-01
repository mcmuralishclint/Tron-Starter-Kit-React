import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

class About extends Component {

  render() {
    return (
      <div className="container-fluid mt-5">
              <h1>About Us</h1>
            <p>Our Tron dice game is provably-fair, has a low 8.5% house edge and no sign-ups or deposits.</p>
            <p>Tron Droll is an Tron smart contract for placing bets on our provably-fair dice game using Trx with no deposits or sign-ups. Each dice roll is provably random and cryptographically secure thanks to the nature of the Tron blockchain.</p>
      </div>
    );
  }
}

export default About;