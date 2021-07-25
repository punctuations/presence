import * as React from "react";
import numeral from "numeral";

import { themes } from "@themes";
import { ThemesTypes } from "^types/ThemesTypes";
import { ProductHuntUserResponse } from "^types/ProductHuntResponse";

import { urlBase } from "@lib/components/urlBase";
import { escapeUnsafe } from "@lib/components/escapeUnsafe";

export const ProductHuntUserImage = async (
  product: ProductHuntUserResponse,
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
        d="M89.8652 86.3672C89.8652 88.3691 88.2344 90 86.2324 90H79.3672V82.7344H86.2324C88.2344 82.7344 89.8652 84.3652 89.8652 86.3672ZM107.219 90C107.219 103.379 96.3789 114.219 83 114.219C69.6211 114.219 58.7812 103.379 58.7812 90C58.7812 76.6211 69.6211 65.7812 83 65.7812C96.3789 65.7812 107.219 76.6211 107.219 90ZM94.709 86.3672C94.709 81.6895 90.9102 77.8906 86.2324 77.8906H74.5234V102.109H79.3672V94.8438H86.2324C90.9102 94.8438 94.709 91.0449 94.709 86.3672Z"
        fill="${
          !query?.theme
            ? query?.icon
              ? `#${query?.icon}`
              : "#C4C4C4"
            : defaultThemes[query?.theme].icon
        }"
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
        @${
          product.user.username.length > 11
            ? `${escapeUnsafe(product.user.username.slice(0, 11))}...`
            : escapeUnsafe(product.user.username)
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
          ${escapeUnsafe(product.user.name)}
        </text>
        ${
          product.user.headline && product.user.headline.length > 84
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
                ${escapeUnsafe(product.user.headline.substring(0, 84))}
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
                  product.user.headline.length >= 154
                    ? `${escapeUnsafe(
                        product.user.headline.substring(84, 154)
                      )}...`
                    : escapeUnsafe(product.user.headline.substring(84))
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
              ${escapeUnsafe(product.user.headline)}
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
                ${numeral(product.user.followers_count).format("0a")}
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
                ${numeral(product.user.followings_count).format("0a")}
              </tspan>
               Following
            </text>
          </g>
          <g>
            ${
              product.user.twitter_username
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
                    <path d="M191.256 447.285C189.517 448.056 187.648 448.577 185.683 448.812C187.688 447.612 189.225 445.708 189.95 443.442C188.075 444.554 185.998 445.362 183.788 445.796C182.017 443.912 179.496 442.733 176.704 442.733C171.346 442.733 167 447.079 167 452.442C167 453.2 167.088 453.937 167.25 454.65C159.181 454.244 152.033 450.379 147.246 444.508C146.413 445.946 145.933 447.612 145.933 449.387C145.933 452.754 147.648 455.727 150.25 457.467C148.658 457.415 147.163 456.979 145.854 456.252V456.377C145.854 461.079 149.198 465.002 153.64 465.894C152.823 466.115 151.967 466.231 151.083 466.231C150.458 466.231 149.848 466.173 149.256 466.06C150.492 469.915 154.075 472.723 158.323 472.798C155 475.402 150.815 476.954 146.269 476.954C145.485 476.954 144.713 476.908 143.952 476.819C148.248 479.575 153.348 481.179 158.827 481.179C176.681 481.179 186.442 466.392 186.442 453.567C186.442 453.15 186.431 452.729 186.413 452.312C188.308 450.942 189.954 449.235 191.252 447.292L191.256 447.285Z" />
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
                    @${escapeUnsafe(product.user.twitter_username)}
                  </text>
                </g>
              `
                : null
            }

            ${
              product.user.website_url
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
                    ${product.user.website_url}
                  </text>
                </g>
              `
                : null
            }

            ${
              product.user.created_at
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
                    Joined ${new Date(product.user.created_at).toDateString()}
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
          `${product.user.image_url.original}`
        )}"
        width="350"
        height="390"
        x="105"
        y="50"
      />
    </svg>`;
};
