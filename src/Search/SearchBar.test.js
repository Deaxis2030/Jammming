import "regenerator-runtime/runtime";
import React from "react";
import SearchBar from "./SearchBar";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";



it ("search button should be clicked", () => {
    render(<SearchBar handleSubmit={()=>{}} handleTextChange={()=>{}} text={""} />);

    const button = screen.getByRole("button", {name:/search-button/i});
    userEvent.click(button);

    expect(button).toBeEnabled();

})

it ("Should show search querry after button is clicked", async ()=> {
    
    render(<SearchBar handleSubmit={()=>{}} handleTextChange={()=>{}} />);

    const input = screen.getByRole("textbox", {name:/search/i});
    userEvent.type(input, "Hello World!");

    const button = screen.getByRole("button", {name:/search-button/i});
    userEvent.click(button);

    const value = screen.getByDisplayValue("Hello World!");
    expect(value).toBeInTheDocument();

});
