import * as React from "react";
// @ts-ignore
import palette from "image-palette";
// @ts-ignore
import pixels from "image-pixels";

import { themes } from "@themes";
import { ThemesTypes } from "^types/ThemesTypes";
import { SpotifySongResponse } from "^types/SpotifySongResponse";
import { SpotifyArtistResponse } from "^types/SpotifyArtistResponse";
import { urlBase } from "@lib/components/urlBase";
import { escapeUnsafe } from "@lib/components/escapeUnsafe";

export const SpotifyImage = async (
  song: SpotifySongResponse,
  artist: SpotifyArtistResponse,
  query: {
    bg?: string;
    icon?: string;
    text?: string;
    desc?: string;
    index?: string;
    theme?: string;
    rounded?: string;
    show_icon?: string;
    bottom?: string;
    top?: string;
  }
) => {
  const defaultThemes: ThemesTypes = themes;

  const { ids, colors } = palette(
    await pixels(
      `data:image/png;base64,${await urlBase(song.album.images[0].url)}`
    )
  );

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
              : `rgb(${
                  colors[
                    query.index
                      ? parseInt(query.index) > colors.length - 1
                        ? 0
                        : parseInt(query.index)
                      : 0
                  ][0]
                }, ${
                  colors[
                    query.index
                      ? parseInt(query.index) > colors.length - 1
                        ? 0
                        : parseInt(query.index)
                      : 0
                  ][1]
                }, ${
                  colors[
                    query.index
                      ? parseInt(query.index) > colors.length - 1
                        ? 0
                        : parseInt(query.index)
                      : 0
                  ][2]
                })`
            : defaultThemes[query.theme].bg
        }"
        d="M0 0h1920v940H0z"
      />
      
      ${
        query.show_icon === undefined ||
        query.show_icon?.toLowerCase() === "true"
          ? `<path fill="${
              !query.theme
                ? query.icon
                  ? `#${query.icon}`
                  : "#C7C7C7"
                : defaultThemes[query.theme].icon
            }" d="M90.6053 71.7748C82.3327 66.8087 68.6872 66.3521 60.79 68.7749C59.5215 69.164 58.1805 68.4403 57.7962 67.1585C57.4119 65.8757 58.1271 64.521 59.3962 64.1313C68.4616 61.3498 83.5319 61.8869 93.0555 67.6015C94.1961 68.2861 94.5703 69.7752 93.8942 70.9263C93.2176 72.0793 91.7432 72.4594 90.6053 71.7748ZM90.093 79.8054C89.5206 80.7561 88.3064 81.0543 87.379 80.4705C80.5782 76.1909 70.208 74.9509 62.1622 77.4513C61.1188 77.774 60.017 77.1719 59.7 76.1055C59.3857 75.0375 59.9741 73.9114 61.0157 73.5865C70.2068 70.7309 81.6329 72.1139 89.4439 77.0284C90.3713 77.6131 90.6632 78.8568 90.093 79.8054ZM87.265 86.7621C86.804 87.4893 85.8198 87.717 85.0666 87.2739C79.0429 83.7325 71.4611 82.9328 62.5321 84.8946C61.6716 85.0843 60.8139 84.5658 60.6176 83.7381C60.4206 82.9107 60.9579 82.0857 61.8202 81.8968C71.5916 79.7483 79.9732 80.6729 86.7345 84.6471C87.4883 85.0899 87.7257 86.0372 87.265 86.7621ZM75 50C61.1932 50 50 61.1929 50 74.9997C50 88.808 61.1932 100 75 100C88.8074 100 100 88.808 100 74.9997C100 61.1929 88.8074 50 75 50Z"/>
      `
          : null
      }
      
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
            ? `${escapeUnsafe(song.name.substring(39))}...`
            : escapeUnsafe(song.name)
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
            ? `${escapeUnsafe(
                song.artists[0].name.length >= 14
                  ? `${song.artists[0].name.substring(0, 14)}-`
                  : song.artists[0].name
              )}, ${escapeUnsafe(
                song.artists[1].name.length >= 14
                  ? `${song.artists[1].name.substring(0, 14)}-`
                  : song.artists[1].name
              )}, ${escapeUnsafe(
                song.artists[2].name.length >= 14
                  ? `${song.artists[2].name.substring(0, 14)}..`
                  : song.artists[2].name
              )}.`
            : song.artists.length === 2
            ? `${escapeUnsafe(
                song.artists[0].name.length >= 21
                  ? `${song.artists[0].name.substring(0, 21)}-`
                  : song.artists[0].name
              )}, ${escapeUnsafe(
                song.artists[1].name.length >= 21
                  ? `${song.artists[1].name.substring(0, 21)}..`
                  : song.artists[1].name
              )}.`
            : `${escapeUnsafe(
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
