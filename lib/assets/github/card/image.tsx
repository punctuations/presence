import * as React from "react";
import numeral from "numeral";
import { themes } from "@themes";
import { ThemesTypes } from "@lib/types/ThemesTypes";
import {
  GithubAllReposResponse,
  GithubColorResponse,
  GithubUserResponse,
} from "@lib/types/GithubResponse";
import { urlBase } from "@lib/components/urlBase";

export const GithubCardImage = async (
  github: GithubUserResponse,
  starred: GithubAllReposResponse.RootObject,
  colors: GithubColorResponse,
  query: {
    [p: string]: string | string[] | undefined;
    bg?: string;
    text?: string;
    desc?: string;
    stats?: string;
    stats_text?: string;
    accent?: string;
    theme?: string;
    icon?: string;
    rounded?: string;
  }
) => {
  const defaultThemes: ThemesTypes = themes;

  let mostStarred: number = 0;
  let starredIndex: number = 0;

  starred.forEach(isMostStarred);

  function isMostStarred(_contents: any, i: number, data: any[]) {
    if (data) {
      if (data[i].stargazers_count > mostStarred) {
        mostStarred = data[i].stargazers_count;
        starredIndex = i;
      }
    }
  }

  return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="940"
      height="460"
      fill="none"
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
              : "#fff"
            : defaultThemes[query.theme].bg
        }"
        d="M0 0h1920v940H0z"
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
          !query.theme
            ? query.text
              ? `#${query.text}`
              : "#000"
            : defaultThemes[query.theme].text
        }"
        x="75"
        y="345"
        font-size="36"
        font-weight="bold"
        font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
        transform="rotate(-90 100 355)"
      >
        ${
          github.login
            ? github.login.length > 12
              ? `${github.login.slice(0, 12)}...`
              : github.login
            : null
        }
      </text>
      <clipPath id="prefix__a">
        <rect width="273" height="306" x="143" y="82" rx="31" />
      </clipPath>
      <text
        fill="${
          !query.theme
            ? query.text
              ? `#${query.text}`
              : "#000"
            : defaultThemes[query.theme].text
        }"
        x="440"
        y="185"
        font-size="72"
        font-weight="bold"
        font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
      >
        ${!github ? null : github.name ? github.name : github.login}
      </text>
      ${
        github.bio
          ? `
          ${
            github.bio.length > 84
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
                ${github.bio.substring(0, 84)}
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
                  github.bio && github.bio.length >= 154
                    ? `${github.bio.substring(84, 154)}...`
                    : github.bio
                    ? github.bio.substring(84)
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
              ${github.bio}
            </text>
          `
          }
      `
          : null
      }

      <g font-size="40">
        <text
          fill="${
            !query.theme
              ? query.text
                ? `#${query.text}`
                : "#000"
              : defaultThemes[query.theme].text
          }"
          x="450"
          y="379"
          font-weight="bold"
          font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
        >
          ${!github ? null : numeral(github.followers).format("0a")}
        </text>
        <text
          fill="${
            !query.theme
              ? query.stats_text
                ? `#${query.stats_text}`
                : "#676767"
              : defaultThemes[query.theme].statsText
          }"
          x="527"
          y="379"
          font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
        >
          Followers
        </text>
        <text
          fill="${
            !query.theme
              ? query.text
                ? `#${query.text}`
                : "#000"
              : defaultThemes[query.theme].text
          }"
          x="783"
          y="379"
          font-weight="bold"
          font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
        >
          ${!github ? null : numeral(github.following).format("0a")}
        </text>
        <text
          fill="${
            !query.theme
              ? query.stats_text
                ? `#${query.stats_text}`
                : "#676767"
              : defaultThemes[query.theme].statsText
          }"
          x="860"
          y="379"
          font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
        >
          Following
        </text>
      </g>
      <g>
      <rect
        width="1451"
        height='251'
        x='151.5'
        y="455.5"
        fill="${
          !query.theme
            ? query.bg
              ? `#${query.bg}`
              : "#fff"
            : defaultThemes[query.theme].bg
        }"
        stroke="${
          !query.theme
            ? query.accent
              ? `#${query.accent}`
              : "#9D9D9D"
            : defaultThemes[query.theme].accent
        }"
        rx="25.5"
      />
      <path
        fill="${
          !query.theme
            ? query.text
              ? `#${query.text}`
              : "#000"
            : defaultThemes[query.theme].text
        }"
        fill-rule="evenodd"
        d="M207 525.25c0-1.658.658-3.247 1.831-4.419A6.245 6.245 0 01213.25 519h21.875c.497 0 .974.198 1.326.549.351.352.549.829.549 1.326v31.25c0 .497-.198.974-.549 1.326a1.879 1.879 0 01-1.326.549h-6.25c-.497 0-.974-.198-1.326-.549a1.879 1.879 0 010-2.652 1.879 1.879 0 011.326-.549h4.375v-5h-20a2.498 2.498 0 00-2.455 2.969c.092.484.325.929.67 1.281a1.877 1.877 0 01-.027 2.653 1.878 1.878 0 01-2.653-.028A6.236 6.236 0 01207 547.75v-22.5zm26.25-2.5v18.75h-20c-.89 0-1.735.185-2.5.52v-16.77a2.5 2.5 0 012.5-2.5h20zm-18.75 26.875v8.125a.627.627 0 00.345.559.621.621 0 00.655-.059l3.625-2.717a.62.62 0 01.75 0l3.625 2.717a.621.621 0 001-.5v-8.125a.625.625 0 00-.625-.625h-8.75a.625.625 0 00-.625.625z"
        clip-rule="evenodd"
      />
      <text
        fill="${
          !query.theme
            ? query.text
              ? `#${query.text}`
              : "#000"
            : defaultThemes[query.theme].text
        }"
        x="267"
        y="550"
        font-size="48"
        font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
      >
        ${
          !starred ? null : `${starred[starredIndex]?.full_name.split("/")[0]}/`
        }
        <tspan font-weight="bold">
          ${!starred ? null : starred[starredIndex]?.full_name.split("/")[1]}
        </tspan>
      </text>
      ${
        starred && starred[starredIndex].description !== null
          ? `
        <text
          fill="${
            !query.theme
              ? query.description
                ? `#${query.description}`
                : "#B4B4B4"
              : defaultThemes[query.theme].description
          }"
          x="202"
          y="609"
          font-size="30"
          font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
        >
          ${starred[starredIndex].description}
        </text>
      `
          : null
      }
      <g>
        ${
          starred[starredIndex].language == null
            ? `
            <g
              fill="${
                !query.theme
                  ? query.stats
                    ? `#${query.stats}`
                    : "#838383"
                  : defaultThemes[query.theme].stats
              }"
            >
              <path
                fill-rule="evenodd"
                d="M215.375 654.094a1.405 1.405 0 11-2.812 0c0-.373.148-.731.411-.995a1.41 1.41 0 011.989 0c.264.264.412.622.412.995zm0 3.979a4.226 4.226 0 002.233-1.843 4.22 4.22 0 10-7.797-2.848 4.214 4.214 0 002.752 4.691v1.646a4.218 4.218 0 004.218 4.219h2.813v3.99a4.215 4.215 0 00-2.754 4.692 4.22 4.22 0 105.566-4.692v-3.99h2.813a4.22 4.22 0 004.219-4.219v-1.646a4.22 4.22 0 10-2.813 0v1.646a1.405 1.405 0 01-1.406 1.406h-8.438a1.405 1.405 0 01-1.406-1.406v-1.646zm7.031 13.833a1.407 1.407 0 11-2.814 0 1.407 1.407 0 012.814 0zm5.625-16.406a1.407 1.407 0 100-2.814 1.407 1.407 0 000 2.814z"
                clip-rule="evenodd"
              />
              <text
                fill="${
                  !query.theme
                    ? query.stats_text
                      ? `#${query.stats_text}`
                      : "#838383"
                    : defaultThemes[query.theme].statsText
                }"
                x="245"
                y="670"
                font-size="24"
                font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
              >
                ${numeral(starred[starredIndex].forks).format("0a")}
              </text>
            </g>
            <g
              fill="${
                !query.theme
                  ? query.stats
                    ? `#${query.stats}`
                    : "#838383"
                  : defaultThemes[query.theme].stats
              }"
            >
              <svg
                x="322"
                y="646"
                aria-hidden="true"
                viewBox="0 0 16 16"
                height="30"
                width="30"
                font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
              >
                <path
                  fill-rule="evenodd"
                  d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                />
              </svg>
              <text
                fill="${
                  !query.theme
                    ? query.stats_text
                      ? `#${query.stats_text}`
                      : "#838383"
                    : defaultThemes[query.theme].statsText
                }"
                x="360"
                y="670"
                font-size="24"
                font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
              >
                ${!starred ? null : numeral(mostStarred).format("0a")}
              </text>
            </g>
        `
            : `
            ${
              starred && colors
                ? `
              <circle
                cx="217"
                cy="661"
                r="10"
                fill="${colors[starred[starredIndex].language].color}"
              />
            `
                : null
            }

            <text
              fill="${
                !query.theme
                  ? query.stats_text
                    ? `#${query.stats_text}`
                    : "#838383"
                  : defaultThemes[query.theme].statsText
              }"
              x="238"
              y="671"
              font-size="24"
              font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
            >
              ${!starred ? null : starred[starredIndex].language}
            </text>
            <g
              fill="${
                !query.theme
                  ? query.stats
                    ? `#${query.stats}`
                    : "#838383"
                  : defaultThemes[query.theme].stats
              }"
            >
              <path
                fill-rule="evenodd"
                d="M547.375 654.094a1.405 1.405 0 11-2.812 0c0-.373.148-.731.411-.995a1.41 1.41 0 011.989 0c.264.264.412.622.412.995zm0 3.979a4.226 4.226 0 002.233-1.843 4.22 4.22 0 10-7.797-2.848 4.214 4.214 0 002.752 4.691v1.646a4.218 4.218 0 004.218 4.219h2.813v3.99a4.215 4.215 0 00-2.754 4.692 4.22 4.22 0 105.566-4.692v-3.99h2.813a4.22 4.22 0 004.219-4.219v-1.646a4.22 4.22 0 10-2.813 0v1.646a1.405 1.405 0 01-1.406 1.406h-8.438a1.405 1.405 0 01-1.406-1.406v-1.646zm7.031 13.833a1.407 1.407 0 11-2.814 0 1.407 1.407 0 012.814 0zm5.625-16.406a1.407 1.407 0 100-2.814 1.407 1.407 0 000 2.814z"
                clip-rule="evenodd"
              />
              <text
                fill="${
                  !query.theme
                    ? query.stats_text
                      ? `#${query.stats_text}`
                      : "#838383"
                    : defaultThemes[query.theme].statsText
                }"
                x="586"
                y="670"
                font-size="24"
                font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
              >
                ${
                  !starred
                    ? null
                    : numeral(starred[starredIndex].forks).format("0a")
                }
              </text>
            </g>
            <g
              fill="${
                !query.theme
                  ? query.stats
                    ? `#${query.stats}`
                    : "#838383"
                  : defaultThemes[query.theme].stats
              }"
            >
              <path
                fill-rule="evenodd"
                d="M431 649.469a1.407 1.407 0 011.262.784l3.528 7.153 7.894 1.147a1.405 1.405 0 01.78 2.398l-5.711 5.569 1.348 7.86a1.4 1.4 0 01-.559 1.376 1.407 1.407 0 01-1.481.107L431 672.151l-7.061 3.712a1.408 1.408 0 01-1.956-.714 1.407 1.407 0 01-.084-.767l1.35-7.864-5.715-5.567a1.399 1.399 0 01-.357-1.443 1.411 1.411 0 011.137-.957l7.893-1.145 3.531-7.153a1.407 1.407 0 011.262-.784zm0 4.584l-2.597 5.26a1.41 1.41 0 01-1.058.768l-5.806.844 4.2 4.095c.163.159.285.356.356.572.07.217.087.448.049.673l-.99 5.783 5.191-2.73a1.399 1.399 0 011.309 0l5.194 2.73-.994-5.783a1.41 1.41 0 01.405-1.245l4.2-4.093-5.805-.844a1.405 1.405 0 01-1.057-.769L431 654.051v.002z"
                clip-rule="evenodd"
              />
              <text
                fill="${
                  !query.theme
                    ? query.stats_text
                      ? `#${query.stats_text}`
                      : "#838383"
                    : defaultThemes[query.theme].statsText
                }"
                x="459"
                y="674"
                font-size="24"
                font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
              >
                ${!starred ? null : numeral(mostStarred).format("0a")}
              </text>
            </g>
        `
        }
      </g>
    </g>
      <g>
        ${
          github && github.location
            ? `
          <g
            fill="${
              !query.theme
                ? query.stats
                  ? `#${query.stats}`
                  : "#C4C4C4"
                : defaultThemes[query.theme].stats
            }"
          >
            <path d="M177 815.823c-4.35 0-7.89-3.538-7.89-7.888s3.542-7.893 7.89-7.893 7.89 3.541 7.89 7.889c0 4.348-3.542 7.886-7.89 7.886v.006zm0-12.652a4.771 4.771 0 00-4.765 4.764 4.768 4.768 0 004.765 4.761 4.77 4.77 0 004.765-4.763 4.773 4.773 0 00-4.765-4.766v.004z" />
            <path d="M195.108 808.271c0-9.979-8.125-18.104-18.108-18.104s-18.108 8.125-18.108 18.104c0 3.962 1.256 7.725 3.631 10.881l.006-.004.015.031c3.391 4.313 13.079 11.994 13.489 12.317a1.559 1.559 0 001.938.002c.41-.323 10.098-8 13.489-12.317l.015-.029.004.004a17.954 17.954 0 003.629-10.881v-.004zm-18.108 20c-2.55-2.063-9.417-7.74-11.992-11.011a14.834 14.834 0 01-2.991-8.983c0-8.262 6.723-14.985 14.983-14.985 8.26 0 14.983 6.721 14.983 14.979 0 3.271-1.035 6.379-2.991 8.985-2.575 3.271-9.442 8.946-11.992 11.011v.004z" />
          </g>
        `
            : null
        }

        <text
          fill="${
            !query.theme
              ? query.stats_text
                ? `#${query.stats_text}`
                : "#676767"
              : defaultThemes[query.theme].statsText
          }"
          x="216"
          y="823"
          font-size="40"
          font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
        >
          ${github ? github.location : null}
        </text>

        ${
          github && github.blog
            ? `
          <g
            fill="${
              !query.theme
                ? query.stats
                  ? `#${query.stats}`
                  : "#C4C4C4"
                : defaultThemes[query.theme].stats
            }"
          >
            <path d="M780.917 817.135a1.7 1.7 0 01-.423-.056 10.812 10.812 0 01-5.823-4.025 10.842 10.842 0 01-2.017-8.11 10.856 10.856 0 014.308-7.163l7.355-5.433c4.837-3.575 11.687-2.55 15.27 2.292a10.872 10.872 0 012.015 8.114 10.854 10.854 0 01-4.312 7.163l-3.084 2.279a1.564 1.564 0 11-1.858-2.517l3.083-2.281a7.732 7.732 0 003.075-5.104 7.756 7.756 0 00-1.437-5.788c-2.552-3.45-7.442-4.187-10.896-1.633l-7.354 5.433a7.749 7.749 0 00-3.073 5.104 7.726 7.726 0 001.437 5.788 7.715 7.715 0 004.15 2.869 1.567 1.567 0 011.084 1.933 1.564 1.564 0 01-1.505 1.14l.005-.005z" />
            <path d="M771.146 831.946a10.915 10.915 0 01-8.802-4.427 10.855 10.855 0 01-2.017-8.113 10.854 10.854 0 014.313-7.162l3.079-2.279a1.564 1.564 0 011.86 2.516l-3.083 2.282a7.739 7.739 0 00-3.073 5.104 7.746 7.746 0 001.437 5.787c2.553 3.452 7.438 4.188 10.896 1.636l7.35-5.434c3.454-2.552 4.188-7.437 1.636-10.896a7.71 7.71 0 00-4.15-2.866 1.565 1.565 0 01-1.084-1.931 1.574 1.574 0 011.93-1.088 10.81 10.81 0 015.82 4.025c3.577 4.842 2.55 11.692-2.291 15.271l-7.354 5.433a10.81 10.81 0 01-6.469 2.138l.002.004z" />
          </g>
        `
            : null
        }

        <text
          fill="${
            !query.theme
              ? query.stats_text
                ? `#${query.stats_text}`
                : "#676767"
              : defaultThemes[query.theme].statsText
          }"
          x="817"
          y="823"
          font-size="40"
          text-decoration="underline"
          font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
        >
          ${!github ? null : github.blog}
        </text>

        <g>
          ${
            github && github.created_at
              ? `
            <g
              fill="${
                !query.theme
                  ? query.stats
                    ? `#${query.stats}`
                    : "#C4C4C4"
                  : defaultThemes[query.theme].stats
              }"
            >
              <path d="M1317.06 790.167h-32.12a4.777 4.777 0 00-4.77 4.775v32.116a4.777 4.777 0 004.77 4.775h32.12c2.63 0 4.77-2.141 4.77-4.775v-32.116a4.777 4.777 0 00-4.77-4.775zm1.65 36.891c0 .911-.74 1.65-1.65 1.65h-32.12c-.91 0-1.65-.739-1.65-1.65v-27.687c0-.911.74-1.646 1.65-1.65h32.12c.91 0 1.65.739 1.65 1.646v27.696-.005z" />
              <path d="M1290.65 806.906a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm0 9.179a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm20.7-9.179a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm0 9.179a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm-10.35-9.179a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm0 9.179a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm-10.35 9.021a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm10.35 0a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354z" />
            </g>
          `
              : null
          }

          <text
            fill="${
              !query.theme
                ? query.stats_text
                  ? `#${query.stats_text}`
                  : "#676767"
                : defaultThemes[query.theme].statsText
            }"
            x="1342"
            y="823"
            font-size="40"
            font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
          >
          ${
            github.created_at
              ? `Joined ${new Date(github.created_at).toDateString()}`
              : null
          }
          </text>
        </g>
      </g>
      <image
        clip-path="url(#prefix__a)"
        xlink:href="data:image/png;base64,${await urlBase(
          `https://github.com/${github.login}.png`
        )}"
        width="350"
        height="390"
        x="105"
        y="50"
      />
    </svg>
  `;
};
