import Button from "./Button";

function MenoCard({ buttonText, imageUrl }) {
  return (
    <div className="bg-Primary w-[20%] h-40 rounded-lg flex flex-col items-center justify-center relative">
      <img src={imageUrl} alt="" className="w-60 absolute bottom-1/3" />
      <div className=" absolute bottom-[-10%]" >
        <Button
          text={buttonText}
          width={155}
          height={48}
          textColor={"#353535"}
          textSize={20}
          color={"#F9F9F9"}
          rounded={4}
        />
      </div>
    </div>
  );
}

export default MenoCard;
