import * as React from "react";

import { themes } from "@themes";
import { ThemesTypes } from "@lib/types/ThemesTypes";
import { SpotifySongResponse } from "@lib/types/SpotifySongResponse";
import { SpotifyArtistResponse } from "@lib/types/SpotifyArtistResponse";
import { urlBase } from "@lib/assets/urlBase";

export const SpotifyImage = async (
  song: SpotifySongResponse,
  artist: SpotifyArtistResponse,
  query: {
    bg?: string;
    text?: string;
    desc?: string;
    theme?: string;
    rounded?: string;
  }
) => {
  const defaultThemes: ThemesTypes = themes;

  function escapeHtml(unsafe: string) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xhtml="http://www.w3.org/1999/xhtml"
      width="410px" height="218px"
      viewBox="0 0 410 218"
      style="border-radius: ${
        query.rounded?.toLowerCase() === "true" ? "7px" : "0px"
      }"
    >
      <foreignObject x="0" y="0" width="410" height="218">
      <div  xmlns="http://www.w3.org/1999/xhtml" style="
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        background-color: ${
                          !query.theme
                            ? query.bg
                              ? `#${query.bg}`
                              : "#fff"
                            : defaultThemes[query.theme].bg
                        };
                        background-image: url('data:image/png;base64,${await urlBase(
                          artist.images[0].url
                        )}');
                        background-position: center;
                        background-size: cover;
                        filter: blur(3px);
                        -webkit-filter: blur(3px);
                    "/>
                    <div  xmlns="http://www.w3.org/1999/xhtml" style="
                        position: relative;
                        z-index: 1;
                        width: 100%;
                        height: 100%;
                        display: grid;
                        place-content: center
                        ">
                        <div style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
                            <div style="margin-right: 1.625rem; width: 75px; height: 75px; background-image: url('data:image/png;base64,${await urlBase(
                              song.album.images[0].url
                            )}'); background-position: center; background-size: contain; border-radius: 7px" />
                            <div style="flex-direction: column; justify-content: center; align-items: center;">
                            <h3 style="font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; font-size: ${
          song.name.length >= 25 ? "12px" : "18px"
        }; font-weight: bold; color: ${
    !query.theme
      ? query.text
        ? `#${query.text}`
        : "#fff"
      : defaultThemes[query.theme].text
  }">${
    song.name.length > 39
      ? `${escapeHtml(song.name.substring(39))}...`
      : escapeHtml(song.name)
  }</h3>
                            <p style="font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; font-size: 14px; color: ${
          !query.theme
            ? query.desc
              ? `#${query.desc}`
              : "#DADADA"
            : defaultThemes[query.theme].description
        }">${
    song.artists.length > 3
      ? "Various Artists"
      : song.artists.length === 3
      ? `${escapeHtml(
          song.artists[0].name.length >= 14
            ? `${song.artists[0].name.substring(0, 14)}-`
            : song.artists[0].name
        )}, ${escapeHtml(
          song.artists[1].name.length >= 14
            ? `${song.artists[1].name.substring(0, 14)}-`
            : song.artists[1].name
        )}, ${escapeHtml(
          song.artists[2].name.length >= 14
            ? `${song.artists[2].name.substring(0, 14)}..`
            : song.artists[2].name
        )}.`
      : song.artists.length === 2
      ? `${escapeHtml(
          song.artists[0].name.length >= 21
            ? `${song.artists[0].name.substring(0, 21)}-`
            : song.artists[0].name
        )}, ${escapeHtml(
          song.artists[1].name.length >= 21
            ? `${song.artists[1].name.substring(0, 21)}..`
            : song.artists[1].name
        )}.`
      : `${escapeHtml(
          song.artists[0].name.length >= 43
            ? `${song.artists[0].name.substring(0, 43)}..`
            : song.artists[0].name
        )}.`
  }</p>
                            </div>
                        </div>
                    </div>
      </foreignObject>
    </svg>
  `;
};
