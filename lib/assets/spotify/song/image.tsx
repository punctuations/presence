import * as React from "react";

import { themes } from "@themes";
import { ThemesTypes } from "@lib/types/ThemesTypes";
import { SpotifySongResponse } from "@lib/types/SpotifySongResponse";
import { SpotifyArtistResponse } from "@lib/types/SpotifyArtistResponse";

export const SpotifySong = (props: {
  song: SpotifySongResponse;
  artist: SpotifyArtistResponse;
  bg: string | null;
  text: string | null;
  description: string | null;
  theme: string | null;
  icon: string | null;
  rounded: boolean | null;
}) => {
  const defaultThemes: ThemesTypes = themes;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={940}
      height={460}
      fill="none"
      viewBox="0 0 1920 1080"
    >
      <path fill="#fff" d="M25 25h1920v1080H25z" />
      <g filter="url(#prefix__filter0_f)">
        <rect
          fill="url(#prefix__pattern0)"
          width={4000}
          height={1080}
          x={-350}
          y={0}
        />
      </g>
      <rect
        width={300}
        height={300}
        x={614}
        y={415}
        fill="url(#prefix__pattern1)"
        rx={10}
      />
      <text
        fill={
          !props.theme
            ? props.text
              ? `#${props.text}`
              : "#fff"
            : defaultThemes[props.theme].text
        }
        x={940}
        y={548}
        fontSize={40}
        fontWeight="bold"
      >
        {props.song.name}
      </text>
      <text
        fill={
          !props.theme
            ? props.description
              ? `#${props.description}`
              : "#DADADA"
            : defaultThemes[props.theme].description
        }
        x={940}
        y={615}
        fontSize={40}
      >
        {props.song.artists.length > 3
          ? "Various Artists"
          : props.song.artists.length === 3
          ? `${props.song.artists[0].name}, ${props.song.artists[1].name}, ${props.song.artists[2].name}.`
          : props.song.artists.length === 2
          ? `${props.song.artists[0].name}, ${props.song.artists[1].name}.`
          : `${props.song.artists[0].name}.`}
      </text>
      <defs>
        <pattern
          id="prefix__pattern0"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <use
            transform="matrix(.0005 0 0 .00088 -.156 0)"
            xlinkHref="#prefix__image0"
          />
        </pattern>
        <pattern
          id="prefix__pattern1"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.00333)" xlinkHref="#prefix__image1" />
        </pattern>
        <image
          id="prefix__image0"
          width={1920}
          height={1080}
          xlinkHref={`${props.artist.images[0].url}`}
        />
        <image
          id="prefix__image1"
          width={300}
          height={300}
          xlinkHref={`${props.song.album.images[0].url}`}
        />
        <filter
          id="prefix__filter0_f"
          width={1970}
          height={1080}
          x={0}
          y={0}
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur result="effect1_foregroundBlur" stdDeviation={12.5} />
        </filter>
      </defs>
    </svg>
  );
};
