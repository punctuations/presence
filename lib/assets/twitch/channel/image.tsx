import * as React from "react";
import numeral from "numeral";

import { themes } from "@themes";
import { ThemesTypes } from "@lib/types/ThemesTypes";
import { Channel, TwitchUserResponse } from "@lib/types/TwitchResponse";

import { urlBase } from "@lib/components/urlBase";
import { escapeUnsafe } from "@lib/components/escapeUnsafe";

export const TwitchUserImage = async (
  twitch: Channel,
  user: TwitchUserResponse,
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
        d="M102.188 87.6351L94.8823 94.5973H87.5736L81.1784 100.692V94.5973H72.9596V68.4828H102.188V87.6351ZM71.1324 65L62 73.7037V105.042H72.9596V113.746L82.092 105.042H89.4008L105.842 89.3731V65H71.1324ZM96.7095 74.8511H93.055V85.2953H96.7095V74.8511ZM83.0099 74.8101H86.6644V85.2557H83.0099V74.8101Z"
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
          twitch.broadcaster_login
            ? twitch.broadcaster_login.length > 12
              ? `${escapeUnsafe(twitch.broadcaster_login.slice(0, 12))}...`
              : escapeUnsafe(twitch.broadcaster_login)
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
          ${
            twitch.display_name
              ? escapeUnsafe(twitch.display_name)
              : escapeUnsafe(twitch.display_name)
          }
        </text>
        ${
          user.data[0].description
            ? `
          ${
            user.data[0].description.length > 84
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
                ${escapeUnsafe(user.data[0].description.substring(0, 84))}
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
                ${
                  user.data[0].description &&
                  user.data[0].description.length >= 154
                    ? `${escapeUnsafe(
                        user.data[0].description.substring(84, 154)
                      )}...`
                    : user.data[0].description
                    ? escapeUnsafe(user.data[0].description.substring(84))
                    : ""
                }
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
              ${escapeUnsafe(user.data[0].description)}
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
                ${numeral(user.data[0].view_count).format("0a")}
              </tspan>
               Views
            </text>
          </g>
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
                    Joined ${new Date(user.data[0].created_at).toDateString()}
                  </text>
                </g>
        </g>
      </g>

      <image
        clip-path="url(#prefix__a)"
        xlink:href="data:image/png;base64,${await urlBase(
          user.data[0].profile_image_url
        )}"
        width="350"
        height="390"
        x="105"
        y="50"
      />
      ${
        user.data[0].broadcaster_type === "partner" || twitch.is_live
          ? `<circle cx="407" cy="96" r="32" fill="${
              !query?.theme
                ? query?.bg
                  ? `#${query?.bg}`
                  : "#fff"
                : defaultThemes[query?.theme].bg
            }"/>
            ${
              twitch.is_live
                ? `<circle cx="407" cy="96" r="20" fill="#FF0000"/>`
                : `<path fill="#772CE8" d="M421.062 81.9375L407 77.25L392.938 81.9375L388.25 96L392.938 110.062L407 114.75L421.062 110.062L425.75 96L421.062 81.9375ZM403.875 105.375L417.938 91.3125L413.25 86.625L403.875 96L399.188 91.3125L394.5 96L403.875 105.375Z" fill-rule="evenodd" clip-rule="evenodd"/>`
            }`
          : null
      }
    </svg>`;
};
