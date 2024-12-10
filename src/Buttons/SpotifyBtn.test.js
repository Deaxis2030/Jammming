import "regenerator-runtime/runtime";
import React from "react";
import SpotifyBtn from "./SpotifyBtn";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Playlist from "../TrackInfo/Playlist";


it ("Should be clicked", () => {
    render(<SpotifyBtn />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    expect(button).toBeEnabled();

});

