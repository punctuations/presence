import * as React from "react";

import { themes } from "@themes";
import { ThemesTypes } from "@lib/types/ThemesTypes";
import { DiscordUserResponse } from "@lib/types/DiscordResponse";

import { urlBase } from "@lib/components/urlBase";
import { escapeUnsafe } from "@lib/components/escapeUnsafe";
import { flags } from "@lib/components/flag";
import { LanyardResponse } from "@lib/types/LanyardResponse";
import { DiscordBioResponse } from "@lib/types/DiscordBioResponse";
import { isTester } from "@lib/components/testers";

export const DiscordImage = async (
  discord: DiscordUserResponse,
  lanyard: LanyardResponse,
  bio: DiscordBioResponse,
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
            ? `${escapeUnsafe(discord.username.slice(0, 12))}...`
            : escapeUnsafe(discord.username)
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
          ${escapeUnsafe(discord.username)}
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
              lanyard.data.activities[1]?.type === 0 ||
              lanyard.data.listening_to_spotify
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
                ? `${escapeUnsafe(lanyard.data.spotify.song)} - ${escapeUnsafe(
                    lanyard.data.spotify.album
                  )}`.length > 37
                  ? `${escapeUnsafe(
                      lanyard.data.spotify.song
                    )} - ${escapeUnsafe(lanyard.data.spotify.album)}`.substring(
                      0,
                      38
                    ) + "..."
                  : `${escapeUnsafe(
                      lanyard.data.spotify.song
                    )} - ${escapeUnsafe(lanyard.data.spotify.album)}`
                : lanyard.data.activities[0]?.type === 0
                ? lanyard.data.activities[0]?.assets?.small_text
                  ? escapeUnsafe(lanyard.data.activities[0]?.assets?.small_text)
                  : escapeUnsafe(lanyard.data.activities[0].name)
                : lanyard.data.activities[1]
                ? lanyard.data.activities[1]?.assets?.small_text
                  ? escapeUnsafe(lanyard.data.activities[1]?.assets?.small_text)
                  : escapeUnsafe(lanyard.data.activities[1].name)
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
                ? escapeUnsafe(lanyard.data.spotify.artist)
                : lanyard.data.activities[0]?.type === 0
                ? escapeUnsafe(lanyard.data.activities[0]?.state)
                : lanyard.data.activities[1]
                ? escapeUnsafe(lanyard.data.activities[1]?.state)
                : ""
            }
          </text>
      </g>`
              : `${
                  !bio.message && bio.payload?.user.details.description
                    ? `<text
                  fill="${
                    !query.theme
                      ? query.description
                        ? `#${query.description}`
                        : "#B4B4B4"
                      : defaultThemes[query.theme].description
                  }"
              x="446"
              y="305"
              font-size="36"
              font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
              >
              ${
                bio.payload.user.details.description.length >= 84
                  ? escapeUnsafe(
                      `${bio.payload.user.details.description.substring(
                        0,
                        84
                      )}...`
                    )
                  : escapeUnsafe(bio.payload.user.details.description)
              }
              </text>`
                    : ""
                }
                 ${
                   lanyard.data.activities[0].emoji?.id
                     ? `<image 
                        x="470"
                        y="${!bio.message ? "340" : "290"}"
                        width="50"
                        height="50"
                        xlink:href="https://cdn.discordapp.com/emojis/${
                          lanyard.data.activities[0].emoji.id
                        }.png" />`
                     : ""
                 }
               
               <text fill="${
                 !query?.theme
                   ? query?.desc
                     ? `#${query?.desc}`
                     : "#b4b4b4"
                   : defaultThemes[query?.theme].description
               }" x="${lanyard.data.activities[0].emoji?.id ? "540" : "470"}"
                 y="${!bio.message ? "375" : "325"}" 
                font-size="36"
                font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'>
                ${escapeUnsafe(lanyard.data.activities[0].state)}
                </text>`
            : !bio.message && bio.payload
            ? `${
                bio.payload.user.details.description &&
                bio.payload.user.details.description.length > 84
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
                y="305"
                font-size="36"
                font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
              >
                ${escapeUnsafe(
                  bio.payload.user.details.description.substring(0, 84)
                )}
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
                y="355"
                font-size="36"
                font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
              >
                ${
                  bio.payload.user.details.description.length >= 154
                    ? `${escapeUnsafe(
                        bio.payload.user.details.description.substring(84, 154)
                      )}...`
                    : bio.payload.user.details.description
                    ? escapeUnsafe(
                        bio.payload.user.details.description.substring(84)
                      )
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
              y="305"
              font-size="40"
              font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
            >
              ${escapeUnsafe(bio.payload.user.details.description)}
            </text>
          `
              }`
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
        isTester(discord.id)
          ? `<circle cx="407" cy="96" r="32" fill="${
              !query?.theme
                ? query?.bg
                  ? `#${query?.bg}`
                  : "#fff"
                : defaultThemes[query?.theme].bg
            }"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M407 76C407.663 76 408.299 76.2634 408.768 76.7322C409.237 77.2011 409.5 77.837 409.5 78.5V81C409.5 81.663 409.237 82.2989 408.768 82.7678C408.299 83.2366 407.663 83.5 407 83.5C406.337 83.5 405.701 83.2366 405.232 82.7678C404.763 82.2989 404.5 81.663 404.5 81V78.5C404.5 77.837 404.763 77.2011 405.232 76.7322C405.701 76.2634 406.337 76 407 76V76ZM417 96C417 98.6522 415.946 101.196 414.071 103.071C412.196 104.946 409.652 106 407 106C404.348 106 401.804 104.946 399.929 103.071C398.054 101.196 397 98.6522 397 96C397 93.3478 398.054 90.8043 399.929 88.9289C401.804 87.0536 404.348 86 407 86C409.652 86 412.196 87.0536 414.071 88.9289C415.946 90.8043 417 93.3478 417 96V96ZM415.84 108.375L417.608 110.142C418.079 110.598 418.711 110.85 419.366 110.844C420.021 110.838 420.649 110.576 421.112 110.112C421.576 109.649 421.838 109.021 421.844 108.366C421.85 107.711 421.598 107.079 421.142 106.608L419.375 104.84C418.903 104.385 418.272 104.133 417.616 104.138C416.961 104.144 416.334 104.407 415.87 104.87C415.407 105.334 415.144 105.961 415.138 106.616C415.133 107.272 415.385 107.903 415.84 108.375V108.375ZM421.14 81.8575C421.609 82.3263 421.872 82.9621 421.872 83.625C421.872 84.2879 421.609 84.9237 421.14 85.3925L419.375 87.16C419.144 87.3988 418.869 87.5892 418.564 87.7203C418.259 87.8513 417.93 87.9202 417.599 87.9231C417.267 87.926 416.937 87.8628 416.63 87.7371C416.323 87.6114 416.044 87.4257 415.809 87.191C415.574 86.9563 415.389 86.6771 415.263 86.3699C415.137 86.0626 415.074 85.7334 415.077 85.4015C415.08 85.0695 415.149 84.7415 415.28 84.4365C415.411 84.1315 415.601 83.8556 415.84 83.625L417.608 81.8575C418.076 81.3888 418.712 81.1255 419.375 81.1255C420.038 81.1255 420.674 81.3888 421.142 81.8575H421.14ZM424.5 98.5C425.163 98.5 425.799 98.2366 426.268 97.7678C426.737 97.2989 427 96.663 427 96C427 95.337 426.737 94.7011 426.268 94.2322C425.799 93.7634 425.163 93.5 424.5 93.5H422C421.337 93.5 420.701 93.7634 420.232 94.2322C419.763 94.7011 419.5 95.337 419.5 96C419.5 96.663 419.763 97.2989 420.232 97.7678C420.701 98.2366 421.337 98.5 422 98.5H424.5ZM407 108.5C407.663 108.5 408.299 108.763 408.768 109.232C409.237 109.701 409.5 110.337 409.5 111V113.5C409.5 114.163 409.237 114.799 408.768 115.268C408.299 115.737 407.663 116 407 116C406.337 116 405.701 115.737 405.232 115.268C404.763 114.799 404.5 114.163 404.5 113.5V111C404.5 110.337 404.763 109.701 405.232 109.232C405.701 108.763 406.337 108.5 407 108.5V108.5ZM394.625 87.16C394.857 87.3923 395.133 87.5766 395.436 87.7023C395.739 87.8281 396.064 87.8929 396.393 87.893C396.721 87.8931 397.046 87.8286 397.35 87.703C397.653 87.5774 397.929 87.3934 398.161 87.1612C398.394 86.9291 398.578 86.6536 398.704 86.3502C398.829 86.0469 398.894 85.7218 398.894 85.3934C398.894 85.065 398.83 84.7398 398.704 84.4364C398.579 84.133 398.395 83.8573 398.163 83.625L396.392 81.8575C395.921 81.4021 395.289 81.1501 394.634 81.1558C393.979 81.1615 393.351 81.4244 392.888 81.888C392.424 82.3515 392.162 82.9785 392.156 83.634C392.15 84.2895 392.402 84.921 392.857 85.3925L394.625 87.16V87.16ZM398.16 108.375L396.392 110.142C395.921 110.598 395.289 110.85 394.634 110.844C393.979 110.838 393.351 110.576 392.888 110.112C392.424 109.649 392.162 109.021 392.156 108.366C392.15 107.711 392.402 107.079 392.857 106.608L394.625 104.84C395.097 104.385 395.728 104.133 396.384 104.138C397.039 104.144 397.666 104.407 398.13 104.87C398.593 105.334 398.856 105.961 398.862 106.616C398.867 107.272 398.615 107.903 398.16 108.375V108.375ZM392 98.5C392.663 98.5 393.299 98.2366 393.768 97.7678C394.237 97.2989 394.5 96.663 394.5 96C394.5 95.337 394.237 94.7011 393.768 94.2322C393.299 93.7634 392.663 93.5 392 93.5H389.5C388.837 93.5 388.201 93.7634 387.732 94.2322C387.263 94.7011 387 95.337 387 96C387 96.663 387.263 97.2989 387.732 97.7678C388.201 98.2366 388.837 98.5 389.5 98.5H392Z" fill="#FEE75C"/>`
          : ""
      }
      
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
                            ? lanyard.data.activities[0].application_id
                            : 0
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
