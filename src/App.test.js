import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App';

describe("<App />", () => {
  it('renders learn react link', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    // debugging
    screen.debug() // gives the html output of the current DOM
    screen.logTestingPlaygroundURL() // provides an url in the test suite that can be copied and pasted in the browser, displays the html output and applicable queries
    const homeElement = screen.getByText(/home/i)
    expect(homeElement).toBeInTheDocument()
  });
})
















// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
