import { useEffect, useState } from "react";

const ChatBotToggle = () => {
  const [isOpenOrClose, setWindowsOpenOrClose] = useState(false);
  const modalHandler = () => {
    setWindowsOpenOrClose(!isOpenOrClose);
  };
  console.log(isOpenOrClose);
  return (
    <div>
      <button
        onClick={modalHandler}
        className="fixed w-16 h-16 right-4 bottom-4 bg-blue-500 text-white rounded-full"
      >
        {/* {isOpenOrClose ? "Ocultar iframe" : "Mostrar iframe"} */}
      </button>
      {/* {isOpenOrClose && ( */}
      {/*   <iframe */}
      {/*     style={{ border: "none" }} */}
      {/*     height="600px" */}
      {/*     width="400px" */}
      {/*     src="https://widget.kommunicate.io/chat?appId=31296fb465dea23cb75a1d77035f15199" */}
      {/*     allow="microphone; geolocation;" */}
      {/*   ></iframe> */}
      {/* )} */}
    </div>
  );
};

export default ChatBotToggle;
