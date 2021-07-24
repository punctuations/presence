import * as React from "react";
import numeral from "numeral";

import { themes } from "@themes";
import { ThemesTypes } from "@types/ThemesTypes";
import { SpotifyArtistResponse } from "@types/SpotifyArtistResponse";

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
        d="M90.6053 71.7748C82.3327 66.8087 68.6872 66.3521 60.79 68.7749C59.5215 69.164 58.1805 68.4403 57.7962 67.1585C57.4119 65.8757 58.1271 64.521 59.3962 64.1313C68.4616 61.3498 83.5319 61.8869 93.0555 67.6015C94.1961 68.2861 94.5703 69.7752 93.8942 70.9263C93.2176 72.0793 91.7432 72.4594 90.6053 71.7748ZM90.093 79.8054C89.5206 80.7561 88.3064 81.0543 87.379 80.4705C80.5782 76.1909 70.208 74.9509 62.1622 77.4513C61.1188 77.774 60.017 77.1719 59.7 76.1055C59.3857 75.0375 59.9741 73.9114 61.0157 73.5865C70.2068 70.7309 81.6329 72.1139 89.4439 77.0284C90.3713 77.6131 90.6632 78.8568 90.093 79.8054ZM87.265 86.7621C86.804 87.4893 85.8198 87.717 85.0666 87.2739C79.0429 83.7325 71.4611 82.9328 62.5321 84.8946C61.6716 85.0843 60.8139 84.5658 60.6176 83.7381C60.4206 82.9107 60.9579 82.0857 61.8202 81.8968C71.5916 79.7483 79.9732 80.6729 86.7345 84.6471C87.4883 85.0899 87.7257 86.0372 87.265 86.7621ZM75 50C61.1932 50 50 61.1929 50 74.9997C50 88.808 61.1932 100 75 100C88.8074 100 100 88.808 100 74.9997C100 61.1929 88.8074 50 75 50Z"
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
        x="320"
        y="345"
        text-anchor="end"
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
