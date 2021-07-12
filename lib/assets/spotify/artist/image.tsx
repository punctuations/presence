import * as React from "react";
import numeral from "numeral";

import { themes } from "@themes";
import { ThemesTypes } from "@lib/types/ThemesTypes";
import { SpotifyArtistResponse } from "@lib/types/SpotifyArtistResponse";

import { urlBase } from "@lib/components/urlBase";
import { escapeUnsafe } from "@lib/components/escapeUnsafe";

export const SpotifyArtistImage = async (
  artist: SpotifyArtistResponse,
  query: {
    [p: string]: string | string[] | undefined;
    bg?: string;
    text?: string;
    desc?: string;
    stats?: string;
    stats_text?: string;
    theme?: string;
    icon?: string;
    rounded?: string;
  }
) => {
  const defaultThemes: ThemesTypes = themes;

  return `<svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="940"
      height="285"
      fill="none"
      viewBox="0 0 1920 582"
      style="border-radius: ${
        query.rounded?.toLowerCase() === "true" ? "7px" : "0px"
      }"
    >

      <path
        fill="${
          !query?.theme
            ? query?.bg
              ? `#${query?.bg}`
              : "#fff"
            : defaultThemes[query?.theme].bg
        }"
        d="M0 0h1920v582H0z"
      />

      <path
        fill="${
          !query.theme
            ? query.icon
              ? `#${query.icon}`
              : "#C4C4C4"
            : defaultThemes[query.theme].icon
        }"
        fill-rule="evenodd"
        d="M80.5 65C66.411 65 55 76.188 55 90c0 11.062 7.3 20.406 17.436 23.719 1.275.219 1.753-.531 1.753-1.188 0-.593-.032-2.562-.032-4.656-6.407 1.156-8.064-1.531-8.575-2.937-.286-.719-1.53-2.938-2.613-3.532-.893-.468-2.168-1.625-.032-1.656 2.008-.031 3.442 1.812 3.92 2.562 2.296 3.782 5.961 2.719 7.427 2.063.223-1.625.893-2.719 1.626-3.344-5.674-.625-11.602-2.781-11.602-12.344 0-2.718.988-4.968 2.613-6.718-.255-.625-1.147-3.188.255-6.625 0 0 2.136-.656 7.013 2.562a24.111 24.111 0 016.375-.844c2.167 0 4.335.282 6.375.844 4.877-3.25 7.012-2.562 7.012-2.562 1.403 3.437.51 6 .255 6.625 1.626 1.75 2.614 3.969 2.614 6.719 0 9.593-5.96 11.718-11.634 12.343.924.781 1.72 2.281 1.72 4.625 0 3.344-.031 6.032-.031 6.875 0 .657.478 1.438 1.753 1.188 5.062-1.676 9.461-4.865 12.577-9.12A24.703 24.703 0 00106 90c0-13.813-11.411-25-25.5-25z"
        clip-rule="evenodd"
      />

      <text
        fill="${
          !query?.theme
            ? query?.text
              ? `#${query?.text}`
              : "#000"
            : defaultThemes[query?.theme].text
        }"
        x="83"
        y="345"
        font-size="36"
        font-weight="bold"
        font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
        transform="rotate(-90 100 355)"
      >
        ${
          artist.name
            ? artist.name.length > 12
              ? `${escapeUnsafe(artist.name.slice(0, 12))}...`
              : escapeUnsafe(artist.name)
            : null
        }
      </text>

      <clipPath id="prefix__a">
        <rect width="273" height="306" x="143" y="82" rx="31" />
      </clipPath>

      <g>
        <text
          fill="${
            !query?.theme
              ? query?.text
                ? `#${query?.text}`
                : "#000"
              : defaultThemes[query?.theme].text
          }"
          x="440"
          y="175"
          font-size="86"
          font-weight="bold"
          font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
        >
          ${escapeUnsafe(artist.name)}
        </text>
        ${
          artist.genres
            ? `
          ${
            artist.genres.length > 7
              ? `
              <text
                fill="${
                  !query.theme
                    ? query.description
                      ? `#${query.description}`
                      : "#B4B4B4"
                    : defaultThemes[query.theme].description
                }"
                x="446"
                y="245"
                font-size="36"
                font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
              >
                ${artist.genres.map((genre, i) => {
                  if (i <= 7) {
                    return ` ${escapeUnsafe(genre)}`;
                  }
                })}
              </text>
              <text
                fill="${
                  !query.theme
                    ? query.description
                      ? `#${query.description}`
                      : "#B4B4B4"
                    : defaultThemes[query.theme].description
                }"
                x="446"
                y="295"
                font-size="36"
                font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
              >
                ${artist.genres.map((genre, i) => {
                  if (i === artist.genres.length - 1 && i < 14) {
                    return ` and ${escapeUnsafe(genre)}.`;
                  } else if (i < 14 && i !== artist.genres.length - 1) {
                    return ` ${escapeUnsafe(genre)}`;
                  } else if (i === 14) {
                    return ` and ${escapeUnsafe(genre)}...`;
                  }
                })}
              </text>
          `
              : `
            <text
              fill="${
                !query.theme
                  ? query.description
                    ? `#${query.description}`
                    : "#B4B4B4"
                  : defaultThemes[query.theme].description
              }"
              x="446"
              y="245"
              font-size="40"
              font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
            >
              ${artist.genres.map((genre, i) => {
                if (i !== artist.genres.length - 1) {
                  return ` ${escapeUnsafe(genre)}`;
                } else if (
                  i === artist.genres.length - 1 &&
                  artist.genres.length > 1
                ) {
                  return ` and ${escapeUnsafe(genre)}.`;
                } else if (
                  i === artist.genres.length - 1 &&
                  artist.genres.length! > 1
                ) {
                  return ` ${escapeUnsafe(genre)}.`;
                }
              })}
            </text>
          `
          }
      `
            : null
        }
        <g>
          <g
            fill="${
              !query?.theme
                ? query?.stats_text
                  ? `#${query?.stats_text}`
                  : "#838383"
                : defaultThemes[query?.theme].statsText
            }"
          >
            <text x="450" y="370" font-size="36" font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'>
              <tspan
                fill="${
                  !query?.theme
                    ? query?.text
                      ? `#${query?.text}`
                      : "#000"
                    : defaultThemes[query?.theme].text
                }"
                font-weight="bold"
                font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
              >
                ${numeral(artist.followers.total).format("0a")}
              </tspan>
               Followers
            </text>
          </g>
          <g
            fill="${
              !query?.theme
                ? query?.stats_text
                  ? `#${query?.stats_text}`
                  : "#838383"
                : defaultThemes[query?.theme].statsText
            }"
          >
            <text x='783' y='370' font-size='36' font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'>
              <tspan
                fill="${
                  !query?.theme
                    ? query?.text
                      ? `#${query?.text}`
                      : "#000"
                    : defaultThemes[query?.theme].text
                }"
                font-weight="bold"
              >
                ${(artist.popularity / 100) * 100}%
              </tspan>
               Popularity
            </text>
          </g>
        </g>
      </g>

      <image
        clip-path="url(#prefix__a)"
        xlink:href="data:image/png;base64,${await urlBase(
          artist.images[0].url
        )}"
        width="350"
        height="390"
        x="105"
        y="50"
      />
    </svg>
    `;
};
