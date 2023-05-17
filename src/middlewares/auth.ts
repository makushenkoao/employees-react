import { createListenerMiddleware } from "@reduxjs/toolkit";
import { login, register } from "../app/services";
import { LOCAL_STORAGE_TOKEN } from "../app/constants";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: login.matchFulfilled,
  effect: async (action, listenerAPi) => {
    listenerAPi.cancelActiveListeners();
    if (action.payload.token) {
      localStorage.setItem(LOCAL_STORAGE_TOKEN, action.payload.token);
    }
  },
});

listenerMiddleware.startListening({
  matcher: register.matchFulfilled,
  effect: async (action, listenerAPi) => {
    listenerAPi.cancelActiveListeners();
    if (action.payload.token) {
      localStorage.setItem(LOCAL_STORAGE_TOKEN, action.payload.token);
    }
  },
});
