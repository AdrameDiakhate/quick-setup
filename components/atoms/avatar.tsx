'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react'

export type AvatarProps = {
    src: string;
    key?: number;
    alt?: string;
    size: "lg" | "md" | "sm";
    className?: string;
};

const sizeDimensions = {
    lg: { width: 72, height: 72 },
    md: { width: 48, height: 48 },
    sm: { width: 32, height: 32 },
};

const sizeClasses = {
    lg: "avatar-lg",
    md: "avatar-md",
    sm: "avatar-sm",
};



export default function Avatar({ key, src, alt , size, className} : AvatarProps) {
    const sizeClass = sizeClasses[size];
    const { width , height } = sizeDimensions[size]


  return (
    <div className={`${className}`}>
             <Image
                key={key}
                src={src}
                className={`${sizeClass} flex-shrink-0 rounded-full bg-[#D9D9D9] custom-background`}
                alt={alt || `Avatar ${key}`}
                layout="fixed"
                width={width}
                height={height}
            />
    </div>
  )
}
