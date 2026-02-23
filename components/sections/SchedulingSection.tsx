import { Clock9 } from "lucide-react";
import { AccentUnderline } from "../ui/textEffects";
import { ReactNode } from "react";
import CountUp from "../CountUp";

export default function SchedulingSection() {
  return (
    <section className="w-full bg-primary text-background py-20">
      <div className="md:w-11/12 mx-auto text-center space-y-5">
        <h2 className="text-6xl font-bold">
          Our Batch <span className="text-accent">Structure</span>
        </h2>
        <p className="md:w-2/3 md:mx-auto mx-3 mb-10 md:mb-5">
          Our students come from different academic and professional
          backgrounds, but they all share one goal achieving their desired{" "}
          <AccentUnderline className="text-2xl">
            IELTS band score
          </AccentUnderline>{" "}
          and improving their English communication skills.
        </p>
        <div className="md:flex md:justify-around space-y-10 md:space-y-0 w-full md:p-5">
          <SchedulingCard
            title="Morning batch"
            time={
              <>
                <CountUp duration={1} from={0} to={8} />
                :00 AM to <CountUp duration={1} from={0} to={11} />
                :00 AM
              </>
            }
          />
          {/* <SchedulingCard prime title="Afternoon batch" time="12:00 PM to 5:00 PM" /> */}
          <SchedulingCard
            prime
            title="Afternoon batch"
            time={
              <>
                <CountUp duration={1} from={0} to={12} />
                :00 PM to <CountUp from={0} to={5} />
                :00 PM
              </>
            }
          />
          <SchedulingCard
            title="Evening batch"
            time={
              <>
                <CountUp duration={1} from={0} to={6} />
                :00 AM to <CountUp duration={1} from={0} to={8} />
                :00 PM
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}

interface Props {
  title: string;
  prime?: boolean;
  time: string | ReactNode;
}

const SchedulingCard = (props: Props) => {
  return (
    <div className="relative mx-auto w-80 max-h-80 min-h-64 group">
      {/* Yellow layer behind — offset bottom-right */}

      {props.prime ? (
        <div
          className="absolute
        transition-all duration-200 ease-in-out
        right-0 bg-accent text-foreground px-2 py-1 rounded-full z-20 text-xs -translate-y-2/3"
        >
          Most Prefered
        </div>
      ) : null}
      <div
        className="absolute 
        right-0 top-0 bottom-1/2 left-1/2
        bg-accent rounded-tr-2xl 
        translate-x-1 -translate-y-1
        group-hover:translate-x-3 group-hover:-translate-y-3
        transition-all duration-200 ease-in-out
        z-0"
      />
      <div
        className="absolute 
        right-1/2 bottom-0 top-1/2 left-0
        bg-accent rounded-bl-2xl 
        -translate-x-1 translate-y-1
        group-hover:-translate-x-3 group-hover:translate-y-3
        transition-all duration-200 ease-in-out
        z-0"
      />

      {/* Blue card on top */}
      <div
        className={`absolute shadow-none group-hover:shadow-md inset-0 z-10 border border-gray-200 ${props.prime ? "bg-primary" : "bg-background"} rounded-2xl p-6 flex flex-col justify-between`}
      >
        {/* Top section */}
        <div className="flex justify-between items-start">
          <h1
            className={`${props.prime ? "text-background" : "text-foreground"} text-4xl font-bold text-start leading-tight`}
          >
            {props.title}
          </h1>
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-full">
              <Clock9 />
            </div>
          </div>
        </div>

        {/* Divider + Time */}
        <hr />
        <p
          className={`${props.prime ? "text-background" : "text-foreground"} text-2xl font-bold tracking-wide`}
        >
          {props.time}
        </p>
      </div>
    </div>
  );
};
