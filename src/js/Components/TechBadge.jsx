import React from "react";

const TechBadge = (props) => {
  const hexToRgb = (color) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  let color = hexToRgb(props.hexColor);
  color = `rgba(${color.r}, ${color.g}, ${color.b}, .4)`
  return (<span class={`badge rounded-pill`} style={{backgroundColor: color, border: `2px solid ${color}`}}>{props.techName}</span>)
}

export default TechBadge;