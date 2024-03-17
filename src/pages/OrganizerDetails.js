import React from "react";
import { Grid, TextField } from "@mui/material";

function OrganizerDetails({ register }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          {...register("organizerName")}
          fullWidth
          label="Organizer Name"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          {...register("organizerContactDetails")}
          fullWidth
          label="Contact Details"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          {...register("organizerOrganization")}
          fullWidth
          label="Organization Hosting the Event"
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
}

export default OrganizerDetails;
