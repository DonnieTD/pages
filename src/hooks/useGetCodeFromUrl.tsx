import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQueries } from "react-query";
import { EventTransform } from "./EventTransform";

export const useGetCodeFromUrl = (
  setData: React.Dispatch<
    React.SetStateAction<{
      errorMessage: string;
      isLoading: boolean;
    }>
  >,
  data: {
    errorMessage: string;
    isLoading: boolean;
  },
  dispatch: (value: any) => void,
  state: {
    isLoggedIn: boolean;
    serverdata: null;
    client_id: string | undefined;
    redirect_uri: string | undefined;
    client_secret: string | undefined;
    proxy_url: string | undefined;
  }
) => {
  const [userdata, setUserdata] = useState<any>({});
  const [{ refetch: getAccessToken }, { refetch: getUser }] = useQueries([
    {
      queryKey: "token",
      queryFn: () =>
        axios.post(
          `login/oauth/access_token?client_id=12a2590fed06affda593&client_secret=fa9b266ce602b1c1fa29e53e510c8e9e93a2c8ad&code=${
            window.location.href.split("?code=")[1]
          }`,
          {}
        ),
      onSuccess: ({ data }: any) => {
        localStorage.setItem("token", data.split("&")[0].split("=")[1]);
        getUser();
      },
      enabled: false,
    },
    {
      queryKey: "user",
      queryFn: () =>
        axios.get(`https://api.github.com/user`, {
          headers: {
            Authorization: `token ${localStorage.getItem("token")}`,
          },
        }),
      enabled: false,
      onSuccess: ({ data }: any) => {
        setUserdata(data);
      },
    },
    {
      queryKey: "events",
      queryFn: () =>
        axios.get(`https://api.github.com/users/${userdata.login}/events`, {
          headers: {
            Authorization: `token ${localStorage.getItem("token")}`,
            Accept: "application/vnd.github.v3+json",
          },
        }),
      enabled: !!userdata?.login,
      onSuccess: ({ data }: any) => {
        dispatch({
          type: "LOGIN",
          payload: {
            serverdata: {
              ...userdata,
              events: EventTransform(data),
            },
            isLoggedIn: true,
          },
        });
      },
    },
  ]);

  useEffect(() => {
    const url = window.location.href;
    const hasCode = url.includes("?code=");

    if (hasCode) {
      const newUrl = url.split("?code=");
      setData({ ...data, isLoading: true });
      getAccessToken();
      window.history.pushState({}, "", newUrl[0]);
    }
  }, [state, dispatch, data, setData, getAccessToken]);
};
