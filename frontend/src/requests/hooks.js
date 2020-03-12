import { useEffect, useState } from 'react';

/**
 * Updates variables with the status of an request
 * @param {*} defaultStatus 
 * @returns [{loading, error, result, status}, updateStatus]
 */
export const useStatus = (defaultStatus = {}) => {
  const [loading, setLoading] = useState(defaultStatus.loading || false);
  const [error, setError] = useState(defaultStatus.error);
  const [result, setResult] = useState(defaultStatus.result);
  const [status, setStatus] = useState(defaultStatus.status);
  
  const updateStatus = (status) => {
    setLoading(status.loading);
    setError(status.error);
    setResult(status.result);
    setStatus(status.status);
  }

  return [{loading, error, result, status}, updateStatus];
};

/**
 * Excecutes an request and returns the result
 * @param {*} request 
 * @param {*} arguments 
 * @returns [{loading, error, result, status}, updateStatus]
 */
export const useRequest = (request, params) => {
    const [{loading, error, result, status}, updateStatus] = useStatus()

    useEffect(() => {
        request(updateStatus, params);
      }, []);

    return {result, loading, error, status};
};
