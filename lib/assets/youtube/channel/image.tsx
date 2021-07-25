import * as React from "react";
import numeral from "numeral";

import { themes } from "@themes";
import { ThemesTypes } from "^types/ThemesTypes";
import { YoutubeChannelResponse } from "^types/YoutubeResponse";

import { urlBase } from "@lib/components/urlBase";
import { escapeUnsafe } from "@lib/components/escapeUnsafe";

export const YoutubeChannelImage = async (
  youtube: YoutubeChannelResponse,
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
        @${
          youtube.items
            ? youtube.items[0].snippet.title.length > 11
              ? `${escapeUnsafe(
                  youtube.items[0].snippet.title.slice(0, 11)
                )}...`
              : escapeUnsafe(youtube.items[0].snippet.title)
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
          ${youtube.items ? escapeUnsafe(youtube.items[0].snippet.title) : null}
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
                    ? !youtube.items[0].statistics.hiddenSubscriberCount
                      ? parseInt(youtube.items[0].statistics.subscriberCount)! <
                        1000
                        ? numeral(
                            youtube.items[0].statistics.subscriberCount
                          ).format("0a")
                        : numeral(
                            youtube.items[0].statistics.subscriberCount
                          ).format("0.0a")
                      : parseInt(youtube.items[0].statistics.videoCount)! < 1000
                      ? numeral(youtube.items[0].statistics.videoCount).format(
                          "0a"
                        )
                      : numeral(youtube.items[0].statistics.videoCount).format(
                          "0.0a"
                        )
                    : null
                }
              </tspan>
               ${
                 youtube.items
                   ? youtube.items[0].statistics.hiddenSubscriberCount
                     ? "Videos"
                     : "Subscribers"
                   : null
               }
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
              youtube.items && youtube.items[0].snippet.country
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
                    <path d="M177 465.823c-4.35 0-7.89-3.538-7.89-7.888s3.542-7.893 7.89-7.893 7.89 3.541 7.89 7.889c0 4.348-3.542 7.886-7.89 7.886v.006zm0-12.652a4.771 4.771 0 00-4.765 4.764 4.768 4.768 0 004.765 4.761 4.77 4.77 0 004.765-4.763 4.773 4.773 0 00-4.765-4.766v.004z" />
                    <path d="M195.108 458.271c0-9.979-8.125-18.104-18.108-18.104s-18.108 8.125-18.108 18.104c0 3.962 1.256 7.725 3.631 10.881l.006-.004.015.031c3.391 4.313 13.079 11.994 13.489 12.317a1.559 1.559 0 001.938.002c.41-.323 10.098-8 13.489-12.317l.015-.029.004.004a17.954 17.954 0 003.629-10.881v-.004zm-18.108 20c-2.55-2.063-9.417-7.74-11.992-11.011a14.834 14.834 0 01-2.991-8.983c0-8.262 6.723-14.985 14.983-14.985 8.26 0 14.983 6.721 14.983 14.979 0 3.271-1.035 6.379-2.991 8.985-2.575 3.271-9.442 8.946-11.992 11.011v.004z" />
                  </g>

                  <text
                    fill="${
                      !query?.theme
                        ? query?.stats_text
                          ? `#${query?.stats_text}`
                          : "#646464"
                        : defaultThemes[query?.theme].statsText
                    }"
                    x="216"
                    y="476"
                    font-size="40"
                    font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
                  >
                    ${escapeUnsafe(youtube.items[0].snippet.country)}
                  </text>
                </g>
              `
                : null
            }

            ${
              youtube.items && youtube.items[0].snippet.customUrl
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
                    <path d="M780.917 467.135a1.7 1.7 0 01-.423-.056 10.812 10.812 0 01-5.823-4.025 10.842 10.842 0 01-2.017-8.11 10.856 10.856 0 014.308-7.163l7.355-5.433c4.837-3.575 11.687-2.55 15.27 2.292a10.872 10.872 0 012.015 8.114 10.854 10.854 0 01-4.312 7.163l-3.084 2.279a1.564 1.564 0 11-1.858-2.517l3.083-2.281a7.732 7.732 0 003.075-5.104 7.756 7.756 0 00-1.437-5.788c-2.552-3.45-7.442-4.187-10.896-1.633l-7.354 5.433a7.749 7.749 0 00-3.073 5.104 7.726 7.726 0 001.437 5.788 7.715 7.715 0 004.15 2.869 1.567 1.567 0 011.084 1.933 1.564 1.564 0 01-1.505 1.14l.005-.005z" />
                    <path d="M771.146 481.946a10.915 10.915 0 01-8.802-4.427 10.855 10.855 0 01-2.017-8.113 10.854 10.854 0 014.313-7.162l3.079-2.279a1.564 1.564 0 011.86 2.516l-3.083 2.282a7.739 7.739 0 00-3.073 5.104 7.746 7.746 0 001.437 5.787c2.553 3.452 7.438 4.188 10.896 1.636l7.35-5.434c3.454-2.552 4.188-7.437 1.636-10.896a7.71 7.71 0 00-4.15-2.866 1.565 1.565 0 01-1.084-1.931 1.574 1.574 0 011.93-1.088 10.81 10.81 0 015.82 4.025c3.577 4.842 2.55 11.692-2.291 15.271l-7.354 5.433a10.81 10.81 0 01-6.469 2.138l.002.004z" />
                  </g>

                  <text
                    fill="${
                      !query?.theme
                        ? query?.stats_text
                          ? `#${query?.stats_text}`
                          : "#646464"
                        : defaultThemes[query?.theme].statsText
                    }"
                    x="817"
                    y="476"
                    font-size="40"
                    text-decoration="underline"
                    font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
                  >
                    youtube.com/${escapeUnsafe(
                      youtube.items[0].snippet.customUrl
                    )}
                  </text>
                </g>
              `
                : null
            }

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
                    <path d="M1417.06 440.167h-32.12a4.777 4.777 0 00-4.77 4.775v32.116a4.777 4.777 0 004.77 4.775h32.12c2.63 0 4.77-2.141 4.77-4.775v-32.116a4.777 4.777 0 00-4.77-4.775zm1.65 36.891c0 .911-.74 1.65-1.65 1.65h-32.12c-.91 0-1.65-.739-1.65-1.65v-27.687c0-.911.74-1.646 1.65-1.65h32.12c.91 0 1.65.739 1.65 1.646v27.696-.005z" />
                    <path d="M1390.65 456.906a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm0 9.179a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm20.7-9.179a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm0 9.179a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm-10.35-9.179a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm0 9.179a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm-10.35 9.021a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm10.35 0a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354z" />
                  </g>

                  <text
                    fill="${
                      !query?.theme
                        ? query?.stats_text
                          ? `#${query?.stats_text}`
                          : "#646464"
                        : defaultThemes[query?.theme].statsText
                    }"
                    x="1442"
                    y="476"
                    font-size="40"
                    font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
                  >
                    Joined ${new Date(
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
        height="390"
        x="105"
        y="50"
      />
    </svg>`;
};
