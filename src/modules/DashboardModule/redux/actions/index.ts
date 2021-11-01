export const GET_PUBLIC_GISTS: string = "GET_PUBLIC_GISTS";
export const GET_PUBLIC_GISTS_SUCCESS: string = "GET_PUBLIC_GISTS_SUCCESS";

export const getPublicGists = () => ({ type: GET_PUBLIC_GISTS });
export const getPublicGistsSuccess = (gistCreated: any, filesPerGist: any) => ({
  type: GET_PUBLIC_GISTS_SUCCESS,
  payload: { gistCreated, filesPerGist },
});
