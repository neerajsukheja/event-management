import React from "react";
import { Grid, TextField } from "@mui/material";

function EventWebsitePromotion({ register }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          {...register("website")}
          fullWidth
          label="Event Website or Landing Page"
          variant="outlined"
          type="url"
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          {...register("agenda")}
          fullWidth
          label="Event Agenda"
          variant="outlined"
          multiline
          rows={4}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          {...register("additionalInformation")}
          fullWidth
          label="Additional Information"
          variant="outlined"
          multiline
          rows={4}
        />
      </Grid>
    </Grid>
  );
}

export default EventWebsitePromotion;
