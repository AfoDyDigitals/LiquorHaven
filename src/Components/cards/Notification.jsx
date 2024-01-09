import { tick_icon } from "../../assets";

const Notification = ({ message, onClose }) => {
  return (
    <div
      className={`fixed top-8 left-5 gap-2 md:gap-0 md:left-auto right-0 text-white p-4 text-center rounded-md max-w-[80%] ${
        message ? "bg-[#E66B66]" : ""
      }`}
    >
      {message && (
        <div className="flex items-center justify-between mx-auto">
          {message}
          <button
            className="ml-2 mt-1 text-white font-bold font-rubik"
            onClick={() => onClose && onClose()}
          >
            <div></div>
            <img src={tick_icon} alt="Tick" width={30} className="ml-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Notification;
