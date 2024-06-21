// src/hooks/useGoogleSheets.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const useGoogleSheets = (spreadsheetId, range, apiKey) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`
        );
        setData(response.data.values);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [spreadsheetId, range, apiKey]);

  return { data, loading };
};

export default useGoogleSheets;
