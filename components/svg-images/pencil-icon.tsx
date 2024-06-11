import React from 'react'


interface PencilIconProps{
    width?: number;
    height?: number;
    fill?: string;
    className?: string;
}

function PencilIcon( { width = 16, height = 16, fill = "#000000", className = "" }: PencilIconProps )
{
  return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={width} viewBox="0 0 16 16" fill={fill} className={className}>
            <path d="M1.71729 15.4781C1.07065 15.6514 0.478908 15.0597 0.652237 14.413L1.05834 12.898C1.23164 12.2515 2.03983 12.0349 2.51314 12.5083L3.62207 13.6172C4.09537 14.0905 3.87886 14.8987 3.23233 15.072L1.71729 15.4781Z" stroke="#2C2C2C" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.7704 2.14003L13.991 1.36061C13.3118 0.681438 12.2107 0.681438 11.5315 1.36061L4.27756 8.61453C3.59839 9.2937 3.59839 10.3949 4.27756 11.074L5.05698 11.8534C5.73615 12.5326 6.83731 12.5326 7.51648 11.8534L14.7704 4.59953C15.4496 3.92036 15.4496 2.8192 14.7704 2.14003Z" stroke="#2C2C2C" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
  )
}

export default PencilIcon