import React from "react";
import {
  Grid,
  TextField,
  FormControl,
  Input,
  FormHelperText,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

function RegistrationDetails({ register }) {
  const [uploadMethod, setUploadMethod] = React.useState("manual");

  const handleUploadMethodChange = (event) => {
    setUploadMethod(event.target.checked ? "csv" : "manual");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          {...register("capacity")}
          fullWidth
          type="number"
          label="Event Capacity"
          variant="outlined"
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          {...register("deadline")}
          fullWidth
          type="date"
          label="Event Registration Deadline"
          variant="outlined"
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={12} style={{ textAlign: "left" }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={uploadMethod === "csv"}
              onChange={handleUploadMethodChange}
            />
          }
          label="Upload Attendee Emails via CSV"
        />
        {uploadMethod === "manual" && (
          <TextField
            {...register("attendeeEmail")}
            fullWidth
            multiline
            rows={3}
            label="Attendee Emails (One per line)"
            variant="outlined"
          />
        )}
        {uploadMethod === "csv" && (
          <FormControl fullWidth>
            <Input
              {...register("attendeeEmailCsv")}
              type="file"
              id="attendee-emails-csv"
              name="attendee-emails-csv"
              accept=".csv"
              variant="outlined"
              required
            />
            <FormHelperText>Please upload a CSV file.</FormHelperText>
          </FormControl>
        )}
      </Grid>
    </Grid>
  );
}

export default RegistrationDetails;
