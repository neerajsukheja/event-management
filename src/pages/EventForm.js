import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Container,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import BasicInformation from "./BasicInformation";
import EventDetails from "./EventDetails";
import RegistrationDetails from "./RegistrationDetails";
import EventWebsitePromotion from "./EventWebsitePromotion";
import OrganizerDetails from "./OrganizerDetails";
import TitleBackGroundImage from "../images/event-list.jpg";
import { useNavigate } from "react-router-dom";

const steps = [
  { title: "Basic Information", component: BasicInformation },
  { title: "Event Details", component: EventDetails },
  { title: "Registration Details", component: RegistrationDetails },
  { title: "Event Website and Promotion", component: EventWebsitePromotion },
  { title: "Organizer Details", component: OrganizerDetails },
];

const EventForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const {
    register,
    getValues,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const handleNext = async () => {
    if (activeStep === 0) {
      onSubmitStep0();
    } else if (activeStep === 1) {
      onSubmitStep1();
    }
  };

  const handleBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleCancel = () => {
    console.log("Handle Cancel");
  };

  const handleSaveForLater = async () => {
    const data = getValues();
    console.log(data);
  };

  const handleBlur = async (fieldName) => {
    try {
      await trigger(fieldName);
    } catch (error) {}
  };

  const onSubmitStep0 = async (data) => {
    try {
      await trigger(["title", "description"]);
      await setActiveStep(1);
    } catch (error) {}
  };

  const onSubmitStep1 = async (data) => {
    try {
      await trigger(["email", "password"]);
      await setActiveStep(2);
    } catch (error) {}
  };

  const onSubmitStep2 = (data) => {
    // Form submission logic for step 3
    console.log("Form submitted with data:", data);
  };

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
          Event Scheduler
        </Typography>
      </Box>

      <Container>
        <Box
          mb={3}
          mt={3}
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((step, index) => (
              <Step key={index}>
                <StepLabel>{step.title}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Grid container mt={5} mb={5}>
            <StepContent
              step={steps[activeStep].component}
              register={register}
              errors={errors}
              handleBlur={handleBlur}
            />
          </Grid>
          <Grid container justifyContent="flex-end">
            <Button
              variant="outlined"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>
            {activeStep !== steps.length - 1 ? (
              <Button
                style={{ marginLeft: "1rem" }}
                variant="contained"
                onClick={handleNext}
              >
                Next
              </Button>
            ) : (
              <Button
                style={{ marginLeft: "1rem" }}
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
            )}
            <Button
              style={{ marginLeft: "1rem" }}
              variant="outlined"
              type="button"
              onClick={handleSaveForLater}
            >
              Save for Later
            </Button>
            <Button
              style={{ marginLeft: "1rem" }}
              variant="outlined"
              onClick={handleReset}
            >
              Reset
            </Button>
            <Button
              style={{ marginLeft: "1rem" }}
              variant="outlined"
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </Grid>
        </form>
      </Container>
    </>
  );
};

const StepContent = ({ step, register, errors, handleBlur }) => {
  const Component = step;
  return (
    <Component register={register} errors={errors} handleBlur={handleBlur} />
  );
};

export default EventForm;
