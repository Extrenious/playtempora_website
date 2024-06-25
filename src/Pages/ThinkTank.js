// ThinkTank.js
import React from 'react';
import Navbar from './Pagebits/Navbar';
import useIdeaBoard from '../components/IdeaBoard';

function ThinkTank() {
  const data = useIdeaBoard();

  return (
    <div className="container text-center">
      <div className="row">
            <Navbar /> {/* Include the Navbar */}
      </div>
      <div className="PageHeader"></div>

    <div className="row">
      <h1 className="display-1 Font2">Think Tank</h1>
    </div>
 
    <div className="PageHeader row"> </div>
    <iframe
      className="BG1"
      src="https://docs.google.com/forms/d/e/1FAIpQLSeASu_Tl8TLE3Z1X9LtaV3IR5kOnzUyC76isIUmQsYex80U6g/viewform?embedded=true"
      title="Feedback Form"
      width="700"
      height="1100"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >
      Loading…
    </iframe>
   
    <div className="Divider row"> </div>
    <h1 className="display-1 Font2">Idea Board</h1>

    <div className="row">
    <div id="IdeaBoard" className = " centercontainer FancyBG2">
        {data.length > 0 && data.map((row, index) => {
          if (index === 0) return null; // Skip header row

          const utcTimestamp = row[0];
          const UserName = row[1];
          const IdeaType = row[2];
          const Suggestion = row[3];

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
                <p>{Suggestion}</p>
              </blockquote>
              <figcaption className="Font2 blockquote-footer TC1">
                Suggested <strong>{timeAgo}</strong> by <strong>{UserName}</strong>. <em>{IdeaType}</em> Suggestion
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  </div>
  );
}

export default ThinkTank;
