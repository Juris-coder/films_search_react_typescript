import { API_ENDPOINT, API_KEY } from "../configs/env";
import { Film } from "../models";

type Result = {
  results: Film[];
};

type ApiCall<Result> = {
  (query: string): Promise<Result>;
};

export const apiCall: ApiCall<Result> = async (query) => {
  const request = await fetch(`${API_ENDPOINT}${API_KEY}&query=${query}`);
  const result = await request.json();
  return result;
};
