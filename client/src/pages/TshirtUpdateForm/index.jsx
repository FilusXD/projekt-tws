import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateTshirt, getTshirtById } from "../../models/Tshirt";
import React from "react";

export default function TshirtUpdateForm() {
  const { id: idFromUrl } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const [isLoaded, setLoaded] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    const loadTshirtForUpdate = async () => {
      setLoaded(false);
      setMessage({ text: "", type: "" });

      const currentIdString = String(idFromUrl);

      if (
        !currentIdString ||
        currentIdString.toLowerCase() === "[object object]"
      ) {
        setMessage({ text: `Chyba: Neplatné ID trička v URL.`, type: "error" });
        setLoaded(null);
        return;
      }

      console.log(
        "UPDATE_FORM (load): Načítám data pro tričko s ID:",
        currentIdString
      );
      const data = await getTshirtById(currentIdString);

      if (data.status === 200 && data.payload) {
        setFormData(data.payload);
        setLoaded(true);
      } else {
        setMessage({
          text: data.message || "Tričko pro úpravu nenalezeno.",
          type: "error",
        });
        setLoaded(null);
      }
    };

    if (idFromUrl) {
      loadTshirtForUpdate();
    }
  }, [idFromUrl]);

  const handleUpdateSubmit = async (e) => {
    if (e) e.preventDefault();
    setMessage({ text: "", type: "" });

    const idToUpdate = String(idFromUrl);

    if (!idToUpdate || idToUpdate.toLowerCase() === "[object object]") {
      setMessage({
        text: `Chyba: Neplatné ID pro aktualizaci.`,
        type: "error",
      });
      return;
    }

    const { _id, id, ...dataToUpdate } = formData;

    // =======================================================
    // ZDE JE PŘIDANÁ KONTROLA
    // =======================================================
    console.log("--- KONTROLA PŘED ODESLÁNÍM ---");
    console.log("ID, které posílám na server:", idToUpdate);
    console.log("Jeho datový typ je:", typeof idToUpdate);
    console.log("Data k aktualizaci:", dataToUpdate);
    // =======================================================


    const response = await updateTshirt(idToUpdate, dataToUpdate);

    console.log("Odpověď z updateTshirt:", response);

    if (response.status === 200) {
      setMessage({ text: "Tričko úspěšně aktualizováno!", type: "success" });
      setTimeout(() => {
        navigate(`/tshirt/${idToUpdate}`);
      }, 1500);
    } else {
      setMessage({
        text: response.message || "Aktualizace se nezdařila.",
        type: "error",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInput = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (isLoaded === null) {
    return (
      <div className="w-screen min-h-screen flex flex-col items-center justify-center m-0 p-0 dark-theme-page text-white">
        <div
          className="text-center p-12 md:p-20 rounded-xl shadow-lg flex flex-col items-center justify-center"
          style={{
            backgroundColor: "#3a3a3a",
            minHeight: "300px",
            maxWidth: "600px",
          }}
        >
          <p className="text-2xl font-bold highlightedtext2 mb-6">
            {message.text || "Tričko nenalezeno."}
          </p>
          <Link to="/view-tshirt" style={{ cursor: "pointer" }}>
            <button className="bgcontainer2 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-xl shadow-lg">
              Zpět na seznam objednávek
            </button>
          </Link>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="w-screen min-h-screen flex flex-col items-center justify-center m-0 p-0 dark-theme-page text-white">
        <p className="text-xl text-gray-300 mt-4 animate-pulse">
          Načítání formuláře pro úpravu...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 dark-theme-page text-white">
      <div
        className="w-full p-6 md:p-8 rounded-xl shadow-xl"
        style={{ backgroundColor: "#3a3a3a", maxWidth: "950px" }}
      >
        <h1 className="text-4xl font-extrabold text-center mb-8 highlightedtext2">
          Upravit tričko
        </h1>
        <p className="text-md text-gray-400 mb-6 text-center">
          ID objednávky: {idFromUrl}
        </p>

        {message.text && (
          <p
            className={`mb-4 text-center p-3 rounded-md ${
              message.type === "success"
                ? "text-green-400 bg-green-900"
                : "text-red-300 bg-red-900"
            }`}
          >
            {message.text}
          </p>
        )}

        <form onSubmit={handleUpdateSubmit} className="space-y-6">
          <div>
            <label
              className="block text-lg font-semibold mb-2"
              htmlFor="customer"
            >
              Jméno zákazníka
            </label>
            <input
              id="customer"
              name="customer"
              type="text"
              required
              placeholder="Jméno zákazníka"
              onChange={handleChange}
              value={formData.customer || ""}
              className="w-full px-4 py-2.5 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>
          <fieldset>
            <legend className="text-lg font-semibold mb-2">Vyber barvu</legend>
            <div className="grid grid-cols-3 gap-4">
              {["bílá", "černá", "modrá"].map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => handleInput("color", color.toLowerCase())}
                  className={`cursor-pointer rounded-2xl border-2 p-4 text-lg font-medium transition-colors
                    ${
                      (formData.color || "").toLowerCase() ===
                      color.toLowerCase()
                        ? "bgcontainer2 border-yellow-500 text-black shadow-md"
                        : "bg-gray-700 border-gray-600 hover:bg-gray-600 text-gray-200"
                    }`}
                >
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend className="text-lg font-semibold mb-2">
              Vyber velikost
            </legend>
            <div className="grid grid-cols-3 gap-4">
              {["M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => handleInput("size", size)}
                  className={`cursor-pointer rounded-2xl border-2 p-4 text-lg font-medium transition-colors
                    ${
                      formData.size === size
                        ? "bgcontainer2 border-yellow-500 text-black shadow-md"
                        : "bg-gray-700 border-gray-600 hover:bg-gray-600 text-gray-200"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </fieldset>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="text">
              Napiš svůj text na triko
            </label>
            <input
              id="text"
              name="text"
              type="text"
              required
              placeholder="Tvůj text na tričko"
              onChange={handleChange}
              value={formData.text || ""}
              className="w-full px-4 py-2.5 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>
          <fieldset>
            <legend className="text-lg font-semibold mb-2">
              Chceš nálepku?
            </legend>
            <div className="grid grid-cols-2 gap-4">
              {["Ano", "Ne"].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleInput("logo", option)}
                  className={`cursor-pointer rounded-2xl border-2 p-4 text-lg font-medium transition-colors
                    ${
                      formData.logo === option
                        ? "bgcontainer2 border-yellow-500 text-black shadow-md"
                        : "bg-gray-700 border-gray-600 hover:bg-gray-600 text-gray-200"
                    }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </fieldset>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              type="submit"
              className="w-full sm:w-auto flex-grow bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg"
            >
              Aktualizovat tričko
            </button>
            <Link
              to={`/tshirt/${idFromUrl}`}
              className="w-full sm:w-auto flex-grow bgcontainer2 hover:bg-yellow-600 text-black text-center font-bold py-3 px-6 rounded-xl shadow-lg"
            >
              Zpět
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}