import React, { useEffect } from "react";

function SearchWidget() {
  useEffect(() => {
    if (!document.querySelector('script[src*="cse.google.com"]')) {
      const script = document.createElement("script");
      script.src = "https://cse.google.com/cse.js?cx=2715d494fe45d4bcc";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <style>{`
        /* Hide thumbnails/images */
        .gsc-thumbnail {
          display: none !important;
        }

        /* Hide description/snippet text */
        .gsc-webResult-snippet {
          display: none !important;
        }

        /* Hide URL (if shown) */
        .gsc-url-top, .gsc-url-bottom {
          display: none !important;
        }

        /* Style the title links */
        .gsc-webResult a.gs-title,
        .gsc-webResult a.gs-title:visited {
          color: #1a0dab;
          font-weight: 600;
          text-decoration: underline;
        }

        /* Spacing between results */
        .gsc-webResult {
          margin-bottom: 12px;
        }
      `}</style>

      <div className="gcse-search"></div>
    </>
  );
}

export default SearchWidget;
