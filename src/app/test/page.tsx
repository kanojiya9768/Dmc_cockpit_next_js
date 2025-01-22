'use client'
import { useState } from 'react';
import React from 'react';

export default function FeaturesSection() {
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

    // Function to calculate the coordinates as percentages
    const getCoordinates = (event: React.MouseEvent<HTMLImageElement>) => {
        const image = event.currentTarget; // Use currentTarget to get the image element
        const rect = image.getBoundingClientRect();
        const imageWidth = rect.width;
        const imageHeight = rect.height;

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const percentageX = ((x / imageWidth) * 100).toFixed(2);
        const percentageY = ((y / imageHeight) * 100).toFixed(2);

        setCoordinates({ x: +percentageX, y: +percentageY });
    };

    return (
        <div>
            <h1>Hover over the image to get coordinates in percentage</h1>
            <img
                src="/features/feature-img.png" // replace with your image
                alt="Image"
                onClick={getCoordinates}
                style={{ border: '2px solid black' }}
            />
            <div style={{ marginTop: '20px' }}>
                <p>
                    x: {coordinates.x}, y: {coordinates.y}
                </p>
            </div>
        </div>
    );
}