import React from "react";
import { cv } from "../assets";

export default function CvButton({title}) {
  return (
    <div>
      <a
        href={cv}
        download="Moaad_Msellek_CV.pdf"
        className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500 text-white font-medium shadow-lg transform transition duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-violet-300/40 active:scale-100"
        aria-label="Download report"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>

        <span>{title}</span>
      </a>
    </div>
  );
}
