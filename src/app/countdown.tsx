import { useEffect, useState } from "react";

const Jumbotron: React.FC = () => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const countDownDate: number = new Date("Jan 11, 2025 08:00:00").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now: number = new Date().getTime();
      const distance: number = countDownDate - now;

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return (
    <section
      id="jumbotron-landingpage"
      className=""
    >
      <div
        className="absolute inset-0 h-full bg-center bg-no-repeat bg-cover"
      />
      <div className="relative z-0 flex flex-col mt-10 justify-center mx-auto lg:w-4/5">
        <h2 className="mt-6 lg:mt-8 text-3xl lg:text-5xl tracking-wider text-center font-black countdown-header text-[#385B03] dark:text-[#F6F6F6]">
          MENUJU MAIN EVENT
        </h2>
        <div className="flex justify-center items-center mt-4 gap-4 gap-6 md:gap-8 text-[#375B03] dark:text-[#F6F6F6]">
          {[
            { label: "Hari", value: days },
            { label: "Jam", value: hours },
            { label: "Menit", value: minutes },
            { label: "Detik", value: seconds },
          ].map(({ label, value }, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-[70px] h-[70px] sm:w-[120px] sm:h-[120px] py-3 bg-white rounded-xl countdown-box"
            >
              <h3 className="font-poppins font-semibold tracking-wide text-[2rem] sm:text-[3rem] lg:text-[5rem] leading-[2rem] sm:!leading-[5rem]">
                {value}
              </h3>
              <p className="m-auto text-base sm:text-lg">{label}</p>
            </div>
          ))}
        </div>
        <h5 className="text-xl lg:text-2xl text-center font-bold text-[#385B03] dark:text-[#F6F6F6] mt-4">
          JAMBI, 11 JANUARI 2025
        </h5>
      </div>

    </section>
  );
};

export default Jumbotron;
