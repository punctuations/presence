import * as React from "react";
// @ts-ignore
import palette from "image-palette";
// @ts-ignore
import pixels from "image-pixels";

import { themes } from "@themes";
import { ThemesTypes } from "@lib/types/ThemesTypes";
import { LastfmSongResponse } from "@lib/types/LastfmResponse";
import { urlBase } from "@lib/components/urlBase";
import { escapeUnsafe } from "@lib/components/escapeUnsafe";

export const LastfmImage = async (
  song: LastfmSongResponse,
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

  const rand = Math.floor(Math.random() * (999 - 100 + 1) + 100);

  const { ids, colors } = palette(
    await pixels(
      `data:image/png;base64,${await urlBase(
        song.track.album && song.track.album.image
          ? song.track.album.image[song.track.album.image.length - 1]["#text"]
          : `https://picsum.photos/id/${rand}/1000/1000`
      )}`
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
            }" d="M80.0493 100.798L78.2164 95.841C78.2164 95.841 75.2379 99.1462 70.7715 99.1462C66.8193 99.1462 64.0134 95.7271 64.0134 90.2565C64.0134 83.2475 67.5638 80.7402 71.0578 80.7402C76.0973 80.7402 77.7007 83.9882 79.0755 88.1482L80.9084 93.8467C82.7407 99.3739 86.177 103.819 96.0847 103.819C103.187 103.819 107.997 101.653 107.997 95.9552C107.997 91.3395 105.363 88.946 100.437 87.8062L96.7719 87.0085C94.2523 86.4387 93.5078 85.4129 93.5078 83.7033C93.5078 81.7658 95.0538 80.626 97.5741 80.626C100.323 80.626 101.812 81.6519 102.041 84.1021L107.768 83.4182C107.31 78.2897 103.759 76.1813 97.9177 76.1813C92.7636 76.1813 87.7237 78.1188 87.7237 84.3301C87.7237 88.205 89.6136 90.6556 94.3666 91.7951L98.2615 92.7066C101.182 93.3905 102.155 94.5871 102.155 96.2399C102.155 98.3479 100.094 99.2028 96.1995 99.2028C90.4151 99.2028 88.0102 96.1827 86.6354 92.0226L84.7455 86.3246C82.3406 78.9166 78.503 76.1814 70.8859 76.1814C62.4673 76.1814 58 81.4808 58 90.4842C58 99.146 62.4673 103.818 70.4855 103.818C76.9562 103.818 80.0493 100.798 80.0493 100.798H80.0493Z"/>
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
          song.track.name.length > 39
            ? `${escapeUnsafe(song.track.name.substring(39))}...`
            : escapeUnsafe(song.track.name)
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
        ${escapeUnsafe(song.track.artist.name)}
      </text>
      
      <image
          clip-path="url(#album)"
          width="300"
          height="300"
          x="614"
          y="320"
          xlink:href="data:image/png;base64,${await urlBase(
            song.track.album && song.track.album.image
              ? song.track.album.image[song.track.album.image.length - 1][
                  "#text"
                ]
              : `https://picsum.photos/id/${rand}/1000/1000`
          )}"
        />
    </svg>
  `;
};
