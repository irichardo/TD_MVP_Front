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
    </section>
  );
}

export default LandingPage;
