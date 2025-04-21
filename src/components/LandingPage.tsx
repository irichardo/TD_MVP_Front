// import ChatBotToggle from "./ChatBotToggle";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Detail from "./Detail";
function LandingPage() {
  return (
    <section className="min-h-screen flex flex-col items-center ">
      <Navbar />
      <div className="w-full h-1/2 items-center flex justify-center">
        <Slider />
      </div>
      <Detail />
      <div className="mt-4">
        <a
          href="mailto:info@jonathanvelez.com"
          className="text-blue-500 underline hover:text-blue-700"
        >
          Envíame un correo
        </a>
      </div>
    </section>
  );
}

export default LandingPage;
