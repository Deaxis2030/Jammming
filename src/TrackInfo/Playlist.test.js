import "regenerator-runtime/runtime";
import React from "react";
import Playlist from "./Playlist";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";



it ("Should show name of Playlist", async ()=> {
    
  render(<Playlist songList={[]} removeSong={()=>{}} handleChange={()=>{}} />);

  const input = screen.getByRole("textbox", {name:/Name-of-Playlist/i});
  userEvent.type(input, "Hello World!");
  const value = screen.getByDisplayValue("Hello World!");
  expect(value).toBeInTheDocument();

});

it ("shoulld display list of songs", async ()=> {

  const list = [
    { name: "Song 1", artists: [{name:"Artist 1"}], album: { name: "Album 1" }, id: "111" },
    { name: "Song 2", artists: [{name:"Artist 2"}], album: { name: "Album 2" }, id: "222" },
    { name: "Song 3", artists: [{name:"Artist 3"}], album: { name: "Album 3" }, id: "333" },
    { name: "Song 4", artists: [{name:"Artist 4"}], album: { name: "Album 4" }, id: "444" },
    { name: "Song 5", artists: [{name:"Artist 5"}, {name: "Artist 6"}], album: { name: "Album 5" }, id: "555" }
  ];

  render(<Playlist songList={list} removeSong={()=>{}} handleChange={()=>{}} />);

  
  const value1 = await screen.findByText(/Song 1/i);
  const value2 = await screen.findByText(/Album 3/i);
  const value3 = await screen.findByText(/Artist 5/i);
  expect(value1).toBeInTheDocument();
  expect(value2).toBeInTheDocument();
  expect(value3).toBeInTheDocument();
});


it("remove button should work", async () => {
  const list = [
    { name: "Song 1", artists: [{ name: "Artist 1" }], album: { name: "Album 1" }, id: "111" },
  ];

  const removeSongMock = jest.fn();

  render(<Playlist songList={list} removeSong={removeSongMock} handleChange={() => {}} />);

  const value1 = await screen.findByText(/Song 1/i);
  expect(value1).toBeInTheDocument();

  const button = screen.getByRole("button", { name: /Remove-Song/i });
  userEvent.click(button);

  expect(button).toBeEnabled();
  expect(removeSongMock).toHaveBeenCalledWith("111");
});
