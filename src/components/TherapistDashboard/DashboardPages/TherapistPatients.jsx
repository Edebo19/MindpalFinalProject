import React, { useEffect, useState } from 'react';

const TherapistPatients = () => {
  const [remainingPeriod, setRemainingPeriod] = useState(10); // Initialize with total period
  const [progressValue, setProgressValue] = useState(100); // Initialize with full progress bar

  useEffect(() => {
    const startDate = new Date(Date.now() - 30 * 60 * 1000); // 30 minutes ago
    const currentDate = new Date();
    const totalPeriod = 10; // Total period in minutes
    const reductionRate = 2 / totalPeriod;

    // Calculate the remaining subscription period
    const remainingPeriod = Math.max(0, totalPeriod - ((currentDate - startDate) / 60000));
    setRemainingPeriod(remainingPeriod);

    // Update the progress bar
    const progressValue = 100 - (remainingPeriod * reductionRate * 100);
    setProgressValue(progressValue);
  }, []); // Remove dependency on remainingPeriod

  return (
    <progress value={progressValue} max="100" />
  );
}

export default TherapistPatients;