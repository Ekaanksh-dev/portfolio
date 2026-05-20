import { forwardRef } from "react";

const GlassCard = forwardRef(function GlassCard({ children, glow, style = {} }, ref) {
  return (
    <div
      ref={ref}
      style={{
        background:    "rgba(8,10,22,0.75)",
        border:        `1px solid ${glow ? glow + "40" : "rgba(255,255,255,0.08)"}`,
        borderRadius:  20,
        backdropFilter:"blur(16px)",
        boxShadow:     glow
          ? `0 0 40px ${glow}18, 0 12px 40px rgba(0,0,0,0.5)`
          : "0 8px 40px rgba(0,0,0,0.4)",
        ...style,
      }}
    >
      {children}
    </div>
  );
});

export default GlassCard;
