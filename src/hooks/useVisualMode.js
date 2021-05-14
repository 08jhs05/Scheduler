import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = function(newMode, replace=false) {
    const temp = [...history];
    if(replace) temp.pop();
    temp.push(newMode);
    setHistory(temp);
    setMode(newMode);
  };

  const back = function() {
    if (history.length <= 1) return;
    const temp = [...history];
    temp.pop();
    setHistory(temp);
    setMode(temp[temp.length-1]);
  };

  return {
    mode,
    transition,
    back
  };
}