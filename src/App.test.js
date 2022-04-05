import App from './App.js';
import { render, screen, waitFor } from "@testing-library/react";

test("receives GitHub name from GitHub REST API using jest fetch mock", async () => {
    fetch.mockResponseOnce(JSON.stringify({name: 'coder'}))
    render(<App />)
    const gitHubName = await waitFor(() => screen.getByRole('heading', { level: 2 }))
    expect(gitHubName).toHaveTextContent('name')
  })

  beforeEach(() => {
    // sets everything back to initial state before each test
    fetch.resetMocks();
  })


