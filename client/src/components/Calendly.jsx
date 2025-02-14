const Calendly = ({ cardImage, calendlyLink }) => {
    return (
        <section className="w-full flex justify-center">
            <div
                className="w-[95%] rounded-2xl p-6 py-8 flex flex-col lg:flex-row md:flex-row justify-around items-center bg-cover bg-center text-white mb-10"
                style={{ backgroundImage: `url(${cardImage})`, backgroundSize: "cover", backgroundPosition: "center"}}
            >
                <div className="flex flex-col justify-center lg:justify-normal md:justify-normal">
                    <h3 className="text-xl lg:text-3xl font-bold">Want to connect with us?</h3>
                    <p className="text-md lg:text-lg mt-2">Let's do this</p>
                </div>
                <button
                onClick={() => window.open(calendlyLink, "_blank", "noopener,noreferrer")}
                className="mt-4 px-6 py-3 bg-transparent border-2 border-white hover:border-0 shadow-2xl ring text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300
                text-sm sm:text-base md:text-lg lg:text-xl"
                >
                Book a call on Calendly
                </button>
            </div>
        </section>
    );
  };
  
  export default Calendly;
  