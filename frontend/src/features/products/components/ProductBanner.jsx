import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import MobileStepper from '@mui/material/MobileStepper';
import { Box, useTheme } from '@mui/material';
import { useState } from 'react';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const ProductBanner = ({ images }) => {

    const theme = useTheme()

    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <>
            <div style={{ width: '80%', margin: '0 auto' }}>
                <AutoPlaySwipeableViews
                    style={{ overflow: "hidden", height: 'auto' }}
                    width={'100%'}
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {images.map((image, index) => (
                        <div key={index} style={{ width: "100%", height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {Math.abs(activeStep - index) <= 2 && (
                                <Box
                                    component="img"
                                    sx={{
                                        width: '100%', // Make the image fit within the container
                                        maxWidth: '100%', // Ensure the image does not exceed container width
                                        height: 'auto', // Maintain aspect ratio
                                        objectFit: 'contain',
                                    }}
                                    src={image}
                                    alt={'Banner Image'}
                                />
                            )}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={<></>}
                        backButton={<></>}
                        sx={{ justifyContent: 'center' }} // Center the dots
                    />
                </div>
            </div>
        </>
    )
}
