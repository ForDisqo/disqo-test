/**
 *  App configs
 */

export const CREATE_ROUTE_FOR_NOTEPAD: (id: string) => string = (id: string) =>
  `/notepads/${id}`;
export const AUTHORIZE_TOKEN: string | undefined =
  process.env.REACT_APP_GITHUB_AUTHORIZE_TOKEN;
export const GITHUB_API_URL: string | undefined =
  process.env.REACT_APP_GITHUB_API_URL;
