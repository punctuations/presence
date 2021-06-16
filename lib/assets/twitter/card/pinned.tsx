import * as React from "react";
import numeral from "numeral";

import { themes } from "@themes";
import { ThemesTypes } from "@lib/types/ThemesTypes";
import { TwitterResponse } from "@lib/types/TwitterResponse";

export const PinnedTweet = (props: {
  twitter: TwitterResponse;
  bg: string | null;
  text: string | null;
  description: string | null;
  stats: string | null;
  statsText: string | null;
  accent: string | null;
  theme: string | null;
}) => {
  const defaultThemes: ThemesTypes = themes;

  return (
    <g>
      <rect
        width={1451}
        height={251}
        x={151.5}
        y={455.5}
        fill={
          !props.theme
            ? props.bg
              ? `#${props.bg}`
              : "#fff"
            : defaultThemes[props.theme].bg
        }
        stroke={
          !props.theme
            ? props.accent
              ? `#${props.accent}`
              : "#9D9D9D"
            : defaultThemes[props.theme].accent
        }
        rx={25.5}
      />
      <g>
        <path
          fill={
            !props.theme
              ? props.stats
                ? `#${props.stats}`
                : "#C4C4C4"
              : defaultThemes[props.theme].stats
          }
          d="M209.583 482.917l-1.666-5h14.166l-1.666 5v3.75c5 1.666 5 7.083 5 7.083h-20.834s0-5.417 5-7.083v-3.75z"
        />
        <path
          stroke={
            !props.theme
              ? props.stats
                ? `#${props.stats}`
                : "#C4C4C4"
              : defaultThemes[props.theme].stats
          }
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
          d="M215 494.167v7.916"
        />
        <text
          fill={
            !props.theme
              ? props.statsText
                ? `#${props.statsText}`
                : "#C4C4C4"
              : defaultThemes[props.theme].statsText
          }
          x={248}
          y={499}
          fontSize={24}
        >
          Pinned Tweet
        </text>
      </g>
      <clipPath id="twitter-pinned">
        <rect width={115} height={134} x={178} y={527} rx={31} />
      </clipPath>
      <text
        fill={
          !props.theme
            ? props.text
              ? `#${props.text}`
              : "#000"
            : defaultThemes[props.theme].text
        }
        x={302}
        y={560}
        fontSize={36}
        fontWeight="bold"
      >
        {props.twitter.data.name}
        <tspan
          fill={
            !props.theme
              ? props.description
                ? `#${props.description}`
                : "#B4B4B4"
              : defaultThemes[props.theme].description
          }
          y={557}
          fontSize={30}
          fontWeight="normal"
        >
          {` @${props.twitter.data.username}`}
        </tspan>
        <tspan
          fill={
            !props.theme
              ? props.statsText
                ? `#${props.statsText}`
                : "#C7C7C7"
              : defaultThemes[props.theme].statsText
          }
          y={557}
          fontSize={30}
          fontWeight="normal"
        >
          {!props.twitter.includes?.tweets[0].created_at
            ? ` • ${new Date().toDateString()}`
            : ` • ${new Date(
                props.twitter.includes?.tweets[0].created_at
              ).toDateString()}`}
        </tspan>
      </text>
      {props.twitter.includes?.tweets[0].text && (
        <>
          {props.twitter.includes?.tweets[0].text.length > 125 ? (
            <>
              <text
                fill={
                  !props.theme
                    ? props.description
                      ? `#${props.description}`
                      : "#B4B4B4"
                    : defaultThemes[props.theme].description
                }
                x={302}
                y={597}
                fontSize={24}
              >
                {props.twitter.includes?.tweets[0].text.substring(0, 125)}
              </text>{" "}
              <text
                fill={
                  !props.theme
                    ? props.description
                      ? `#${props.description}`
                      : "#B4B4B4"
                    : defaultThemes[props.theme].description
                }
                x={302}
                y={629}
                fontSize={24}
              >
                {props.twitter.includes?.tweets[0].text.length >= 240
                  ? `${props.twitter.includes?.tweets[0].text.substring(
                      125,
                      240
                    )}...`
                  : props.twitter.includes?.tweets[0].text.substring(125)}
              </text>{" "}
            </>
          ) : (
            <text
              fill={
                !props.theme
                  ? props.description
                    ? `#${props.description}`
                    : "#B4B4B4"
                  : defaultThemes[props.theme].description
              }
              x={302}
              y={597}
              fontSize={24}
            >
              {props.twitter.includes?.tweets[0].text}
            </text>
          )}
        </>
      )}

      <g>
        <g>
          <path
            fill={
              !props.theme
                ? props.stats
                  ? `#${props.stats}`
                  : "#838383"
                : defaultThemes[props.theme].stats
            }
            d="M351.558 644.803l-5.185-.013h-.003c-5.467 0-9.75 4.284-9.75 9.753 0 5.122 3.983 9.007 9.331 9.212v4.785c0 .135.055.358.15.504a.932.932 0 001.293.286c.33-.21 8.091-5.175 10.11-6.882 2.377-2.013 3.8-4.963 3.804-7.89v-.022c-.008-5.458-4.288-9.733-9.75-9.735v.002zm4.733 16.215c-1.417 1.2-6.077 4.256-8.465 5.803v-3.983a.937.937 0 00-.937-.938h-.495c-4.575 0-7.898-3.095-7.898-7.357 0-4.418 3.46-7.878 7.875-7.878l5.184.013h.003c4.415 0 7.875 3.457 7.877 7.87-.004 2.387-1.177 4.805-3.142 6.47h-.002z"
          />
          <text
            fill={
              !props.theme
                ? props.statsText
                  ? `#${props.statsText}`
                  : "#838383"
                : defaultThemes[props.theme].statsText
            }
            x={370}
            y={665}
            fontSize={24}
          >
            {props.twitter.includes?.tweets[0].public_metrics.retweet_count! <
            1000
              ? numeral(
                  props.twitter.includes?.tweets[0].public_metrics.retweet_count
                ).format("0a")
              : numeral(
                  props.twitter.includes?.tweets[0].public_metrics.retweet_count
                ).format("0.0a")}
          </text>
        </g>
        <g>
          <path
            fill={
              !props.theme
                ? props.stats
                  ? `#${props.stats}`
                  : "#838383"
                : defaultThemes[props.theme].stats
            }
            d="M538.713 661.588a.935.935 0 00-1.325 0l-2.775 2.775v-12.8a4.694 4.694 0 00-4.688-4.688h-7.312a.938.938 0 000 1.875h7.312a2.818 2.818 0 012.813 2.813v12.8l-2.775-2.775a.936.936 0 10-1.325 1.325l4.375 4.375a.928.928 0 00.662.275c.242 0 .479-.09.663-.275l4.375-4.375a.935.935 0 000-1.325zm-13.325 4.1h-7.313a2.817 2.817 0 01-2.812-2.813v-12.8l2.775 2.775a.939.939 0 001.327 0 .935.935 0 000-1.325l-4.375-4.375a.935.935 0 00-1.325 0l-4.375 4.375a.937.937 0 101.325 1.325l2.775-2.775v12.8a4.694 4.694 0 004.688 4.688h7.312a.938.938 0 000-1.875h-.002z"
          />
          <text
            fill={
              !props.theme
                ? props.statsText
                  ? `#${props.statsText}`
                  : "#838383"
                : defaultThemes[props.theme].statsText
            }
            x={550}
            y={665}
            fontSize={24}
          >
            {props.twitter.includes?.tweets[0].public_metrics.reply_count! <
            1000
              ? numeral(
                  props.twitter.includes?.tweets[0].public_metrics.reply_count
                ).format("0a")
              : numeral(
                  props.twitter.includes?.tweets[0].public_metrics.reply_count
                ).format("0.0a")}
          </text>
        </g>
        <g>
          <path
            fill={
              !props.theme
                ? props.stats
                  ? `#${props.stats}`
                  : "#838383"
                : defaultThemes[props.theme].stats
            }
            d="M699 669.048h-.017c-3.229-.06-12.545-8.478-12.545-16.45 0-3.83 3.156-7.193 6.753-7.193 2.863 0 4.788 1.975 5.808 3.413 1.017-1.435 2.942-3.413 5.806-3.413 3.6 0 6.755 3.363 6.755 7.194 0 7.97-9.317 16.387-12.546 16.446H699v.003zm-5.807-21.767c-2.6 0-4.879 2.485-4.879 5.319 0 7.175 8.792 14.495 10.687 14.573 1.898-.078 10.688-7.397 10.688-14.573 0-2.834-2.279-5.319-4.879-5.319-3.16 0-4.925 3.67-4.94 3.707-.287.702-1.445.702-1.734 0-.017-.038-1.781-3.707-4.942-3.707h-.001z"
          />
          <text
            fill={
              !props.theme
                ? props.statsText
                  ? `#${props.statsText}`
                  : "#838383"
                : defaultThemes[props.theme].statsText
            }
            x={720}
            y={665}
            fontSize={24}
          >
            {props.twitter.includes?.tweets[0].public_metrics.like_count! < 1000
              ? numeral(
                  props.twitter.includes?.tweets[0].public_metrics.like_count
                ).format("0a")
              : numeral(
                  props.twitter.includes?.tweets[0].public_metrics.like_count
                ).format("0.0a")}
          </text>
        </g>
      </g>
      <image
        clipPath="url(#twitter-pinned)"
        xlinkHref={`${
          props.twitter.data.profile_image_url.split("_normal")[0] +
          props.twitter.data.profile_image_url.split("_normal")[1]
        }`}
        width={135}
        height={135}
        x={167}
        y={527}
      />
    </g>
  );
};
