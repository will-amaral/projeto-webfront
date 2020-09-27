import { useState, useEffect, useCallback } from 'react';
import { axios, mockAxios } from 'utils/api';

import useIsMountedRef from './useIsMountedRef';

export default function useFetch(initialUrl, initialParams = {}, isReal = true) {
  const [url, updateUrl] = useState(initialUrl);
  const [params, updateParams] = useState(initialParams);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const isMountedRef = useIsMountedRef();

  const getData = useCallback(async () => {
    setLoading(true);
    const api = isReal ? axios : mockAxios;
    try {
      const { data } = await api.get(url, params);
      if (isMountedRef.current) {
        setData(data);
      }
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, [isMountedRef, isReal, url, params]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data, loading, error, updateUrl, updateParams, refetch: getData };
}
