import * as React from "react";
import useSWR from "swr";

import useAPI from "./useAPI";

const Repo = (props: { username: string | string[] | undefined }) => {
  const {
    data,
    isLoading,
    isError,
  }: { isLoading: boolean; isError: any; data: any } = useAPI(
    props.username,
    "github/starred"
  );

  const [mostStarred, setMostStarred] = React.useState<number>(0);
  const [starredIndex, setStarredIndex] = React.useState<number>(0);

  if (data) {
    data.forEach(isMostStarred);
  }

  function isMostStarred(_contents: any, i: number, data: any[]) {
    if (data) {
      if (data[i].stargazers_count > mostStarred) {
        setMostStarred(data[i].stargazers_count);
        setStarredIndex(i);
      }
    }
  }

  const fetcher = (args: RequestInfo) => fetch(args).then((res) => res.json());

  const { data: languages } = useSWR(
    "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json",
    fetcher
  );

  function colorForLanguage(language: string) {
    return eval(!languages ? "" : `languages.${language}.color`);
  }

  return (
    <g>
      <rect
        width={1451}
        height={251}
        x={151.5}
        y={455.5}
        fill="#fff"
        stroke="#9D9D9D"
        rx={25.5}
      />
      <path
        fill="#000"
        fillRule="evenodd"
        d="M207 525.25c0-1.658.658-3.247 1.831-4.419A6.245 6.245 0 01213.25 519h21.875c.497 0 .974.198 1.326.549.351.352.549.829.549 1.326v31.25c0 .497-.198.974-.549 1.326a1.879 1.879 0 01-1.326.549h-6.25c-.497 0-.974-.198-1.326-.549a1.879 1.879 0 010-2.652 1.879 1.879 0 011.326-.549h4.375v-5h-20a2.498 2.498 0 00-2.455 2.969c.092.484.325.929.67 1.281a1.877 1.877 0 01-.027 2.653 1.878 1.878 0 01-2.653-.028A6.236 6.236 0 01207 547.75v-22.5zm26.25-2.5v18.75h-20c-.89 0-1.735.185-2.5.52v-16.77a2.5 2.5 0 012.5-2.5h20zm-18.75 26.875v8.125a.627.627 0 00.345.559.621.621 0 00.655-.059l3.625-2.717a.62.62 0 01.75 0l3.625 2.717a.621.621 0 001-.5v-8.125a.625.625 0 00-.625-.625h-8.75a.625.625 0 00-.625.625z"
        clipRule="evenodd"
      />
      <text fill="#000" x={267} y={550} fontSize={48}>
        {!data ? null : `${data[starredIndex]?.full_name.split("/")[0]}/`}
        <tspan fontWeight="bold">
          {!data ? null : data[starredIndex]?.full_name.split("/")[1]}
        </tspan>
      </text>
      {!data ? null : data[starredIndex].description == null ? null : (
        <text fill="#B4B4B4" x={202} y={609} fontSize={30}>
          {!data ? null : data[starredIndex].description}
        </text>
      )}
      <g>
        <circle
          cx={217}
          cy={661}
          r={10}
          fill={
            !languages ? null : colorForLanguage(data[starredIndex].language)
          }
        />
        <text fill={"#838383"} x={238} y={671} fontSize={24}>
          {!data ? null : data[starredIndex].language}
        </text>
        <g fill="#838383">
          <path
            fillRule="evenodd"
            d="M547.375 654.094a1.405 1.405 0 11-2.812 0c0-.373.148-.731.411-.995a1.41 1.41 0 011.989 0c.264.264.412.622.412.995zm0 3.979a4.226 4.226 0 002.233-1.843 4.22 4.22 0 10-7.797-2.848 4.214 4.214 0 002.752 4.691v1.646a4.218 4.218 0 004.218 4.219h2.813v3.99a4.215 4.215 0 00-2.754 4.692 4.22 4.22 0 105.566-4.692v-3.99h2.813a4.22 4.22 0 004.219-4.219v-1.646a4.22 4.22 0 10-2.813 0v1.646a1.405 1.405 0 01-1.406 1.406h-8.438a1.405 1.405 0 01-1.406-1.406v-1.646zm7.031 13.833a1.407 1.407 0 11-2.814 0 1.407 1.407 0 012.814 0zm5.625-16.406a1.407 1.407 0 100-2.814 1.407 1.407 0 000 2.814z"
            clipRule="evenodd"
          />
          <text x={586} y={670} fontSize={24}>
            {!data ? null : data[starredIndex].forks}
          </text>
        </g>
        <g fill="#838383">
          <path
            fillRule="evenodd"
            d="M431 649.469a1.407 1.407 0 011.262.784l3.528 7.153 7.894 1.147a1.405 1.405 0 01.78 2.398l-5.711 5.569 1.348 7.86a1.4 1.4 0 01-.559 1.376 1.407 1.407 0 01-1.481.107L431 672.151l-7.061 3.712a1.408 1.408 0 01-1.956-.714 1.407 1.407 0 01-.084-.767l1.35-7.864-5.715-5.567a1.399 1.399 0 01-.357-1.443 1.411 1.411 0 011.137-.957l7.893-1.145 3.531-7.153a1.407 1.407 0 011.262-.784zm0 4.584l-2.597 5.26a1.41 1.41 0 01-1.058.768l-5.806.844 4.2 4.095c.163.159.285.356.356.572.07.217.087.448.049.673l-.99 5.783 5.191-2.73a1.399 1.399 0 011.309 0l5.194 2.73-.994-5.783a1.41 1.41 0 01.405-1.245l4.2-4.093-5.805-.844a1.405 1.405 0 01-1.057-.769L431 654.051v.002z"
            clipRule="evenodd"
          />
          <text x={459} y={674} fontSize={24}>
            {!data ? null : mostStarred}
          </text>
        </g>
      </g>
    </g>
  );
};

export default Repo;
