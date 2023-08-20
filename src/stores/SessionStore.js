import { defineStore } from "pinia";

function initializeStore() {
  let result = [];
  const URL = "http://localhost:3333/sessions";

  fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((sessions) => {
      sessions.forEach((session) => {
        result.push(session);
      });
    });
  return result;
}

export const useSessionStore = defineStore("session", {
  state: () => {
    return {
      sessions: initializeStore(),
    };
  },
  getters: {
    sessionState() {
      return this.sessions.filter((session) => session.id);
    },
    getServiceById: (state) => (sessionId) => {
      return state.sessions.find((session) => session.id === sessionId);
    },
  },
  actions: {
    addService(newSession) {
      this.sessions.push(newSession);
    },
  },
});
