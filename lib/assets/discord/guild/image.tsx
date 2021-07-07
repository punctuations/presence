import * as React from "react";
import numeral from "numeral";

import { themes } from "@themes";
import { ThemesTypes } from "@lib/types/ThemesTypes";
import { DiscordGuildResponse } from "@lib/types/DiscordResponse";

import { urlBase } from "@lib/components/urlBase";

export const DiscordGuildImage = async (
  discord: DiscordGuildResponse,
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
    showAccent?: string;
    bottom?: string;
    rounded?: string;
  }
) => {
  const defaultThemes: ThemesTypes = themes;

  function escapeHtml(unsafe: string | undefined) {
    if (unsafe) {
      return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    } else {
      return "";
    }
  }

  return `<svg
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

<g>
${
  !query.bg || !query.theme
    ? `<clipPath id="splash">
            <rect
                    fill="${
                      discord.discovery_splash || discord.splash ? "" : "#fff"
                    }"
                  width="1920" height="940" 
                  />
        </clipPath>`
    : `<path
        fill="${
          !query?.theme ? `#${query.bg}` : defaultThemes[query?.theme].bg
        }"
        d="M0 0h1920v940H0z"
      />`
}

<image
          preserveAspectRatio="xMaxYMid slice"
          clip-path="url(#splash)"
          xlink:href="data:image/png;base64,${await urlBase(
            discord.discovery_splash
              ? `https://cdn.discordapp.com/banners/${discord.id}/${discord.discovery_splash}.jpg?size=1024`
              : `https://cdn.discordapp.com/banners/${discord.id}/${discord.splash}.jpg?size=1024`
          )}"
           width="1920"
           height="940"
           x="0"
           y="0" />
</g>

<path
        fill="${
          !query.theme
            ? query.icon
              ? `#${query.icon}`
              : "#C4C4C4"
            : defaultThemes[query.theme].icon
        }"
        fill-rule="evenodd"
        d="M100.327 69.063a40.282 40.282 0 00-10.177-3.26.153.153 0 00-.164.08 30.11 30.11 0 00-1.267 2.688 36.87 36.87 0 00-11.43 0A27.578 27.578 0 0076 65.883a.159.159 0 00-.163-.08 40.172 40.172 0 00-10.178 3.26.147.147 0 00-.067.059c-6.482 10.001-8.258 19.756-7.386 29.39a.18.18 0 00.065.121c4.276 3.244 8.42 5.213 12.485 6.518a.159.159 0 00.175-.059 30.847 30.847 0 002.554-4.291.165.165 0 00-.086-.227 26.965 26.965 0 01-3.9-1.92.169.169 0 01-.016-.275c.262-.203.524-.414.774-.627a.15.15 0 01.162-.022c8.183 3.858 17.042 3.858 25.128 0a.15.15 0 01.163.02c.25.213.513.426.777.63.09.069.085.214-.014.274a25.306 25.306 0 01-3.902 1.918.166.166 0 00-.085.229 34.615 34.615 0 002.552 4.289c.04.057.11.082.176.061 4.085-1.305 8.228-3.274 12.505-6.518a.17.17 0 00.065-.118c1.042-11.139-1.746-20.814-7.393-29.391a.128.128 0 00-.065-.061zM74.708 92.646c-2.463 0-4.493-2.336-4.493-5.204 0-2.869 1.99-5.204 4.493-5.204 2.523 0 4.533 2.356 4.494 5.204 0 2.868-1.99 5.204-4.494 5.204zm16.614 0c-2.463 0-4.493-2.336-4.493-5.204 0-2.869 1.99-5.204 4.493-5.204 2.523 0 4.533 2.356 4.494 5.204 0 2.868-1.97 5.204-4.494 5.204z"
        clip-rule="evenodd"
      />

      <clipPath id="icon">
        <rect x='${query.bottom?.toLowerCase() === "true" ? "815" : "614"}'
            y='
    ${query.bottom?.toLowerCase() === "true" ? "250" : "320"}
    ' width="290" height="290" rx="26"/> 
      </clipPath>
      
      ${
        query.showAccent?.toLowerCase() !== "false"
          ? `
      <rect fill="${
        !query?.theme
          ? query?.accent
            ? `#${query?.accent}`
            : "#000"
          : defaultThemes[query?.theme].accent
      }" x='${query.bottom?.toLowerCase() === "true" ? "800" : "599"}'
            y='
    ${query.bottom?.toLowerCase() === "true" ? "235" : "305 "}
    ' width="320" height="320" rx="26" />`
          : ""
      }
    
    <text
          fill="${
            !query?.theme
              ? query?.text
                ? `#${query?.text}`
                : "#000"
              : defaultThemes[query?.theme].text
          }"
          x='${query.bottom?.toLowerCase() === "true" ? "960" : "940"}'
          y='${query.bottom?.toLowerCase() === "true" ? "620" : "450"}'
          ${
            query.bottom?.toLowerCase() === "true" ? 'text-anchor="middle"' : ""
          }
          font-size="64"
          font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'>${escapeHtml(
            discord.name
          )}</text>
    <text
          fill="${
            !query?.theme
              ? query?.stats
                ? `#${query?.stats}`
                : "#000"
              : defaultThemes[query?.theme].stats
          }"
           x='${query.bottom?.toLowerCase() === "true" ? "960" : "940"}'
          y='${query.bottom?.toLowerCase() === "true" ? "690" : "530"}'
          ${
            query.bottom?.toLowerCase() === "true" ? 'text-anchor="middle"' : ""
          }
          font-size="54"
          font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'>${numeral(
            discord.approximate_member_count
          ).format("0a")} <tspan fill="${
    !query?.theme
      ? query?.stats_text
        ? `#${query?.stats_text}`
        : "#000"
      : defaultThemes[query?.theme].statsText
  }">Guild Members</tspan></text>
          
    <image
          clip-path="url(#icon)"
          xlink:href="data:image/png;base64,${await urlBase(
            `https://cdn.discordapp.com/icons/${discord.id}/${discord.icon}.png`
          )}"
           width="290"
           height="290"
           x='${query.bottom?.toLowerCase() === "true" ? "815" : "614"}'
          y='${query.bottom?.toLowerCase() === "true" ? "250" : "320"}' />
    </svg>`;
};
