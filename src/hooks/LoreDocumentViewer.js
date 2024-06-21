// src/components/DocumentViewer.js
import React, { useState } from 'react';
import useGoogleSheets from '../components/UseGoogleSheets';

const LoreDocumentViewer = () => {
  const API_KEY = 'AIzaSyAMPhcHINuBnJ7ATZhjjCbNJBYYP0B9u8Q'; // Replace with your actual API key
  const SPREADSHEET_ID = '1cVLnQOB6RpeNYx9MOn8q1MMxLfBtf0vVI1T3wKh9qAo';
  const RANGE = 'DevDocLore!A:D';
  const { data, loading } = useGoogleSheets(SPREADSHEET_ID, RANGE, API_KEY);
  const [selectedDocument, setSelectedDocument] = useState(null);

  if (loading) {
    return <p>Loading...</p>;
  }

  const renderDocument = (doc) => {
    return (
      <div id="documentViewer" dangerouslySetInnerHTML={{ __html: doc }} />
    );
  };

  return (
    <div className="document-viewer">
      <div id="documentList">
        {data.length > 1 ? (
          data.slice(1).map((row, index) => (
            <div key={index} className="document-entry btn btn-secondary " onClick={() => setSelectedDocument(row[3])}>
              <p className = "Font2">
               {row[2]} 
              </p>
              <p className= "Font3" >
                View Lore Doc
              </p>
            </div>
          ))
        ) : (
          <p>No documents found.</p>
        )}
      </div>
      {selectedDocument && renderDocument(selectedDocument)}
    </div>
  );
};

export default LoreDocumentViewer;
