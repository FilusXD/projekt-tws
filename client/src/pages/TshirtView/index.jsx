import { Link, useParams, useNavigate } from "react-router-dom";
import { getTshirtById, deleteTshirt } from "../../models/Tshirt";
import { useState, useEffect } from "react";
import whiteShirt from "../../images/white-shirt.png"
import blackShirt from "../../images/black-shirt.png"
import blueShirt from "../../images/blue-shirt.png"


export default function TshirtView() {
  const { id } = useParams();
  const [Tshirt, setTshirt] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState("");
  const navigate = useNavigate();

  const load = async () => {
    const data = await getTshirtById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setTshirt(data.payload);
      setLoaded(true);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (Tshirt.customer === formData) {
      const data = await deleteTshirt(id);
      if (data.status === 200) {
        navigate(`/`);
      } else {
        setInfo(data.message);
      }
    } else {
      setInfo("Zadej správné jméno zákazníka pro smazání.");
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return <p className="text-center text-red-500 mt-10">Tričko nebylo nalezeno.</p>;
  }

  if (!isLoaded) {
    return <p className="text-center text-gray-500 mt-10">Načítání...</p>;
  }

  const colorImages = {
    bílá: whiteShirt,
    černá: blackShirt,
    modrá: blueShirt,
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center">
          <img
            src={colorImages[Tshirt.color]}
            alt={`Tričko ${Tshirt.color}`}
            className="w-64 h-64 object-contain mb-4"
          />
          <Link
            to={`/update-tshirt/${id}`}
            className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            Upravit objednávku
          </Link>
          <Link
            to="/view-tshirt"
            className="mt-2 text-yellow-600 hover:underline text-sm font-semibold"
          >
            Zpět
          </Link>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-yellow-500">
            Objednávka: {Tshirt.customer}
          </h1>
          <p><span className="font-semibold">Barva:</span> {Tshirt.color}</p>
          <p><span className="font-semibold">Velikost:</span> {Tshirt.size}</p>
          <p><span className="font-semibold">Text:</span> „{Tshirt.text}“</p>
          <p><span className="font-semibold">Nálepka:</span> {Tshirt.logo}</p>

          <form onSubmit={handleDelete} className="mt-6 space-y-2">
            <label className="block font-medium">
              Potvrď smazání jménem zákazníka:
            </label>
            <input
              type="text"
              placeholder="Zadej jméno zákazníka"
              value={formData}
              onChange={(e) => setFormData(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition"
            >
              Smazat objednávku
            </button>
            {info && <p className="text-red-500 text-sm">{info}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
