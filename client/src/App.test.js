import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent, cleanup } from '@testing-library/react';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('this should say World Cup', () => {
    const { getAllByText } = render(<App />);
    getAllByText(/world/i)
})

test('this should say World Cup', () => {
  const { getAllByText } = render(<App />);
  getAllByText(/cup/i)
})

test('this should say World Cup', () => {
  const { getAllByText } = render(<App />);
  getAllByText(/world cup/i)
})




