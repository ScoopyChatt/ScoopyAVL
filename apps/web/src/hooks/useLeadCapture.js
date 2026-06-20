import { useState } from 'react';

export function useLeadCapture() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLeadCaptured, setIsLeadCaptured] = useState(false);
  const [leadData, setLeadData] = useState(null);

  const submitLead = async (data) => {
    setIsLoading(true);
    try {
      const cleanData = {
        name: data.name || '',
        phone: data.phone || '',
        zipCode: data.zipCode || '',
        numberOfDogs: data.numberOfDogs ? parseInt(data.numberOfDogs, 10) : 1,
      };
      setLeadData(cleanData);
      setIsLeadCaptured(true);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { leadData, isLoading, error, submitLead, isLeadCaptured };
}
