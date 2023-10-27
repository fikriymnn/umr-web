"use client";
import React from "react";

import NamaCustomer from "@/components/namaCustomer";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import Typography from "@mui/material/Typography";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import DatadiriFoam from "@/components/datadiriFoam";
import TipePembayaranFoam from "@/components/tipePembayaranFoam";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];
function formPesan() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div className="bg">
      <div className="flex flex-col pt-10 bg-left bg-contain bg-[url('/assets/images/image2.png')] z-10">
        {/* <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep} sx={{ width: "70%" }}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption">Optional</Typography>
                );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}></Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                Step {activeStep + 1}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box> */}
        <div className="w-[607px] ">
          <section>
            <NamaCustomer />
          </section>
          <section>
            <TipePembayaranFoam />
          </section>
          <section>
            <DatadiriFoam button={handleNext} />
          </section>
          <section>
            <div className="px-14 w-10/12 ms-10 mb-20 h-96 mt-5">
              {" "}
              <p className="font-bold">
                Jika anda setuju dengan{" "}
                <span className="text-[#E3B02B]">
                  Syarat & Kebijakan Privasi,
                </span>{" "}
                Silahkan klik tombol &rdquo;Lanjut Pembayaran&rdquo; . untuk
                memilih cara pembayaran
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default formPesan;
