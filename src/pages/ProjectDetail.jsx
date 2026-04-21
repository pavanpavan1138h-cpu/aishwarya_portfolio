import React from "react";

const ProtectedImage = ({ src, alt = "", className = "" }) => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        draggable="false"
        onError={(e) => {
          e.target.src = "/fallback.jpg"; // fallback image
        }}
        style={{
          userSelect: "none",
          WebkitUserDrag: "none",
        }}
      />

      {/* Watermark */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          right: "12px",
          color: "white",
          fontSize: "12px",
          opacity: 0.6,
          fontWeight: "500",
          pointerEvents: "none",
        }}
      >
        © Aishwarya
      </div>

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "transparent",
        }}
      />
    </div>
  );
};

export default ProtectedImage;