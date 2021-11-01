import { AUTHORIZE_TOKEN, GITHUB_API_URL } from "../config/api/constants";
import { INotepad } from "../modules/NotepadModule/Interfaces";
import HttpClient from "./HttpClient";

class GithubApiClient extends HttpClient {
  constructor() {
    super({
      baseURL: GITHUB_API_URL,
      headers: {
        Authorization: `token ${AUTHORIZE_TOKEN}`,
      },
    });

  }

  get gists() {
    return {
      getPublicGists: (page: number) => this.get(`/gists/public?page=${page}`),
    };
  }

  get notepads() {
    return {
      get: () => this.get("/gists"),
      getById: (id: string) => this.get(`/gists/${id}`),

      create: (notepad: INotepad) => this.post("/gists", notepad),

      update: (notepad: any) => this.patch(`/gists/${notepad.id}`, notepad),

      delete: (id: string) => this.delete(`/gists/${id}`),

    };
  }
}

export default GithubApiClient;
