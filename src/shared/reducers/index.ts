import { authenticationReducer } from "@/shared/reducers/states";

export * from "./states";

export const sharedReducers = {
  authentication: authenticationReducer,
};

export const middlewares = [];
