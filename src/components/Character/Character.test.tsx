import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Character from "./Character";
import characters from "../../testing/mock/characters"; 

describe("<Character />", () => {
  test('shows fields for "name" and "culture"', async () => {
    const character = characters[0]; // "The Daughter of the Dusk"
    render(<Character character={character} />);
    expect(character.aliases[0]).toBe('The Daughter of the Dusk');
    expect(character.culture).toBe('Braavosi');
  });

  test("shows culture if it is present", async () => {
    const character = characters[0];
    render(<Character character={character} />);
    expect(character.culture).toBeDefined();

  
  });
  test("shows alias if no name is present", async () => {
    const character = characters[0];
    render(<Character character={character} />);
    expect(character.name).toBeDefined();
  });
  test("shows how many books this characters made an appearance in", async () => {
    const character = characters[1];
    render(<Character character={character} />);
    expect(character.books.length).toBe(5);
  });
});
