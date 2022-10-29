import * as React from "react";
import numeral from "numeral";

import { themes } from "@themes";
import { ThemesTypes } from "^types/ThemesTypes";
import { TweetResponse } from "^types/TwitterResponse";
import { urlBase } from "@lib/components/urlBase";
import { escapeUnsafe } from "@lib/components/escapeUnsafe";

export const TweetImage = async (
  twitter: TweetResponse,
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
        d="M104.256 75.2854C102.517 76.0562 100.648 76.577 98.6833 76.8124C100.688 75.6124 102.225 73.7083 102.95 71.4416C101.075 72.5541 98.9979 73.3624 96.7875 73.7958C95.0167 71.9124 92.4958 70.7333 89.7042 70.7333C84.3458 70.7333 80 75.0791 80 80.4416C80 81.1999 80.0875 81.9374 80.25 82.6499C72.1813 82.2437 65.0333 78.3791 60.2458 72.5083C59.4125 73.9458 58.9333 75.6124 58.9333 77.3874C58.9333 80.7541 60.6479 83.727 63.25 85.4666C61.6583 85.4145 60.1625 84.9791 58.8542 84.252V84.377C58.8542 89.0791 62.1979 93.002 66.6396 93.8937C65.8229 94.1145 64.9667 94.2312 64.0833 94.2312C63.4583 94.2312 62.8479 94.1729 62.2563 94.0604C63.4917 97.9145 67.075 100.723 71.3229 100.798C68 103.402 63.8146 104.954 59.2688 104.954C58.4854 104.954 57.7125 104.908 56.9521 104.819C61.2479 107.575 66.3479 109.179 71.8271 109.179C89.6813 109.179 99.4417 94.3916 99.4417 81.5666C99.4417 81.1499 99.4313 80.7291 99.4125 80.3124C101.308 78.9416 102.954 77.2354 104.252 75.2916L104.256 75.2854Z"
        fill="${
          !query.theme
            ? query.icon
              ? `#${query.icon}`
              : "#C4C4C4"
            : defaultThemes[query.theme].icon
        }"
      />

      <text
        fill="${
          !query.theme
            ? query.text
              ? `#${query.text}`
              : "#000"
            : defaultThemes[query.theme].text
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
          twitter.includes?.users[0].username.length > 11
            ? `${escapeUnsafe(
                twitter.includes?.users[0].username.slice(0, 11)
              )}...`
            : escapeUnsafe(twitter.includes?.users[0].username)
        }
      </text>

      <clipPath id="prefix__a">
        <rect width="273" height="306" x="143" y="82" rx="31" />
      </clipPath>

      <g>
        <text
          fill="${
            !query.theme
              ? query.text
                ? `#${query.text}`
                : "#000"
              : defaultThemes[query.theme].text
          }"
          x="440"
          y="175"
          font-size="86"
          font-weight="bold"
          font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
        >
          ${
            twitter.includes?.users[0].name !== ""
              ? escapeUnsafe(twitter.includes?.users[0].name)
              : escapeUnsafe(twitter.includes?.users[0].username)
          }
        </text>
        ${
          twitter.data
            ? `
        ${
          twitter.data.text.length > 84
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
                  ${escapeUnsafe(twitter.data.text.substring(0, 84))}
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
                    twitter.data.text.length >= 169
                      ? `${escapeUnsafe(twitter.data.text.substring(84, 169))}`
                      : escapeUnsafe(twitter.data.text.substring(84))
                  }
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
                  y="345"
                  font-size="36"
                  font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
                >
                  ${
                    twitter.data.text.length >= 253
                      ? `${escapeUnsafe(
                          twitter.data.text.substring(169, 253)
                        )}...`
                      : escapeUnsafe(twitter.data.text.substring(169))
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
                ${escapeUnsafe(twitter.data.text)}
              </text>
            `
        }
        `
            : null
        }
        <g>
          <g>
            <g>
              <g
                fill="${
                  !query.theme
                    ? query.stats
                      ? `#${query.stats}`
                      : "#C4C4C4"
                    : defaultThemes[query.theme].stats
                }"
              >
                <path d="M172.262 452.671L163.621 452.65H163.617C154.504 452.65 147.367 459.79 147.367 468.904C147.367 477.442 154.004 483.917 162.919 484.258V492.233C162.919 492.458 163.01 492.829 163.169 493.073C163.465 493.542 163.969 493.796 164.485 493.796C164.773 493.796 165.062 493.717 165.323 493.55C165.873 493.2 178.808 484.925 182.173 482.079C186.135 478.725 188.506 473.808 188.512 468.929V468.894C188.5 459.796 181.367 452.671 172.262 452.669V452.671ZM180.152 479.696C177.79 481.696 170.023 486.79 166.044 489.369V482.729C166.044 481.867 165.346 481.167 164.481 481.167H163.656C156.031 481.167 150.494 476.008 150.494 468.904C150.494 461.542 156.26 455.775 163.619 455.775L172.258 455.796H172.262C179.621 455.796 185.387 461.558 185.392 468.913C185.385 472.892 183.429 476.921 180.154 479.696H180.152Z" />
              </g>

              <text
                fill="${
                  !query.theme
                    ? query.stats_text
                      ? `#${query.stats_text}`
                      : "#646464"
                    : defaultThemes[query.theme].statsText
                }"
                x="216"
                y="485"
                font-size="40"
                font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
              >
                ${
                  twitter.data?.public_metrics.reply_count! < 1000
                    ? numeral(twitter.data?.public_metrics.reply_count).format(
                        "0a"
                      )
                    : numeral(twitter.data?.public_metrics.reply_count).format(
                        "0.0a"
                      )
                }
              </text>
            </g>

            <g>
              <g
                fill="${
                  !query.theme
                    ? query.stats
                      ? `#${query.stats}`
                      : "#C4C4C4"
                    : defaultThemes[query.theme].stats
                }"
              >
                <path d="M796.522 480.646C795.913 480.035 794.924 480.035 794.313 480.646L789.688 485.271V463.938C789.688 459.629 786.182 456.125 781.876 456.125H769.688C768.826 456.125 768.126 456.825 768.126 457.688C768.126 458.55 768.826 459.25 769.688 459.25H781.876C784.459 459.25 786.563 461.354 786.563 463.938V485.271L781.938 480.646C781.328 480.035 780.338 480.035 779.73 480.646C779.122 481.256 779.117 482.246 779.73 482.854L787.022 490.146C787.324 490.452 787.724 490.604 788.126 490.604C788.528 490.604 788.924 490.454 789.23 490.146L796.522 482.854C797.134 482.246 797.134 481.256 796.522 480.646ZM774.313 487.479H762.126C759.542 487.479 757.438 485.375 757.438 482.792V461.458L762.063 466.083C762.372 466.39 762.772 466.542 763.172 466.542C763.572 466.542 763.972 466.39 764.276 466.083C764.886 465.473 764.886 464.483 764.276 463.875L756.984 456.583C756.374 455.971 755.384 455.971 754.776 456.583L747.484 463.875C746.872 464.483 746.872 465.473 747.484 466.083C748.097 466.694 749.082 466.694 749.692 466.083L754.317 461.458V482.792C754.317 487.1 757.824 490.604 762.13 490.604H774.317C775.18 490.604 775.88 489.904 775.88 489.042C775.88 488.179 775.178 487.479 774.317 487.479H774.313Z" />
              </g>

              <text
                fill="${
                  !query.theme
                    ? query.stats_text
                      ? `#${query.stats_text}`
                      : "#646464"
                    : defaultThemes[query.theme].statsText
                }"
                x="817"
                y="485"
                font-size="40"
                font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
              >
                ${
                  twitter.data?.public_metrics.retweet_count! < 1000
                    ? numeral(
                        twitter.data?.public_metrics.retweet_count
                      ).format("0a")
                    : numeral(
                        twitter.data?.public_metrics.retweet_count
                      ).format("0.0a")
                }
              </text>
            </g>

            <g>
              <g
                fill="${
                  !query.theme
                    ? query.stats
                      ? `#${query.stats}`
                      : "#C4C4C4"
                    : defaultThemes[query.theme].stats
                }"
              >
                <path d="M1292 493.079H1291.97C1286.59 492.979 1271.06 478.95 1271.06 465.663C1271.06 459.279 1276.32 453.675 1282.32 453.675C1287.09 453.675 1290.3 456.967 1292 459.363C1293.69 456.971 1296.9 453.675 1301.68 453.675C1307.68 453.675 1312.93 459.279 1312.93 465.665C1312.93 478.948 1297.4 492.977 1292.02 493.075H1292V493.079ZM1282.32 456.802C1277.99 456.802 1274.19 460.944 1274.19 465.667C1274.19 477.625 1288.84 489.825 1292 489.954C1295.16 489.825 1309.81 477.627 1309.81 465.667C1309.81 460.944 1306.02 456.802 1301.68 456.802C1296.42 456.802 1293.48 462.919 1293.45 462.979C1292.97 464.15 1291.04 464.15 1290.56 462.979C1290.53 462.917 1287.59 456.802 1282.32 456.802H1282.32Z" />
              </g>

              <text
                fill="${
                  !query.theme
                    ? query.stats_text
                      ? `#${query.stats_text}`
                      : "#646464"
                    : defaultThemes[query.theme].statsText
                }"
                x="1342"
                y="485"
                font-size="40"
                font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
              >
                ${
                  twitter.data?.public_metrics.like_count! < 1000
                    ? numeral(twitter.data?.public_metrics.like_count).format(
                        "0a"
                      )
                    : numeral(twitter.data?.public_metrics.like_count).format(
                        "0.0a"
                      )
                }
              </text>
            </g>
          </g>
        </g>
      </g>

      <image
        clip-path="url(#prefix__a)"
        xlink:href="data:image/png;base64,${await urlBase(
          twitter.includes?.users[0].profile_image_url.split("_normal")[0] +
            twitter.includes?.users[0].profile_image_url.split("_normal")[1]
        )}"
        width="350"
        height="390"
        x="105"
        y="50"
      />
      ${
        twitter.includes.users[0].verified
          ? ` <circle cx="407" cy="96" r="32" fill="${
              !query?.theme
                ? query?.bg
                  ? `#${query?.bg}`
                  : "#fff"
                : defaultThemes[query?.theme].bg
            }"/>
      <path fill="${
        !query?.theme
          ? query?.bg
            ? `#${query?.bg}`
            : "#fff"
          : defaultThemes[query?.theme].bg
      }" stroke="#1DA1F2" stroke-width="2" d="M400.122 97.3401L400.125 97.3431L403.812 101.024L404.675 101.886L405.351 100.871L413.32 88.913C413.49 88.6573 413.839 88.5858 414.1 88.7595L414.101 88.7599C414.363 88.9346 414.43 89.2841 414.26 89.5379L414.092 89.7902V89.793L405.231 103.082C405.231 103.082 405.231 103.082 405.231 103.082C405.122 103.245 404.946 103.333 404.76 103.333C404.661 103.333 404.566 103.309 404.481 103.259L404.326 103.132L399.33 98.1366C399.109 97.9161 399.111 97.5606 399.329 97.3437C399.553 97.1206 399.908 97.1251 400.122 97.3401ZM429.875 97.0417C429.875 93.6868 428.172 90.7197 425.588 89.0711C425.789 88.292 425.896 87.4731 425.896 86.625C425.896 81.512 421.928 77.2958 416.942 77.2958C416.155 77.2958 415.386 77.3966 414.65 77.5988C413.086 74.9229 410.253 73.125 407 73.125C403.746 73.125 400.918 74.9277 399.35 77.5958C398.614 77.3938 397.844 77.2917 397.056 77.2917C392.065 77.2917 388.102 81.513 388.102 86.625C388.102 87.4715 388.208 88.2903 388.408 89.0709C385.826 90.7188 384.123 93.6827 384.123 97.0417C384.123 100.274 385.7 103.137 388.119 104.817C388.108 105 388.102 105.186 388.102 105.375C388.102 110.487 392.065 114.708 397.056 114.708C397.845 114.708 398.613 114.605 399.347 114.404C400.913 117.074 403.742 118.875 406.998 118.875C410.256 118.875 413.086 117.074 414.65 114.402C415.384 114.602 416.152 114.704 416.942 114.704C421.933 114.704 425.896 110.483 425.896 105.371C425.896 105.183 425.89 104.997 425.879 104.814C428.292 103.135 429.875 100.274 429.875 97.0438V97.0417Z"/>`
          : null
      }   </svg>`;
};
