import * as React from "react";
import numeral from "numeral";

import { themes } from "@themes";
import { ThemesTypes } from "^types/ThemesTypes";
import { LastfmArtistResponse } from "^types/LastfmResponse";

import { urlBase } from "@lib/components/urlBase";
import { escapeUnsafe } from "@lib/components/escapeUnsafe";

export const LastfmArtistImage = async (
  artist: LastfmArtistResponse,
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
    
    <defs>
        <style text="text/css">
            @import url('https://fonts.googleapis.com/css?family=Noto+Sans:wght@400;700|Noto+Sans+JP:wght@400;700|Noto+Sans+KR:wght@400;700|Noto+Sans+SC:wght@400;700');
            
            * {
                font-family: 'Noto Sans', 'Noto Sans JP', 'Noto Sans KR', 'Noto Sans SC', sans-serif;
            }
        </style>
    </defs>

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
        d="M80.0493 100.798L78.2164 95.841C78.2164 95.841 75.2379 99.1462 70.7715 99.1462C66.8193 99.1462 64.0134 95.7271 64.0134 90.2565C64.0134 83.2475 67.5638 80.7402 71.0578 80.7402C76.0973 80.7402 77.7007 83.9882 79.0755 88.1482L80.9084 93.8467C82.7407 99.3739 86.177 103.819 96.0847 103.819C103.187 103.819 107.997 101.653 107.997 95.9552C107.997 91.3395 105.363 88.946 100.437 87.8062L96.7719 87.0085C94.2523 86.4387 93.5078 85.4129 93.5078 83.7033C93.5078 81.7658 95.0538 80.626 97.5741 80.626C100.323 80.626 101.812 81.6519 102.041 84.1021L107.768 83.4182C107.31 78.2897 103.759 76.1813 97.9177 76.1813C92.7636 76.1813 87.7237 78.1188 87.7237 84.3301C87.7237 88.205 89.6136 90.6556 94.3666 91.7951L98.2615 92.7066C101.182 93.3905 102.155 94.5871 102.155 96.2399C102.155 98.3479 100.094 99.2028 96.1995 99.2028C90.4151 99.2028 88.0102 96.1827 86.6354 92.0226L84.7455 86.3246C82.3406 78.9166 78.503 76.1814 70.8859 76.1814C62.4673 76.1814 58 81.4808 58 90.4842C58 99.146 62.4673 103.818 70.4855 103.818C76.9562 103.818 80.0493 100.798 80.0493 100.798H80.0493Z"
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
          artist.bio.summary
            ? `
          ${
            artist.bio.summary.length > 72
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
                ${escapeUnsafe(artist.bio.summary.substring(0, 72))}
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
                ${escapeUnsafe(artist.bio.summary.substring(72, 150))}...
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
              ${escapeUnsafe(artist.bio.summary)}
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
                ${numeral(artist.stats.listeners).format("0a")}
              </tspan>
               Listeners
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
                ${numeral(artist.stats.playcount).format("0a")}
              </tspan>
               Plays
            </text>
          </g>
        </g>
      </g>

      <image
        clip-path="url(#prefix__a)"
        xlink:href="data:image/png;base64,${await urlBase(
          artist.image[artist.image.length - 1]["#text"]
        )}"
        width="350"
        height="390"
        x="105"
        y="50"
      />
    </svg>
    `;
};
