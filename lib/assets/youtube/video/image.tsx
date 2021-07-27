import * as React from "react";
import numeral from "numeral";

import { themes } from "@themes";
import { ThemesTypes } from "^types/ThemesTypes";
import { YoutubeVideoResponse } from "^types/YoutubeResponse";

import { urlBase } from "@lib/components/urlBase";
import { escapeUnsafe } from "@lib/components/escapeUnsafe";

export const YoutubeVideoImage = async (
  youtube: YoutubeVideoResponse,
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
      
      <path fill="${
        !query?.theme
          ? query?.icon
            ? `#${query?.icon}`
            : "#C4C4C4"
          : defaultThemes[query?.theme].icon
      }" d="M105.713 73.9057C105.168 71.8271 103.561 70.1901 101.522 69.6345C97.8246 68.625 82.9999 68.625 82.9999 68.625C82.9999 68.625 68.1752 68.625 64.4781 69.6345C62.4384 70.1902 60.832 71.8271 60.2868 73.9057C59.2961 77.6733 59.2961 85.5341 59.2961 85.5341C59.2961 85.5341 59.2961 93.3949 60.2868 97.1625C60.832 99.2411 62.4384 100.81 64.4781 101.365C68.1752 102.375 82.9999 102.375 82.9999 102.375C82.9999 102.375 97.8245 102.375 101.522 101.365C103.561 100.81 105.168 99.2411 105.713 97.1625C106.704 93.3949 106.704 85.5341 106.704 85.5341C106.704 85.5341 106.704 77.6733 105.713 73.9057V73.9057ZM78.1513 92.6711V78.3971L90.5419 85.5343L78.1513 92.6711V92.6711Z"/>

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
          youtube.items
            ? youtube.items[0].snippet.channelTitle.length > 11
              ? `${escapeUnsafe(
                  youtube.items[0].snippet.channelTitle.slice(0, 11)
                )}...`
              : escapeUnsafe(youtube.items[0].snippet.channelTitle)
            : null
        }
      </text>

      <clipPath id="prefix__a">
        <rect width="300" height="255" x="120" y="100" rx="31" />
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
          ${
            youtube.items
              ? youtube.items[0].snippet.title.length > 28
                ? `${escapeUnsafe(
                    youtube.items[0].snippet.title.substring(0, 28)
                  )}...`
                : escapeUnsafe(youtube.items[0].snippet.title)
              : null
          }
        </text>
        ${
          youtube.items && youtube.items[0].snippet.description.length > 84
            ? `
              <text
                fill="${
                  !query?.theme
                    ? query?.desc
                      ? `#${query?.desc}`
                      : "#B4B4B4"
                    : defaultThemes[query?.theme].description
                }"
                x="446"
                y="245"
                font-size="36"
                font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
              >
                ${escapeUnsafe(
                  youtube.items[0].snippet.description.substring(0, 84)
                )}
              </text>
              <text
                fill="${
                  !query?.theme
                    ? query?.desc
                      ? `#${query?.desc}`
                      : "#B4B4B4"
                    : defaultThemes[query?.theme].description
                }"
                x="446"
                y="295"
                font-size="36"
                font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
              >
                ${
                  youtube.items[0].snippet.description.length >= 154
                    ? `${escapeUnsafe(
                        youtube.items[0].snippet.description.substring(84, 154)
                      )}...`
                    : escapeUnsafe(
                        youtube.items[0].snippet.description.substring(84)
                      )
                }
              </text>

          `
            : `
            <text
              fill="${
                !query?.theme
                  ? query?.desc
                    ? `#${query?.desc}`
                    : "#B4B4B4"
                  : defaultThemes[query?.theme].description
              }"
              x="446"
              y="245"
              font-size="40"
              font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
            >
              ${
                youtube.items
                  ? escapeUnsafe(youtube.items[0].snippet.description)
                  : null
              }
            </text>
          `
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
                ${
                  youtube.items
                    ? parseInt(youtube.items[0].statistics.likeCount)! < 1000
                      ? numeral(youtube.items[0].statistics.likeCount).format(
                          "0a"
                        )
                      : numeral(youtube.items[0].statistics.likeCount).format(
                          "0.0a"
                        )
                    : null
                }
              </tspan>
               Likes
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
                ${
                  youtube.items
                    ? parseInt(youtube.items[0].statistics.dislikeCount)! < 1000
                      ? numeral(
                          youtube.items[0].statistics.dislikeCount
                        ).format("0a")
                      : numeral(
                          youtube.items[0].statistics.dislikeCount
                        ).format("0.0a")
                    : null
                }
              </tspan>
               Dislikes
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
            <text x='1116' y='370' font-size='36' font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'>
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
                ${
                  youtube.items
                    ? parseInt(youtube.items[0].statistics.viewCount)! < 1000
                      ? numeral(youtube.items[0].statistics.viewCount).format(
                          "0a"
                        )
                      : numeral(youtube.items[0].statistics.viewCount).format(
                          "0.0a"
                        )
                    : null
                }
              </tspan>
               Views
            </text>
          </g>
          <g>
            ${
              youtube.items && youtube.items[0].snippet.publishedAt
                ? `
                <g>
                  <g
                    fill="${
                      !query?.theme
                        ? query?.stats
                          ? `#${query?.stats}`
                          : "#C4C4C4"
                        : defaultThemes[query?.theme].stats
                    }"
                  >
                    <path d="M177 440.167h-32.12a4.777 4.777 0 00-4.77 4.775v32.116a4.777 4.777 0 004.77 4.775h32.12c2.63 0 4.77-2.141 4.77-4.775v-32.116a4.777 4.777 0 00-4.77-4.775zm1.65 36.891c0 .911-.74 1.65-1.65 1.65h-32.12c-.91 0-1.65-.739-1.65-1.65v-27.687c0-.911.74-1.646 1.65-1.65h32.12c.91 0 1.65.739 1.65 1.646v27.696-.005z" />
                    <path d="M151 456.906a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm0 9.179a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm20.7-9.179a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm0 9.179a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm-10.35-9.179a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm0 9.179a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm-10.35 9.021a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm10.35 0a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354z" />
                  </g>

                  <text
                    fill="${
                      !query?.theme
                        ? query?.stats_text
                          ? `#${query?.stats_text}`
                          : "#646464"
                        : defaultThemes[query?.theme].statsText
                    }"
                    x="200"
                    y="476"
                    font-size="40"
                    font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
                  >
                    Created ${new Date(
                      youtube.items[0].snippet.publishedAt
                    ).toDateString()}
                  </text>
                </g>
              `
                : null
            }
          </g>
        </g>
      </g>

      <image
        clip-path="url(#prefix__a)"
        xlink:href="data:image/png;base64,${await urlBase(
          `${youtube.items ? youtube.items[0].snippet.thumbnails.high.url : ""}`
        )}"
        width="350"
        height="350"
        x="90"
        y="53"
      />
    </svg>`;
};
