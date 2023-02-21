import Image from "next/legacy/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] overflow-hidden ">
      <Image
        src="https://cdn.pixabay.com/photo/2018/05/04/21/27/airbnb-3375057_1280.png"
        layout="fill"
        objectFit="cover" //maximizes the image keeps non blurry
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className=" text-sm sm:text-large font-bold bg-white  ">
          Not to sure where to go? Perfect.
        </p>
        <button className="text-teal-400 bg-white px-10 py-4 shadow-md rounded-full font-extrabold my-3  hover:shadow-2xl active:scale-90 transition duration-150">
          Im flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
