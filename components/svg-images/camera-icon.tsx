import React from 'react';

interface Props {
  width?: number;
  height?: number;
  circleFill?: string;
  circleStroke?: string;
  pathStroke?: string;
  className?: string;
}

const CameraIcon: React.FC<Props> = ({
  width = 27,
  height = 27,
  circleFill = "white",
  circleStroke = "#DBDBDB",
  pathStroke = "#2C2C2C",
  className = "",
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g id="Group_47643">
        <circle id="Ellipse_6012" cx="13.3333" cy="13.3333" r="13.0435" fill={circleFill} stroke={circleStroke} strokeWidth="0.57971" />
        <g id="Group">
          <path id="Vector" d="M13.2819 15.5492C14.2388 15.5492 15.0145 14.7735 15.0145 13.8166C15.0145 12.8597 14.2388 12.084 13.2819 12.084C12.325 12.084 11.5493 12.8597 11.5493 13.8166C11.5493 14.7735 12.325 15.5492 13.2819 15.5492Z" stroke={pathStroke} strokeWidth="0.869565" strokeLinecap="round" strokeLinejoin="round" />
          <path id="Vector_2" d="M15.4599 10.3551C15.1318 10.3551 14.8658 10.0891 14.8658 9.76103V9.76103C14.8658 9.43295 14.5999 9.16699 14.2718 9.16699H12.2917C11.9636 9.16699 11.6977 9.43295 11.6977 9.76103V9.76103C11.6977 10.0891 11.4317 10.3551 11.1036 10.3551H9.4934C8.85307 10.3551 8.33398 10.8742 8.33398 11.5145V16.1235C8.33398 16.7638 8.85307 17.2829 9.4934 17.2829H17.0701C17.7104 17.2829 18.2295 16.7638 18.2295 16.1235V11.5145C18.2295 10.8742 17.7104 10.3551 17.0701 10.3551H15.4599Z" stroke={pathStroke} strokeWidth="0.869565" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
    </svg>
  );
};

export default CameraIcon;
