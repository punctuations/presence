import React from "react";

import useSWR from "swr";

const useAPI = (
  type: string,
  username?: string | string[] | null | undefined,
  subParam?: string | string[] | undefined
) => {
  const fetcher = (args: RequestInfo) => fetch(args).then((res) => res.json());

  const [route, setRoute] = React.useState<null | string>(null);

  React.useEffect(() => {
    getAPI();
  }, []);

  function getAPI() {
    switch (type) {
      case "github/user":
        setRoute(`https://api.github.com/users/${username}`);
        break;
      case "github/starred":
        setRoute(`https://api.github.com/users/${username}/repos`);
        break;
      case "github/colors":
        setRoute(
          "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json"
        );
        break;
      case "github/repo":
        setRoute(`https://api.github.com/repos/${username}/${subParam}`);
        break;
      case "github/contributors":
        setRoute(
          `https://api.github.com/repos/${username}/${subParam}/contributors`
        );
        break;
      default:
        return "";
    }
  }

  const { data, error } = useSWR(route, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useAPI;
