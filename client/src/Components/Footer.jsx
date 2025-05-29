import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-purple-800 text-center py-2 text-sm">
      &copy; {new Date().getFullYear()} TričkoDesign | Všechna práva vyhrazena
    </footer>
  );
}