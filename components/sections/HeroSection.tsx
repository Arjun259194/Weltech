import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { AccentUnderline, GradientText } from "../ui/textEffects";

interface Props {}

const HeroSection = (_: Props) => {
  return (
    <section className="md:w-11/12 w-full mx-auto p-3 md:p-0 h-screen">
      <div
        style={{ backgroundImage: "url('/Hero-BG.png')" }}
        className="flex flex-col text-center px-2 md:px-0 h-11/12 text-gray-100 pt-20 bg-no-repeat bg-top bg-cover rounded-2xl items-center space-y-5"
      >
        <h1 className="md:text-6xl text-4xl  italic font-semibold ">
          <GradientText>
            Stop Translating.
            <br />
            Start Speaking
          </GradientText>
        </h1>
        <p className="md:w-[45ch] md:text-xl">
          Master English conversation with{" "}
          <AccentUnderline className="text-2xl">expert traners</AccentUnderline>{" "}
          and{" "}
          <AccentUnderline className="text-2xl">proven methods</AccentUnderline>{" "}
          that deliver real results
        </p>
        <div className="flex space-x-5">
          {/* TODO: WHere does this buttom go? */}
          <Button>
            <span>Get Started</span> <ChevronRight size={16} />
          </Button>
          {/* TODO: WHere does this buttom go? */}
          <Button className="border border-background" variant="ghost">
            <span>Learn More </span> <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
