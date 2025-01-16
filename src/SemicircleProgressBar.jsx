import React from "react";

const SemicircleProgressBar = ({ 
  points, 
  minPoints = 300,  
  maxPoints = 900,   
  showPercentage = false 
}) => {
  const clampedPoints = Math.min(Math.max(points, minPoints), maxPoints);

  const progressPercentage =
    ((clampedPoints - minPoints) / (maxPoints - minPoints)) * 100;

  return (
    <div style={styles.container}>
      <svg
        viewBox="0 0 120 70"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.svg}
      >
  
        <path
          d="M 10 60 A 50 50 0 0 1 110 60"
          fill="none"
          stroke="#e6e6e6"
          strokeWidth="10"
          strokeLinecap="round"
        />

 
        <path
          d="M 10 60 A 50 50 0 0 1 110 60"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="10"
          strokeDasharray="157"
          strokeDashoffset={157 - (157 * progressPercentage) / 100}
          strokeLinecap="round"
        />

        
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="red" />
            <stop offset="50%" stopColor="yellow" />
            <stop offset="100%" stopColor="green" />
          </linearGradient>
        </defs>
      </svg>

      {/* Progress Bar text  */}
      <div style={styles.text}>
        {showPercentage 
          ? `${Math.round(progressPercentage)}%`
          : points
        }
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    width: "400px",
    height: "200px",
    margin: "0 auto",
  },
  svg: {
    width: "100%",
    height: "100%",
  },
  text: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "32px",
    fontWeight: "bold",
    color: "#333",
  },
};

export default SemicircleProgressBar;
