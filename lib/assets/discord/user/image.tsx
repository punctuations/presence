import * as React from "react";

import { themes } from "@themes";
import { ThemesTypes } from "@lib/types/ThemesTypes";
import { DiscordUserResponse } from "@lib/types/DiscordResponse";

import { urlBase } from "@lib/components/urlBase";
import { flags } from "@lib/components/flag";
import { LanyardResponse } from "@lib/types/LanyardResponse";

export const DiscordImage = async (
  discord: DiscordUserResponse,
  lanyard: LanyardResponse,
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

  function discordDefault(discriminator: number) {
    switch (discriminator % 5) {
      case 0 || 5:
        return "https://cdn.discordapp.com/embed/avatars/0.png";
      case 1 || 6:
        return "https://cdn.discordapp.com/embed/avatars/1.png";
      case 2 || 7:
        return "https://cdn.discordapp.com/embed/avatars/2.png";
      case 3 || 8:
        return "https://cdn.discordapp.com/embed/avatars/3.png";
      case 4 || 9:
        return "https://cdn.discordapp.com/embed/avatars/4.png";
    }
  }

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
        d="M100.327 69.063a40.282 40.282 0 00-10.177-3.26.153.153 0 00-.164.08 30.11 30.11 0 00-1.267 2.688 36.87 36.87 0 00-11.43 0A27.578 27.578 0 0076 65.883a.159.159 0 00-.163-.08 40.172 40.172 0 00-10.178 3.26.147.147 0 00-.067.059c-6.482 10.001-8.258 19.756-7.386 29.39a.18.18 0 00.065.121c4.276 3.244 8.42 5.213 12.485 6.518a.159.159 0 00.175-.059 30.847 30.847 0 002.554-4.291.165.165 0 00-.086-.227 26.965 26.965 0 01-3.9-1.92.169.169 0 01-.016-.275c.262-.203.524-.414.774-.627a.15.15 0 01.162-.022c8.183 3.858 17.042 3.858 25.128 0a.15.15 0 01.163.02c.25.213.513.426.777.63.09.069.085.214-.014.274a25.306 25.306 0 01-3.902 1.918.166.166 0 00-.085.229 34.615 34.615 0 002.552 4.289c.04.057.11.082.176.061 4.085-1.305 8.228-3.274 12.505-6.518a.17.17 0 00.065-.118c1.042-11.139-1.746-20.814-7.393-29.391a.128.128 0 00-.065-.061zM74.708 92.646c-2.463 0-4.493-2.336-4.493-5.204 0-2.869 1.99-5.204 4.493-5.204 2.523 0 4.533 2.356 4.494 5.204 0 2.868-1.99 5.204-4.494 5.204zm16.614 0c-2.463 0-4.493-2.336-4.493-5.204 0-2.869 1.99-5.204 4.493-5.204 2.523 0 4.533 2.356 4.494 5.204 0 2.868-1.97 5.204-4.494 5.204z"
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
        @${
          discord.username.length > 12
            ? `${escapeHtml(discord.username.slice(0, 12))}...`
            : escapeHtml(discord.username)
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
          ${escapeHtml(discord.username)}
            <tspan font-size="52" font-weight="normal">#${
              discord.discriminator
            }</tspan>
        </text>
        
        <g>
            ${await Promise.all(
              flags(discord.public_flags).map(
                async (flag, i): Promise<String> => {
                  return `<image xlink:href="data:image/svg+xml;base64,${await urlBase(
                    flag
                  )}" x="${440 + 75 * i}" y="200" width="60" height="60" />`;
                }
              )
            )}
        </g>
        
        ${
          lanyard.success
            ? lanyard.data.activities[0]?.type === 0 ||
              lanyard.data.activities[1]?.type === 0
              ? `<rect
        width="1350"
        height="250"
        x="445"
        y="300"
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
              : "#000"
            : defaultThemes[query.theme].accent
        }"
        rx="25.5"
      />
      <g>
        <clipPath id="icon">
            <rect width="200" height="200" x="470" y="325" rx="30" />
        </clipPath>
        <circle id="bg" fill="${
          !query.theme
            ? query.bg
              ? `#${query.bg}`
              : "#fff"
            : defaultThemes[query.theme].bg
        }" cx="655" cy="505" r="35" />
        <clipPath id="small-icon">
            <circle cx="655" cy="505" r="30" />
        </clipPath>
        
        
       <text 
            fill="${
              !query?.theme
                ? query?.desc
                  ? `#${query?.desc}`
                  : "#424242"
                : defaultThemes[query?.theme].description
            }"
            x="700" 
            y="370" 
            font-size="32"
            font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'>
            ${lanyard.data.listening_to_spotify ? "Listening to..." : ""}
          </text> 
        <text 
            fill="${
              !query?.theme
                ? query?.text
                  ? `#${query?.text}`
                  : "#000"
                : defaultThemes[query?.theme].text
            }"
            x="700" 
            y="${lanyard.data.listening_to_spotify ? "430" : "410"}" 
            font-size="52"
            font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'>
            ${
              lanyard.data.listening_to_spotify
                ? `${escapeHtml(lanyard.data.spotify.song)} - ${escapeHtml(
                    lanyard.data.spotify.album
                  )}`.length > 37
                  ? `${escapeHtml(lanyard.data.spotify.song)} - ${escapeHtml(
                      lanyard.data.spotify.album
                    )}`.substring(0, 38) + "..."
                  : `${escapeHtml(lanyard.data.spotify.song)} - ${escapeHtml(
                      lanyard.data.spotify.album
                    )}`
                : lanyard.data.activities[0]?.type === 0
                ? lanyard.data.activities[0]?.assets?.small_text
                  ? escapeHtml(lanyard.data.activities[0]?.assets?.small_text)
                  : escapeHtml(lanyard.data.activities[0].name)
                : lanyard.data.activities[1]
                ? lanyard.data.activities[1]?.assets?.small_text
                  ? escapeHtml(lanyard.data.activities[1]?.assets?.small_text)
                  : escapeHtml(lanyard.data.activities[1].name)
                : ""
            }
          </text>
          
          <text 
            fill="${
              !query?.theme
                ? query?.desc
                  ? `#${query?.desc}`
                  : "#424242"
                : defaultThemes[query?.theme].description
            }"
            x="700" 
            y="${lanyard.data.listening_to_spotify ? "490" : "470"}" 
            font-size="42"
            font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'>
            ${
              lanyard.data.listening_to_spotify
                ? escapeHtml(lanyard.data.spotify.artist)
                : lanyard.data.activities[0]?.type === 0
                ? escapeHtml(lanyard.data.activities[0]?.state)
                : lanyard.data.activities[1]
                ? escapeHtml(lanyard.data.activities[1]?.state)
                : ""
            }
          </text>
      </g>`
              : `${
                  lanyard.data.activities[0].emoji?.id
                    ? `<image 
                        x="470"
                        y="290"
                        width="50"
                        height="50"
                        xlink:href="https://cdn.discordapp.com/emojis/${lanyard.data.activities[0].emoji.id}.png" />`
                    : ""
                }
               
               <text fill="${
                 !query?.theme
                   ? query?.desc
                     ? `#${query?.desc}`
                     : "#b4b4b4"
                   : defaultThemes[query?.theme].description
               }" x="${lanyard.data.activities[0].emoji?.id ? "540" : "470"}"
                 y="325" 
                font-size="36"
                font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'>
                ${lanyard.data.activities[0].state}
                </text>`
            : ""
        }
      </g>

      <image
        clip-path="url(#prefix__a)"
        xlink:href="data:image/png;base64,${await urlBase(
          `${
            discord.avatar
              ? `https://cdn.discordapp.com/avatars/${discord.id}/${discord.avatar}.png`
              : discordDefault(parseInt(discord.discriminator))
          }`
        )}"
        width="350"
        height="390"
        x="105"
        y="50"
      />
      
      ${
        lanyard.success
          ? lanyard.data.activities.length > 0 ||
            lanyard.data.listening_to_spotify
            ? lanyard.data.activities[0]?.type === 0
              ? `<image
                clip-path="url(#icon)"
                xlink:href="data:image/png;base64,${await urlBase(
                  `${
                    lanyard.data.listening_to_spotify
                      ? lanyard.data.spotify.album_art_url
                      : lanyard.data.activities[0]?.assets?.large_image
                      ? `https://cdn.discordapp.com/app-assets/${BigInt(
                          lanyard.data.activities[0].application_id
                        ).toString()}/${
                          lanyard.data.activities[0].assets.large_image
                        }.png`
                      : ""
                  } `
                )}"
        width="200"
        height="200"
        x="470"
        y="325" />
        ${
          lanyard.data.listening_to_spotify ||
          lanyard.data.activities[0].assets?.small_image ||
          lanyard.data.activities[1].assets?.small_image
            ? `<use xlink:href="#bg"/>`
            : null
        }
        ${
          lanyard.data.listening_to_spotify ||
          lanyard.data.activities[0].assets?.small_image
            ? `<image
                        clip-path="url(#small-icon)"
                        xlink:href="data:image/png;base64,${await urlBase(
                          `${
                            lanyard.data.listening_to_spotify
                              ? "https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
                              : lanyard.data.activities[0]?.assets?.small_image
                              ? `https://cdn.discordapp.com/app-assets/${BigInt(
                                  lanyard.data.activities[0].application_id
                                ).toString()}/${
                                  lanyard.data.activities[0].assets.small_image
                                }.png`
                              : ""
                          } `
                        )}"
                width="60"
                height="60"
                x="625"
                y="475" />`
            : null
        }`
              : lanyard.data.activities[1]
              ? `<image
        clip-path="url(#icon)"
        xlink:href="data:image/png;base64,${await urlBase(
          `${
            lanyard.data.listening_to_spotify
              ? lanyard.data.spotify.album_art_url
              : lanyard.data.activities[1]?.assets?.large_image
              ? `https://cdn.discordapp.com/app-assets/${BigInt(
                  lanyard.data.activities[1].application_id
                ).toString()}/${
                  lanyard.data.activities[1].assets.large_image
                }.png`
              : ""
          }`
        )}"
        width="200"
        height="200"
        x="470"
        y="325" />
        ${
          lanyard.data.listening_to_spotify ||
          lanyard.data.activities[0].assets?.small_image ||
          lanyard.data.activities[1].assets?.small_image
            ? `<use xlink:href="#bg"/>`
            : null
        }
        ${
          lanyard.data.listening_to_spotify ||
          lanyard.data.activities[1].assets?.small_image
            ? `<image
                        clip-path="url(#small-icon)"
                        xlink:href="data:image/png;base64,${await urlBase(
                          `${
                            lanyard.data.listening_to_spotify
                              ? "https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
                              : lanyard.data.activities[1]?.assets?.small_image
                              ? `https://cdn.discordapp.com/app-assets/${BigInt(
                                  lanyard.data.activities[1].application_id
                                ).toString()}/${
                                  lanyard.data.activities[1].assets.small_image
                                }.png`
                              : ""
                          } `
                        )}"
                width="60"
                height="60"
                x="625"
                y="475" />`
            : null
        }`
              : null
            : null
          : null
      }
      
      
    </svg>`;
};
