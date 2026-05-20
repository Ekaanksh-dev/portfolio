import { useReducer, useEffect } from "react";
import GlassCard from "../common/GlassCard";
import { TERMINAL_LINES } from "../../utils/constants";

const initialState = {
  lines:   [],
  li:      0,
  ci:      0,
  showOut: false,
  done:    false,
};

function reducer(state, action) {
  switch (action.type) {
    case "TYPE_CHAR":
      return { ...state, ci: state.ci + 1 };
    case "SHOW_OUTPUT":
      return { ...state, showOut: true };
    case "COMMIT_LINE":
      return {
        ...state,
        lines:   [...state.lines, TERMINAL_LINES[state.li]],
        li:      state.li + 1,
        ci:      0,
        showOut: false,
      };
    case "DONE":
      return { ...state, done: true };
    default:
      return state;
  }
}

export default function Terminal() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { lines, li, ci, showOut, done } = state;

  useEffect(() => {
    if (done) return;
    if (li >= TERMINAL_LINES.length) { dispatch({ type: "DONE" }); return; }

    const cur = TERMINAL_LINES[li];
    let id;

    if (!showOut && ci < cur.cmd.length)
      id = setTimeout(() => dispatch({ type: "TYPE_CHAR" }), 44);
    else if (!showOut && ci === cur.cmd.length)
      id = setTimeout(() => dispatch({ type: "SHOW_OUTPUT" }), 200);
    else if (showOut)
      id = setTimeout(() => dispatch({ type: "COMMIT_LINE" }), 300);

    return () => clearTimeout(id);
  }, [state]);

  const cur = TERMINAL_LINES[li];

  return (
    <GlassCard glow="#6366f1" style={{ padding: "18px 22px", fontFamily: "'Courier New',monospace", fontSize: 12 }}>
      {/* Window chrome */}
      <div style={{ display: "flex", gap: 7, marginBottom: 14, alignItems: "center" }}>
        {["#ef4444", "#f59e0b", "#10b981"].map(c => (
          <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c, boxShadow: `0 0 6px ${c}99` }} />
        ))}
        <span style={{ marginLeft: "auto", color: "rgba(255,255,255,0.2)", fontSize: 9 }}>
          zsh — ekaanksh@devbox
        </span>
      </div>

      {/* Completed lines */}
      {lines.map((l, i) => (
        <div key={i} style={{ marginBottom: 6 }}>
          <div style={{ color: l.cmdC }}>{l.cmd}</div>
          <div style={{ color: l.outC, paddingLeft: 10, marginTop: 2 }}>{l.out}</div>
        </div>
      ))}

      {/* Currently typing */}
      {!done && cur && (
        <div style={{ color: cur.cmdC }}>
          {cur.cmd.slice(0, ci)}
          <span style={{ animation: "blink 1s step-end infinite", color: "#6366f1" }}>▋</span>
        </div>
      )}

      {done && (
        <div style={{ color: "#6366f1", animation: "blink 1s step-end infinite" }}>▋</div>
      )}
    </GlassCard>
  );
}
