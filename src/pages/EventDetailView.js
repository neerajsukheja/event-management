import React, { useState } from "react";
import {
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import TitleBackGroundImage from "../images/event-list.jpg";
import { useNavigate } from "react-router-dom";

const EventDetailView = ({
  event = {
    title: "Sample Event Title",
    description: "This is a dummy event description.",
    mode: "Public",
    tags: ["Sample", "Event"],
    image: "https://via.placeholder.com/150",
    date: "2024-03-17",
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
  },
}) => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${TitleBackGroundImage})`,
          backgroundSize: "cover",
          height: 150,
          display: "flex",
          alignItems: "center",
          padding: 3,
        }}
      >
        <Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
          {event.title}
        </Typography>
      </Box>
      <Box p={3}>
        <Box
          mb={3}
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/events")}
          >
            List Events
          </Button>
        </Box>
        <List>
          <ListItem>
            <ListItemText primary="Event Title" secondary={event.title} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Event Description"
              secondary={event.description}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="Event Mode" secondary={event.mode} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Event Tags or Keywords"
              secondary={event.tags}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Event Image or Logo"
              secondary={event.image}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="Event Date" secondary={event.date} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Event Time" secondary={event.time} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Event Duration" secondary={event.duration} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Event Location Type"
              secondary={event.locationType}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Event Location Details"
              secondary={event.locationDetails}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="Event Capacity" secondary={event.capacity} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Attendee Emails"
              secondary={event.attendeeEmails}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Event Registration Deadline"
              secondary={event.registrationDeadline}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Event Website or Landing Page"
              secondary={event.website}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="Event Agenda" secondary={event.agenda} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Additional Information"
              secondary={event.additionalInformation}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Organizer Information"
              secondary={event.organizerInformation}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Feedback or Survey Questions"
              secondary={event.feedbackQuestions}
            />
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default EventDetailView;
