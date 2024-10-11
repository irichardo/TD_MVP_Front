function Navbar() {
  return (
    <div className="h-[10vh] w-full bg-gray-100 flex">
      <div className="w-1/6 flex items-center justify-center">
        <img src="/campo_fe_ui/logo_campofe.svg" className="w-24 h-24" />
      </div>
      <ul className="flex justify-around items-center  w-2/6 font-semibold">
        <li>
          <button>Inicio</button>
        </li>
        <li>
          <button>Servicios</button>
        </li>
        <li>
          <button>Camposantos</button>
        </li>
        <li>
          <button>Adquiere CJE</button>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
