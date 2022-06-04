import { Box, Stepper, Step, StepLabel } from "@mui/material";
import { useAppSelector } from "../../Redux/hooks";



const steps = [
  'Seleccione una categoria.',
  'Seleccione una sub-categoria.',
  'Seleccione un producto.',
];

export const MyStepper = () =>  {

  const {countStep} = useAppSelector((state) => state.select)

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={countStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}