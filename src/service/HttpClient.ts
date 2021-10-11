interface IOptions {
  baseURL?: string;
  headers?: Object;
}

class HttpClient {
  private _baseURL: IOptions["baseURL"];
  private _headers: IOptions["headers"];

  constructor(options: IOptions = {}) {
    this._baseURL = options.baseURL || "";
    this._headers = options.headers || {};
  }

  async _fetchJSON(endpoint: string, options = {}) {
    const res = await fetch(this._baseURL + endpoint, {
      ...options,
      // @ts-ignore
      headers: this._headers,
    });

    if (!res.ok) throw new Error(res.statusText);

    if (res.status !== 204) return res.json();

    return undefined;
  }

  get(endpoint: string, options = {}) {
    return this._fetchJSON(endpoint, {...options, method: "GET",});
  }

  post<T>(endpoint: string, body: T, options = {}) {
    return this._fetchJSON(endpoint, {...options, body: body ? JSON.stringify(body) : undefined,
      method: "POST",});
  }

  put<T>(endpoint: string, body: T, options = {}) {
    return this._fetchJSON(endpoint, {...options, body: body ? JSON.stringify(body) : undefined,
      method: "PUT",});
  }

  patch<T>(endpoint: string, operations: T, options = {}) {
    return this._fetchJSON(endpoint, {parseResponse: false, ...options, body: JSON.stringify(operations),
      method: "PATCH",});
  }

  delete(endpoint: string, options = {}) {
    return this._fetchJSON(endpoint, {parseResponse: false, ...options, method: "DELETE",});
  }
}

export default HttpClient;
