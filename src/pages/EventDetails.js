import React from "react";
import {
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

function EventDetails({ register }) {
  const [isMultiday, setIsMultiday] = React.useState(false);
  const [isAllDay, setIsAllDay] = React.useState(true);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel>Event Duration</InputLabel>
          <Select
            {...register("duration")}
            value={isMultiday ? "multiday" : "singleDay"}
            onChange={(event) =>
              setIsMultiday(event.target.value === "multiday")
            }
            label="Event Duration"
          >
            <MenuItem value="singleDay">Single Day</MenuItem>
            <MenuItem value="multiday">Multiday</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <TextField
          {...register("dateFrom")}
          fullWidth
          type="date"
          label="Event Date"
          variant="outlined"
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      {isMultiday && (
        <Grid item xs={12}>
          <TextField
            {...register("dateTo")}
            fullWidth
            type="date"
            label="Event Date To"
            variant="outlined"
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      )}
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel>Event Time</InputLabel>
          <Select
            {...register("time")}
            value={isAllDay ? "allDay" : "specificTime"}
            onChange={(event) => setIsAllDay(event.target.value === "allDay")}
            label="Event Time"
          >
            <MenuItem value="specificTime">Specific Time</MenuItem>
            <MenuItem value="allDay">All Day</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {!isAllDay && (
        <>
          <Grid item xs={12}>
            <TextField
              {...register("timeFrom")}
              fullWidth
              type="time"
              label="Event Time From"
              variant="outlined"
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("timeTo")}
              fullWidth
              type="time"
              label="Event Time To"
              variant="outlined"
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </>
      )}
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel>Event Location Type</InputLabel>
          <Select
            {...register("location")}
            label="Event Location Type"
            variant="outlined"
            required
          >
            <MenuItem value="physical">Physical</MenuItem>
            <MenuItem value="virtual">Virtual</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <TextField
          {...register("locationDetails")}
          fullWidth
          label="Event Location(Meeting) Details"
          variant="outlined"
          multiline
          rows={4}
          required
        />
      </Grid>
    </Grid>
  );
}

export default EventDetails;
