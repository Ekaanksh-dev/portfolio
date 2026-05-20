export default function CredentialButton({ href, color }) {
  if (!href) return null;

  return (
    
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        display:       "inline-flex",
        alignItems:    "center",
        gap:           6,
        marginTop:     10,
        padding:       "5px 14px",
        background:    color + "18",
        border:        `1px solid ${color}44`,
        borderRadius:  100,
        color:         color,
        fontSize:      10,
        fontWeight:    700,
        textDecoration:"none",
        letterSpacing: "0.05em",
        transition:    "all 0.2s ease",
      }}
      onMouseEnter={e => { e.currentTarget.style.background = color + "30"; }}
      onMouseLeave={e => { e.currentTarget.style.background = color + "18"; }}
    >
      ⬡ View Credential →
    </a>
  );
}
