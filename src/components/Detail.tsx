import DetailDescription from "./DetailDescription";
import type { IBanner } from "./types";

function Detail() {
  const banner: IBanner[] = [
    {
      key: "primero",
      image: "/campo_fe_ui/Ico-grandes.svg",
      text: "los más grandes y hermosos Camposantos ecológicos del país.",
    },
    {
      key: "segundo",
      image: "/campo_fe_ui/Ico-familias.svg",
      text: "Más de 250,000 familias confian en Campo Fe",
    },
    {
      key: "tercero",
      image: "/campo_fe_ui/Ico-ISO.svg",
      text: "Primera y única empresa en el sector con Certificación ISO 9001-2015",
    },
  ];
  return (
    <div className="w-full flex-col flex items-center justify-center m-10">
      <p className="text-4xl p-4 text-[#1a74db]">¿Por qué elegirnos?</p>
      <DetailDescription banner={banner} />
    </div>
  );
}

export default Detail;
