import type { IBanner } from "./types";

function DetailDescriptionCard({ banner }: { banner: IBanner[] }) {
  return (
    <section className="h-[40vh] grid grid-cols-3 w-4/5">
      {banner.map(({ image, text, key }) => {
        return (
          <div
            className=" grid grid-rows-2 gap-x-5 gap-y-5 items-center justify-items-center"
            key={key}
          >
            <img src={image} />
            <div className="w-3/5 h-full">
              <p className=" text-xl text-center">{text}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default DetailDescriptionCard;
