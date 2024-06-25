// components/Home.js
import React from 'react';
import Navbar from './Pagebits/Navbar';
import Footer from "./Pagebits/Footer";
import useUpdateLog from '../components/Updatelog';


const Home = () => {
  const data = useUpdateLog();

  return (

      <div className="container full-page text-center">
        <div className="row">
            <Navbar /> {/* Include the Navbar */}

        </div>
        <div className="PageHeader"></div>

        <div className="row">
          <h1 className="display-1 Font2 TC6">Home</h1>
        </div>
       
        <div className="row PageHeader">
        </div>

        <div className="row">
          <h3 className="Font2 FBR">Bookmasters Feed</h3>
          <div id="UpdateLogContainer" className="card card-body BG4">
          <div id="UpdateLogBody">
        {data.length > 0 && data.map((row, index) => {
          if (index === 0) return null; // Skip header row

          const utcTimestamp = row[0];
          const author = row[1];
          const place = row[2];
          const message = row[3];

          const postDate = new Date(parseInt(utcTimestamp) * 1000);
          const now = new Date();
          const timeDiff = Math.abs(now - postDate);

          const diffYears = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
          const diffDays = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
          const diffHours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const diffMinutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
          const diffSeconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

          let timeAgo = '';
          if (diffYears > 0) {
            timeAgo = `${diffYears} years ago`;
          } else if (diffDays > 0) {
            timeAgo = `${diffDays} days ago`;
          } else if (diffHours > 0) {
            timeAgo = `${diffHours} hours ago`;
          } else if (diffMinutes > 0) {
            timeAgo = `${diffMinutes} minutes ago`;
          } else {
            timeAgo = `${diffSeconds} seconds ago`;
          }

          return (
            <figure key={index} className="log-entry">
              <blockquote className="blockquote Font3 FB TC6">
                <p>{message}</p>
              </blockquote>
              <figcaption className="Font2 blockquote-footer TC1">
                Posted <strong>{timeAgo}</strong> by <strong>{author}</strong> in <em>{place}</em>
              </figcaption>
            </figure>
          );
        })}
      </div>
          </div>
        </div>

        <div className="row Divider">
        </div>


        <div className="row">
            <Footer /> {}
          </div>
      </div>

  );
};

export default Home;
