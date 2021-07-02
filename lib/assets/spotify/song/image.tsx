import * as React from "react";
import { extractColors } from "extract-colors";

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
    index?: string;
    theme?: string;
    rounded?: string;
    bottom?: string;
    top?: string;
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

  await extractColors(
    `data:image/png;base64,${await urlBase(song.album.images[0].url)}`
  ).then((colors) => console.log(colors));

  return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="940" height="460"
      viewBox="0 0 1920 940"
      style="border-radius: ${
        query.rounded?.toLowerCase() === "true" ? "7px" : "0px"
      }"
    >
    <path
        fill="${
          !query.theme
            ? query.bg
              ? `#${query.bg}`
              : await extractColors(
                  `data:image/png;base64,${await urlBase(
                    song.album.images[0].url
                  )}`
                ).then(
                  (colors) =>
                    colors[
                      query.index
                        ? parseInt(query.index) > colors.length - 1
                          ? 0
                          : parseInt(query.index)
                        : 0
                    ].hex
                )
            : defaultThemes[query.theme].bg
        }"
        d="M0 0h1920v940H0z"
      />
      
      <clipPath id="album">
          <rect
            width="300"
            height="300"
            x="614"
            y="320"
            rx="10"
          />
      </clipPath>
      
      <text
        fill="${
          !query.theme
            ? query.text
              ? `#${query.text}`
              : "#fff"
            : defaultThemes[query.theme].text
        }"
        x="940"
        y="${
          query.bottom?.toLowerCase() === "true"
            ? "530"
            : query.top?.toLowerCase() === "true"
            ? "360"
            : "435"
        }"
        font-size="40"
        font-weight="bold"
        font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
      >
        ${
          song.name.length > 39
            ? `${escapeHtml(song.name.substring(39))}...`
            : escapeHtml(song.name)
        }
      </text>
      <text
        fill="${
          !query.theme
            ? query.desc
              ? `#${query.desc}`
              : "#DADADA"
            : defaultThemes[query.theme].description
        }"
        x="940"
        y="${
          query.bottom?.toLowerCase() === "true"
            ? "600"
            : query.top?.toLowerCase() === "true"
            ? "430"
            : "505"
        }"
        font-size="40"
        font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
      >
        ${
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
        }
      </text>
      
      <image
          clip-path="url(#album)"
          width="300"
          height="300"
          x="614"
          y="320"
          xlink:href="data:image/png;base64,${await urlBase(
            song.album.images[0].url
          )}"
        />
    </svg>
  `;
};
