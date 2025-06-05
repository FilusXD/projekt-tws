import { Link, useParams, useNavigate } from "react-router-dom";
import { getTshirtById, deleteTshirt } from "../../models/Tshirt";
import { useState, useEffect } from "react";

import whiteShirt from "../../images/white-shirt.png";
import blackShirt from "../../images/black-shirt.png";
import blueShirt from "../../images/blue-shirt.png";

export default function TshirtView() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [tshirt, setTshirt] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  
  const [confirmNameInput, setConfirmNameInput] = useState(""); 

  const colorImages = {
    'bílá': whiteShirt,
    'černá': blackShirt,
    'modrá': blueShirt,
  };

  const loadTshirtData = async () => {
    setLoaded(false);
    setMessage({ text: "", type: "" });
    console.log("TshirtView: Načítám tričko s ID:", id);
    const data = await getTshirtById(id);
    console.log("TshirtView: Odpověď z getTshirtById:", data);

    if (data.status === 200 && data.payload) {
      setTshirt(data.payload);
      setLoaded(true);
    } else {
      setMessage({ text: data.message || "Tričko nebylo nalezeno.", type: "error" });
      setLoaded(null);
    }
  };

  useEffect(() => {
    if (id) {
      loadTshirtData();
    }
  }, [id]);

  const handleDelete = async (e) => {
    e.preventDefault();
    setMessage({ text: "", type: "" });

    if (!tshirt) {
        setMessage({ text: "Data trička nejsou načtena, nelze smazat.", type: "error" });
        return;
    }

    if (tshirt.customer === confirmNameInput) {
      console.log("TshirtView: Mažu tričko s ID:", tshirt._id || id);
      const response = await deleteTshirt(tshirt._id || id);
      console.log("TshirtView: Odpověď z deleteTshirt:", response);

      if (response.status === 200) {
        setMessage({ text: "Objednávka byla úspěšně smazána. Přesměrovávám...", type: "success" });
        setTimeout(() => navigate(`/view-tshirt`), 2000);
      } else {
        setMessage({ text: response.message || "Smazání se nezdařilo.", type: "error" });
      }
    } else {
      setMessage({ text: "Jméno pro potvrzení smazání se neshoduje.", type: "error" });
    }
  };

  if (isLoaded === null) {
    return (
      <div className="w-screen min-h-screen flex flex-col items-center justify-center m-0 p-4 dark-theme-page text-white">
        <div 
          className="text-center p-10 md:p-16 rounded-xl shadow-xl flex flex-col items-center justify-center" 
          style={{ backgroundColor: '#3a3a3a', minHeight: '300px', maxWidth: '600px' }}
        >
          <p className="text-2xl font-bold highlightedtext2 mb-6">Chyba</p>
          <p className="text-red-300 text-lg mb-6">{message.text || "Tričko nenalezeno."}</p>
          <Link to="/view-tshirt" style={{ cursor: 'pointer' }}>
            <button className="bgcontainer2 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-xl shadow-lg">
              Zpět na seznam objednávek
            </button>
          </Link>
        </div>
      </div>
    );
  }

  if (!isLoaded || !tshirt) {
    return (
      <div className="w-screen min-h-screen flex flex-col items-center justify-center m-0 p-0 dark-theme-page text-white">
        <p className="text-xl text-gray-300 mt-4 animate-pulse">Načítání detailu trička...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 dark-theme-page text-white">
      <div 
        className="w-full p-6 md:p-8 rounded-xl shadow-xl" 
        style={{ backgroundColor: '#3a3a3a', maxWidth: '1000px' }}
      >
        {message.text && (
          <p className={`mb-4 text-center p-3 rounded-md ${
            message.type === "success" ? "text-green-400 bg-green-900" : "text-red-300 bg-red-900"
          }`}>
            {message.text}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
      
          <div className="flex flex-col items-center justify-start">
            <h1 className="text-3xl md:text-4xl font-extrabold highlightedtext2 mb-6 text-center md:text-left w-full">
              Detail objednávky
            </h1>
            <img
              src={colorImages[tshirt.color?.toLowerCase()] || whiteShirt}
              alt={`Tričko ${tshirt.color || 'N/A'}`}
              className="w-64 h-64 md:w-80 md:h-80 object-contain mb-6 rounded-lg shadow-lg"
              style={{backgroundColor: tshirt.color?.toLowerCase() === "bílá" ? "#555" : "transparent"}} 
            />
            <div className="flex flex-col gap-4 w-full max-w-xs mt-auto">
          
              <Link
                to={`/update-tshirt/${id}`}
                className="w-full bgcontainer2 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-xl shadow-lg text-center"
              >
                Upravit objednávku
              </Link>
              <Link
                to="/view-tshirt"
                className="w-full bgcontainer2 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-xl shadow-lg text-center"
              >
                Zpět na seznam
              </Link>
            </div>
          </div>

        
          <div className="space-y-5 flex flex-col">
            <div>
              <p className="text-gray-400 text-sm">Zákazník:</p>
              <p className="text-2xl highlightedtext2">{tshirt.customer}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Barva:</p>
              <p className="text-xl">{tshirt.color?.charAt(0).toUpperCase() + (tshirt.color?.slice(1) || '')}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Velikost:</p>
              <p className="text-xl">{tshirt.size}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Vlastní text:</p>
              <p className="text-xl italic">„{tshirt.text}“</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Nálepka:</p>
              <p className="text-xl">{tshirt.logo}</p>
            </div>
            
            <hr className="border-gray-600 my-6"/>

            <form onSubmit={handleDelete}>
              <div>
                <label className="block text-lg font-semibold mb-2 highlightedtext2" htmlFor="confirmNameInput">
                  Smazat tuto objednávku?
                </label>
                <p className="text-sm text-gray-400 mb-2">Pro potvrzení smazání zadejte jméno zákazníka ({tshirt.customer || 'N/A'}):</p>
                <input
                  id="confirmNameInput" 
                  name="confirmNameInput" 
                  type="text" 
                  placeholder="Zadejte jméno zákazníka"
                  value={confirmNameInput} 
                  onChange={(e) => setConfirmNameInput(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-yellow-500 focus:ring-yellow-500 mb-3"
                />
                <button 
                  type="submit" 
                  className={`w-full font-bold py-3 px-6 rounded-xl shadow-lg transition
                    ${confirmNameInput && tshirt && confirmNameInput === tshirt.customer 
                      ? "bg-red-600 hover:bg-red-700 text-white" 
                      : "bg-gray-700 text-gray-400 cursor-not-allowed"
                    }`}
                  disabled={!confirmNameInput || !tshirt || confirmNameInput !== tshirt.customer}
                >
                  Smazat objednávku
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}