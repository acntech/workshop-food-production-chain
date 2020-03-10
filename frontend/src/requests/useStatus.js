import { useState } from 'react';

const useStatus = (defaultStatus = {}) => {
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
}

export default useStatus;