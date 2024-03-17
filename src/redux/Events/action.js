export const EVENTS_REQUEST = "EVENTS_REQUEST";
export const EVENTS_SUCCESS = "EVENTS_SUCCESS";

export const eventsRequest = (role, userId, navigate) => ({
  type: EVENTS_REQUEST,
  payload: { role, userId, navigate },
});

export const eventsSuccess = (events) => ({
  type: EVENTS_SUCCESS,
  payload: events,
});
