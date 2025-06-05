import React from "react";
import { Link } from "react-router-dom";

import whiteShirt from "../../images/white-shirt.png";
import blackShirt from "../../images/black-shirt.png";
import blueShirt from "../../images/blue-shirt.png";

export default function TshirtLink({
  _id,
  id,
  customer,
  color,
  size,
  logo,
  text,
}) {
  const TShirtId = _id || id;
  const linkPath = TShirtId ? `/tshirt/${TShirtId}` : "#";

  const colorImages = {
    bílá: whiteShirt,
    černá: blackShirt,
    modrá: blueShirt,
  };

  const tshirtImage = colorImages[color?.toLowerCase()] || whiteShirt;

  return (
    <Link
      to={linkPath}
      className="block rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden"
      style={{
        backgroundColor: "#555555",
      }}
    >
      <div
        className="w-full h-48 sm:h-56 flex items-center justify-center"
        style={{ backgroundColor: "#4a4a4a" }}
      >
        <img
          src={tshirtImage}
          alt={`Tričko ${color || ""}`}
          className="max-h-full max-w-full object-contain p-2"
        />
      </div>

      <div style={{ padding: "1.5rem" }}>
        <h3
          className="text-xl font-semibold mb-3 truncate"
          style={{ color: "#ffd43b" }}
        >
          {customer || "Neznámý zákazník"}
        </h3>
        <div className="space-y-1.5 text-sm" style={{ color: "#e0e0e0" }}>
          <div>
            <span className="font-medium" style={{ color: "#a0a0a0" }}>
              Zákazník:{" "}
            </span>
            {customer || "N/A"}
          </div>
          <div>
            <span className="font-medium" style={{ color: "#a0a0a0" }}>
              Barva:{" "}
            </span>
            {color || "N/A"}
          </div>
          <div>
            <span className="font-medium" style={{ color: "#a0a0a0" }}>
              Velikost:{" "}
            </span>
            {size || "N/A"}
          </div>
          {text && (
            <div>
              <span className="font-medium" style={{ color: "#a0a0a0" }}>
                Text:{" "}
              </span>
              <span className="italic">"{text}"</span>
            </div>
          )}
          <div>
            <span className="font-medium" style={{ color: "#a0a0a0" }}>
              Logo:{" "}
            </span>
            {logo || "N/A"}
          </div>
        </div>
      </div>
    </Link>
  );
}
