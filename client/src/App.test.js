import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("render title", () => {
  render(<App />);
  const appTitle = screen.getByText("BEBIDAS SA");
  expect(appTitle).toBeInTheDocument();
});

test("render logo", () => {
  render(<App />);
  const logo = screen.getByAltText("logo");
  expect(logo).toBeInTheDocument();
});

test("render search input", () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText("search");
  expect(searchInput).toBeInTheDocument();
});

test("render radio inputs", () => {
  render(<App />);
  const radioName = screen.getByLabelText("por nome");
  const radioLetter = screen.getByLabelText("por letra");
  expect(radioName).toBeInTheDocument();
  expect(radioLetter).toBeInTheDocument();
});

test("choose search by name", () => {
  render(<App />);
  const radioName = screen.getByLabelText("por nome");
  const radioLetter = screen.getByLabelText("por letra");
  fireEvent.click(radioName);
  expect(radioName).toBeChecked();
  expect(radioLetter).not.toBeChecked();
});

test("choose search by letter", () => {
  render(<App />);
  const radioName = screen.getByLabelText("por nome");
  const radioLetter = screen.getByLabelText("por letra");
  fireEvent.click(radioLetter);
  expect(radioLetter).toBeChecked();
  expect(radioName).not.toBeChecked();
});

test("search input with value", () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText("search");
  fireEvent.change(searchInput, { target: { value: "Margerita" } });
  expect(searchInput.value).toBe("Margerita");
});

test("search input with value", () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText("search");
  fireEvent.change(searchInput, { target: { value: "Margerita" } });
  fireEvent.change(searchInput, { target: { value: "" } })
  expect(searchInput.value).toBe("");
});

test("render favorite recipes button", () => {
  render(<App />);
  const favoriteButton = screen.getByText("Receitas Favoritas");
  expect(favoriteButton).toBeInTheDocument();
});

test("render back button", () => {
  render(<App />);
  const favoriteButton = screen.getByText("Receitas Favoritas");
  fireEvent.click(favoriteButton);
  const backButton = screen.getByText("Voltar");
  expect(backButton).toBeInTheDocument();
});
