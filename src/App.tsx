import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import ReactCountryFlag from 'react-country-flag';
import { Button, Modal } from 'react-bootstrap';

import Header from 'Components/Header';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <Route exact path='/' component={Header} />
          </div>
        </Router>
        <div className='mb-2'>
          <Button variant='primary' size='lg'>
            Large button
          </Button>{' '}
          <Button variant='secondary' size='lg'>
            Large button
          </Button>
        </div>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant='secondary'>Close</Button>
            <Button variant='primary'>Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
        <ReactCountryFlag countryCode='US' />

        <ReactCountryFlag
          className='emojiFlag'
          countryCode='US'
          style={{
            fontSize: '2em',
            lineHeight: '2em',
          }}
          aria-label='United States'
        />

        <ReactCountryFlag countryCode='US' svg />

        <ReactCountryFlag
          countryCode='US'
          svg
          style={{
            width: '2em',
            height: '2em',
          }}
          title='US'
        />
      </div>
    );
  }
}
