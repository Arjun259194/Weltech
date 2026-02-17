import ReviewCard from "../ReviewCard";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { AccentUnderline, PrimeText } from "../ui/textEffects";

export default function ReviewSection() {
  return (
    <section className="w-11/12 mx-auto overflow-x-hidden space-y-5 py-10">
      <svg
        width="56"
        height="43"
        viewBox="0 0 56 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.63102e-06 42.1499V23.5499L15.075 -5.62668e-05H23.175L14.475 20.3249L22.125 21.0749V42.1499H6.63102e-06ZM32.475 42.1499V23.5499L47.55 -5.62668e-05H55.65L46.95 20.3249L54.6 21.0749V42.1499H32.475Z"
          fill="#F7C024"
        />
      </svg>
      <h2 className="text-6xl">
        Trusted by Those{" "}
        <PrimeText className="font-bold">Who Matter</PrimeText>{" "}
      </h2>
      <p className="md:w-2/3 text-lg">
        Our students come from different academic and professional backgrounds,
        but they all share one goal achieving their desired{" "}
        <AccentUnderline className="text-2xl" underline>
          IELTS band score
        </AccentUnderline>{" "}
        and improving their English communication skills.
      </p>

      <InfiniteMovingCards
        className="mt-10 mb-36"
        items={new Array(6).fill(0).map((_, i) => {
          return (
            <li
              className="relative w-md h-72 max-w-full shrink-0 rounded-2xl"
              key={i}
            >
              <ReviewCard
                rating={3.5}
                img="/review.jpg"
                content="I was stuck at 6 bands for months. After joining this institute, I improved my writing structure and speaking fluency. Within 4 weeks, I scored 7 bands. The strategies provided here actually work."
                name="Riya Desai"
                position="Software designer in australia"
              />
            </li>
          );
        })}
        direction="left"
        speed="slow"
      />
    </section>
  );
}
