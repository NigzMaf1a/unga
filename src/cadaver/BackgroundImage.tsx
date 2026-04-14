import React from "react";

interface BackgroundImageProps {
  src: string;
  overlay?: boolean;        // optional dark overlay for readability
  children?: React.ReactNode; // content on top of background
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  src,
  overlay = true,
  children
}) => {
  return (
    <div className="min-h-screen overflow-hidden relative w-full">
      
      {/* Background Image */}
      <div
        className="absolute bg-center bg-cover bg-no-repeat inset-0"
        style={{
          backgroundImage: `url(${src})`,
        }}
      />

      {/* Optional overlay */}
      {overlay && (
        <div className="absolute bg-black/40 inset-0" />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
};

export default BackgroundImage;