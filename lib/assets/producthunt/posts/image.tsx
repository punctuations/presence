import * as React from "react";
import numeral from "numeral";

import { themes } from "@themes";
import { ThemesTypes } from "@lib/types/ThemesTypes";
import { ProductHuntAllResponse } from "@lib/types/ProductHuntResponse";
import { urlBase } from "@lib/components/urlBase";
import { escapeUnsafe } from "@lib/components/escapeUnsafe";

export const ProductHuntAllImage = async (
  product: ProductHuntAllResponse,
  query: {
    [p: string]: string | string[] | undefined;
    username?: string;
    repo?: string;
    bg?: string;
    text?: string;
    description?: string;
    stats?: string;
    stats_text?: string;
    icon?: string;
    theme?: string;
    show_language?: string;
    rounded?: string;
  }
) => {
  const defaultThemes: ThemesTypes = themes;

  return `
    <svg
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
          !query.theme
            ? query.bg
              ? `#${query.bg}`
              : "#fff"
            : defaultThemes[query.theme].bg
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
        d="M89.8652 86.3672C89.8652 88.3691 88.2344 90 86.2324 90H79.3672V82.7344H86.2324C88.2344 82.7344 89.8652 84.3652 89.8652 86.3672ZM107.219 90C107.219 103.379 96.3789 114.219 83 114.219C69.6211 114.219 58.7812 103.379 58.7812 90C58.7812 76.6211 69.6211 65.7812 83 65.7812C96.3789 65.7812 107.219 76.6211 107.219 90ZM94.709 86.3672C94.709 81.6895 90.9102 77.8906 86.2324 77.8906H74.5234V102.109H79.3672V94.8438H86.2324C90.9102 94.8438 94.709 91.0449 94.709 86.3672Z"
        clip-rule="evenodd"
      />

      <clipPath id="prefix__a">
        <rect width="290" height="306" x="1540" y="82" rx="31" />
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
          x="202"
          y="250"
          font-weight="bold"
          font-size="86"
          font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
        >
          ${
            product.name.length > 27
              ? `${product.name.substring(0, 27)}...`
              : product.name
          }
        </text>
        ${
          product.tagline == null
            ? null
            : `
            ${
              product.tagline.length > 72
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
                  y="325"
                  font-size="40"
                  font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
                >
                  ${escapeUnsafe(product.tagline.substring(0, 68))}
                </text>
                <text
                  fill="${
                    !query.theme
                      ? query.description
                        ? `#${query.description}`
                        : "#B4B4B4"
                      : defaultThemes[query.theme].description
                  }"
                  x="202"
                  y="375"
                  font-size="40"
                  font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
                >
                  ${
                    product.tagline.length >= 154
                      ? `${escapeUnsafe(product.tagline.substring(68, 154))}...`
                      : escapeUnsafe(product.tagline.substring(68))
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
                x="202"
                y="325"
                font-size="40"
                font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
              >
                ${escapeUnsafe(product.tagline)}
              </text>
            `
            }
        `
        }
        <g>
            <g>
                <text
                 fill="${
                   !query.theme
                     ? query.stats_text
                       ? `#${query.stats_text}`
                       : "#676767"
                     : defaultThemes[query.theme].statsText
                 }"
                  x="200"
                  y="490"
                  font-size="36"
                  font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
                >
                ${
                  product.topics.length >= 2
                    ? `${product.topics[0].name} | ${product.topics[1].name}`
                    : product.topics[0].name
                }
                </text>
            </g>
            <g>
                <path
                    fill="${
                      !query.theme
                        ? query.stats
                          ? `#${query.stats}`
                          : "#838383"
                        : defaultThemes[query.theme].stats
                    }"
                    d="M744.263 459.671L735.621 459.65H735.617C726.504 459.65 719.367 466.79 719.367 475.904C719.367 484.442 726.004 490.917 734.919 491.258V499.233C734.919 499.458 735.01 499.829 735.169 500.073C735.465 500.542 735.969 500.796 736.485 500.796C736.773 500.796 737.063 500.717 737.323 500.55C737.873 500.2 750.808 491.925 754.173 489.079C758.135 485.725 760.506 480.808 760.513 475.929V475.894C760.5 466.796 753.367 459.671 744.263 459.669V459.671ZM752.152 486.696C749.79 488.696 742.023 493.79 738.044 496.369V489.729C738.044 488.867 737.346 488.167 736.481 488.167H735.656C728.031 488.167 722.494 483.008 722.494 475.904C722.494 468.542 728.26 462.775 735.619 462.775L744.258 462.796H744.263C751.621 462.796 757.388 468.558 757.392 475.913C757.385 479.892 755.429 483.921 752.154 486.696H752.152Z"
                />
                <text
                  fill="${
                    !query.theme
                      ? query.stats_text
                        ? `#${query.stats_text}`
                        : "#676767"
                      : defaultThemes[query.theme].statsText
                  }"
                  x="790"
                  y="490"
                  font-size="36"
                  font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
                >
                  ${numeral(product.comments_count).format("0a")}
                </text>
            </g>
            <g>
                <path
                    d="M1161.75 497.75L1181 458.413L1200.25 497.75H1161.75Z"
                    stroke-width="3"
                    stroke="${
                      !query.theme
                        ? query.stats
                          ? `#${query.stats}`
                          : "#838383"
                        : defaultThemes[query.theme].stats
                    }" />
                     <text
                      fill="${
                        !query.theme
                          ? query.stats_text
                            ? `#${query.stats_text}`
                            : "#676767"
                          : defaultThemes[query.theme].statsText
                      }"
                      x="1240"
                      y="490"
                      font-size="36"
                      font-family='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
                    >
                  ${numeral(product.votes_count).format("0a")}
                </text>
            </g>
        </g>
      </g>

      <image
        clip-path="url(#prefix__a)"
        xlink:href="data:image/png;base64,${await urlBase(
          product.thumbnail.image_url
        )}"
        width="390"
        height="390"
        x="1490"
        y="50"
      />
    </svg>
  `;
};
