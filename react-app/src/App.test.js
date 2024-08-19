import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// render - used to render a component and create a virtual DOM for testing - returns an object containing utility methods to query and interact with the DOM
// screen - implicitly provides access to that virtual DOM allowing you to query and make assertions on the elements rendered by 'render'
