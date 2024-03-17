import React from "react";
import {
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@mui/material";

function BasicInformation({ register, errors, handleBlur }) {
  const categories = [
    "Business & Professional",
    "Technology & Innovation",
    "Arts & Entertainment",
    "Education & Training",
    "Health & Wellness",
    "Sports & Fitness",
    "Community & Social",
    "Food & Beverage",
    "Environment & Sustainability",
    "Travel & Tourism",
    "Fashion & Beauty",
    "Science & Research",
    "Religious & Spiritual",
    "Government & Politics",
    "Media & Communication",
    "Family & Parenting",
  ];
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          {...register("title", { required: "Event Title is required field." })}
          fullWidth
          label="Event Title"
          variant="outlined"
          error={errors?.title ? true : false}
          helperText={errors?.title?.message}
          onBlur={() => handleBlur("title")}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          {...register("description", {
            required: "Event Description is required field.",
          })}
          fullWidth
          label="Event Description"
          variant="outlined"
          multiline
          rows={4}
          error={errors?.description ? true : false}
          helperText={errors?.description?.message}
          onBlur={() => handleBlur("description")}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth variant="outlined">
          <InputLabel id="event-mode-label">Event Mode</InputLabel>
          <Select
            {...register("mode", { required: "Event Mode is required field." })}
            labelId="event-mode-label"
            id="event-mode"
            label="Event Mode"
            error={errors?.mode ? true : false}
            onBlur={() => handleBlur("mode")}
          >
            <MenuItem value="public">Public</MenuItem>
            <MenuItem value="private">Private</MenuItem>
          </Select>
          {errors?.mode?.message && (
            <FormHelperText sx={{ color: "#d32f2f" }}>
              {errors?.mode?.message}
            </FormHelperText>
          )}
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel id="event-category-label">Event Category</InputLabel>
          <Select
            {...register("category", {
              required: "Event Category is required field.",
            })}
            labelId="event-category-label"
            id="event-category-select"
            label="Event Category"
            error={errors?.category ? true : false}
            onBlur={() => handleBlur("category")}
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
          {errors?.category?.message && (
            <FormHelperText sx={{ color: "#d32f2f" }}>
              {errors?.category?.message}
            </FormHelperText>
          )}
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Input
          {...register("image")}
          fullWidth
          type="file"
          id="event-image"
          name="event-image"
          required
        />
        <FormHelperText>Event Image or Logo</FormHelperText>
      </Grid>
    </Grid>
  );
}

export default BasicInformation;
