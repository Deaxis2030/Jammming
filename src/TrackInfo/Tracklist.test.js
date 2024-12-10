import "regenerator-runtime/runtime";
import React from "react";
import Tracklist from "./Tracklist";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


it ("Should show list of songs", async () => {
    const track1 = { name: "Song 1", artists: ["Artist 1"], album: { name: "Album 1" }, id: "111" };
    
    render(<Tracklist song={track1} addSong={()=>{}} />);
    
    const value1 = await screen.findByText(/Song 1/i);
   
    expect(value1).toBeInTheDocument();

});