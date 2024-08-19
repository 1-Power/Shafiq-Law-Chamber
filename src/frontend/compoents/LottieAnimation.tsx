import Player from "lottie-react";
import animationData from "../../assets/animation/landing.json";

const LottieAnimationComponent = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-dracula-bg text-dracula-foreground">
      <div className="w-1/2">
        <Player
          autoplay
          loop
          animationData={animationData}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default LottieAnimationComponent;
