import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import { showAlert } from "../AlertMessage/action";
import { EVENTS_REQUEST, eventsSuccess } from "./action";

function* eventsSaga({ payload }) {
  try {
    const { role, userId } = payload;
    let url = "https://dummyjson.com/products";
    if (role !== "admin") {
      url = "https://dummyjson.com/products";
    }
    const response = yield call(axios.get, "https://dummyjson.com/products");
    if (response?.status === 200 && response?.data) {
      yield put(
        eventsSuccess([
          {
            id: 1,
            title: "Sample Event Title 1",
            description: "This is a dummy event description.",
            mode: "Public",
            tags: ["Sample", "Event"],
            image: "https://via.placeholder.com/150",
            date: "2024-03-17",
            time: "10:00 AM - 1:00 PM",
            duration: "3 hours",
            locationType: "Virtual",
            locationDetails: "Online",
            isApproved: true,
            capacity: "100",
            attendeeEmails: "john@example.com, jane@example.com",
            registrationDeadline: "2024-03-15",
            website: "https://example.com/event",
            agenda: "Sample agenda",
            additionalInformation: "Additional information about the event.",
            organizerInformation: "Organizer: John Doe, contact@example.com",
            feedbackQuestions: "How satisfied are you with the event?",
          },
          {
            id: 2,
            title: "Sample Event Title 2",
            description: "This is a dummy event description.",
            mode: "Public",
            tags: ["Sample", "Event"],
            image: "https://via.placeholder.com/150",
            date: "2024-04-23",
            time: "10:00 AM - 1:00 PM",
            duration: "3 hours",
            locationType: "Virtual",
            isApproved: false,
            locationDetails: "Online",
            capacity: "100",
            attendeeEmails: "john@example.com, jane@example.com",
            registrationDeadline: "2024-03-15",
            website: "https://example.com/event",
            agenda: "Sample agenda",
            additionalInformation: "Additional information about the event.",
            organizerInformation: "Organizer: John Doe, contact@example.com",
            feedbackQuestions: "How satisfied are you with the event?",
          },
          {
            id: 3,
            title: "Sample Event Title 3",
            description: "This is a dummy event description.",
            mode: "Public",
            tags: ["Sample", "Event"],
            image: "https://via.placeholder.com/150",
            date: "2024-07-17",
            time: "10:00 AM - 1:00 PM",
            duration: "3 hours",
            locationType: "Virtual",
            locationDetails: "Online",
            capacity: "100",
            attendeeEmails: "john@example.com, jane@example.com",
            registrationDeadline: "2024-03-15",
            website: "https://example.com/event",
            agenda: "Sample agenda",
            additionalInformation: "Additional information about the event.",
            organizerInformation: "Organizer: John Doe, contact@example.com",
            feedbackQuestions: "How satisfied are you with the event?",
            isApproved: false,
          },
        ])
      );
    }
  } catch (error) {
    yield put(showAlert("Something Went Wrong, please try again", "error"));
  }
}

function* watchEvents() {
  yield takeEvery(EVENTS_REQUEST, eventsSaga);
}

export default watchEvents;
