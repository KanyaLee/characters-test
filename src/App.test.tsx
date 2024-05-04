import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";



import { describe, expect, test } from "vitest";
import { getCharacters } from "./api/get-characters";

describe("<App />", () => {
  describe("loading character", () => {
    test('renders the title "Characters"', async () => {
      render(<App/>);

    const element = screen.getByText(/Character/i);

    expect(element).not.toBeNull();

    });

    test("renders a list of 10 characters", async () => {
      render(<App />);
      await screen.findAllByText(/Character/i); 
      expect(screen.getAllByText(/Character/i).length).toBe(10);
    });
  });
  describe("loading more characters", () => {
    test('has a "Load More Characters" button', async () => {
      render(<App />);
      const button = screen.getByText(/load more characters/i);
      expect(button).toBeDefined();

    });
    test("clicking load more gets 10 more characters", async () => {
      render(<App />);
      const button = screen.getByText(/load more characters/i);

      await screen.findAllByText(/Character/i);

      fireEvent.click(button);

      expect(getCharacters).toHaveBeenCalledTimes(2);
      expect(getCharacters).toHaveBeenCalledWith(2); 

    });
    test("clicking load more increases the page number", async () => {
      render(<App />);
      const button = screen.getByText(/load more characters/i);
      fireEvent.click(button);
      expect(screen.getByText(/next page: 2/i)).toBeDefined();
    });
  });
});
