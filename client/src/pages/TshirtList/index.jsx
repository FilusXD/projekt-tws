import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllTshirts } from "../../models/Tshirt";
import TshirtLink from "./TshirtLink";

export default function TshirtList() {
  const [tshirts, setTshirts] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(null);

  const loadTshirts = async () => {
    const data = await getAllTshirts();
    if (data.status === 404 || data.status === 500) {
      setLoaded(null);
    } else if (data.status === 200) {
      setTshirts(data.payload);
      setLoaded(true);
    } else {
      setLoaded(null);
      setDeleteStatus("Nepodařilo se načíst objednávky.");
    }
  };

  useEffect(() => {
    loadTshirts();
  }, []);

  if (isLoaded === null) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 dark-theme-page text-white">
        <div
          className="w-full max-w-2xl p-8 md:p-12 rounded-xl shadow-xl text-center"
          style={{ backgroundColor: "#3a3a3a" }}
        >
          <h1 className="text-3xl font-extrabold highlightedtext2 mb-6">
            Nebyly nalezeny žádné objednávky
          </h1>

         
          {deleteStatus && !deleteStatus.includes("načíst") && (
            <p className="text-white mt-4 mb-4">{deleteStatus}</p>
          )}
          <Link to="/" style={{ cursor: "pointer" }}>
            <button
              className="bgcontainer2 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 text-lg"
              style={{ cursor: "pointer" }}
            >
              Zpět na hlavní stránku
            </button>
          </Link>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 dark-theme-page text-white">
        <div
          className="w-full max-w-md p-8 md:p-12 rounded-xl shadow-xl text-center"
          style={{ backgroundColor: "#3a3a3a" }}
        >
          <h1 className="text-3xl font-extrabold highlightedtext2 mb-6 animate-pulse">
            Načítání objednávek...
          </h1>
          {deleteStatus && <p className="text-white mt-4">{deleteStatus}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4 dark-theme-page text-white">
      <div
        className="w-full max-w-7xl p-6 md:p-10 rounded-xl shadow-xl"
        style={{ backgroundColor: "#3a3a3a" }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold highlightedtext2 mb-10 text-center drop-shadow-lg">
          Objednávky
        </h1>

        {deleteStatus && (
          <p
            className={`text-center mb-6 text-lg ${
              deleteStatus.includes("Chyba") ||
              deleteStatus.includes("Nepodařilo")
                ? "text-red-300"
                : "text-green-300"
            }`}
          >
            {deleteStatus}
          </p>
        )}

        {tshirts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tshirts.map((tshirt, index) => (
              <TshirtLink key={tshirt._id || index} {...tshirt} />
            ))}
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center py-10">
            <p className="text-center text-gray-300 text-2xl font-semibold">
              Zatím nejsou žádné objednávky.
            </p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076503.png" 
              alt="Žádné objednávky"
              className="w-32 h-32 mt-6 opacity-50"
            />
          </div>
        )}

        <div className="mt-12 text-center pb-4 flex flex-col items-center gap-4">
          <Link to="/" style={{ cursor: "pointer" }}>
            <button
              className="bgcontainer2 hover:bg-yellow-600 text-black font-bold py-3 md:py-4 px-8 md:px-12 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 text-lg md:text-xl"
              style={{ cursor: "pointer" }}
            >
              Zpět na hlavní stránku
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
