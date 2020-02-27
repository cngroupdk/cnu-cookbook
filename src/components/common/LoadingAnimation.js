import React from "react";

export function LoadingAnimation() {
  return (
    <p>
      <span className="loader">
        <i className="fa fa-spinner fa-spin"></i>
        Loading data...
      </span>
    </p>
  );
}
