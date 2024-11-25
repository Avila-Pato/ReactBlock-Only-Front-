import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const Search = () => {
  const location = useLocation(); // Proporciona datos sobre la ubicación actual, como pathname y search
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams(); // Representa los parámetros de consulta actuales en la URL pedida.

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const query = e.target.value; //  Obtiene el valor actual
      if (location.pathname === "/posts") {
        setSearchParams({ ...Object.fromEntries(searchParams), search: query }); // Convierte los parámetros existentes en un objeto 
      } else {
        navigate(`/posts?search=${query}`); //Navega hacia la url
      }
    }
  };

  return (
    <div className="bg-gray-100 p-2 pr-4 rounded-full flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="40"
        height="40"
        fill="none"
        stroke="gray"

      >
        <circle cx="10.5" cy="10.5" r="7.5" />
        <line x1="16.5" y1="16.5" x2="22" y2="22" />
      </svg>

      <input
        type="text"
        placeholder="Busca un post..."
        className="bg-transparent w-full py-2 pl-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default Search;
