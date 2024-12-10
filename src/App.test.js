import "regenerator-runtime/runtime";
import React from "react";
import App from "./App";
import { getByText, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";


it ("Should Test App functions", async ()=> {

   //Setup mock data
  const mockProfileData = {
    id: "user123",
    name: "Test User",
  };

  const mockSearchResults = {
    tracks: {
      items: [
        {
          id: "12345",
          name: "Leave Your Mark",
          artists: [{ name: "Nyx" }, { name: "Symphony" }],
          album: { name: "Aim" },
        },
        {
          id: "67890",
          name: "Something Good!",
          artists: [{ name: "Nyx" }],
          album: { name: "Reach For The Stars" },
        },
      ],
    },
  };

  global.fetch = jest.fn((url) => {
    if (url.includes('/me')) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockProfileData),
      });
    } else if (url.includes('/search')) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockSearchResults),
      });
    } else if (url.includes('/playlists')) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ success: true }),
      });
     }else if (url.includes('/tracks')) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ success: true }),
      });
    }
    return Promise.reject(new Error('Not Found'));
  });

  window.location.hash = '#access_token=mockAccessToken&expires_in=3600';
  //end of mock data
  
    render(<App/>);

    const input1 = screen.getByRole("textbox", {name:/search/i});
    userEvent.type(input1, "Nyx");

    const button1 = screen.getByRole("button", {name:/search-button/i});
    userEvent.click(button1);

    const nameOfSong = await screen.findByRole("heading", {name:/Leave Your Mark/i});
    expect(nameOfSong).toBeInTheDocument();

    const input2 = screen.getByRole("textbox", {name:/Name-of-Playlist/i});
    userEvent.type(input2, "Testing 1-2-3");
    const value = screen.getByDisplayValue("Testing 1-2-3");
    expect(value).toBeInTheDocument();
    
    
    const addButton = await screen.findAllByRole("button", { name: /Add-Song/i });
    addButton.forEach(button => {
        userEvent.click(button);
    });

    await waitFor(()=> {
      
    const playlist = screen.getByLabelText("Playlist");
    const checking = screen.getAllByRole("heading", {name:/Leave Your Mark/i});
    expect(playlist).toContainElement(checking[1]);
    
    });

    const SpotifyBtn = screen.getByRole("button", {name:/Save-Playlist-Button/i});
    userEvent.click(SpotifyBtn);

    await waitFor(()=> {
      
      const playlist = screen.getByLabelText("Playlist");
      const checking = screen.getAllByRole("heading", {name:/Leave Your Mark/i});
      expect(checking).toHaveLength(1);
      
      });
  });