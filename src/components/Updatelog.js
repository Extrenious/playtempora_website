// src/components/UpdateLog.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const useUpdateLog = () => {
  const [data, setData] = useState([]);
  const API_KEY = 'AIzaSyAMPhcHINuBnJ7ATZhjjCbNJBYYP0B9u8Q'; // Replace with your actual API key
  const SPREADSHEET_ID = '1cVLnQOB6RpeNYx9MOn8q1MMxLfBtf0vVI1T3wKh9qAo';
  const RANGE = 'UpdateLog!A:D';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
        );
        setData(response.data.values);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return data;
};

export default useUpdateLog;
