import { AccentUnderline, PrimeText } from "../ui/textEffects";

export default function SchedulingSection() {
  return (
    <section className="w-11/12 mx-auto text-center space-y-5 mb-20">
      <h2 className="text-6xl font-bold">Our Batch <PrimeText>Structure</PrimeText></h2>
      <p className="w-2/3 mx-auto">Our students come from different academic and professional backgrounds, but they all share one goal achieving their desired <AccentUnderline className="text-2xl">IELTS band score</AccentUnderline> and improving their English communication skills.</p>
      <div className="flex justify-around w-full p-5">
        <SchedulingCard title="Morning batch" time="8:00 AM - 11:00 AM" />
        <SchedulingCard prime title="Afternoon batch" time="12:00 PM - 5:00 PM" />
        <SchedulingCard title="Evening batch" time="6:00 AM - 8:00 PM" />
      </div>
    </section>
  )
}

interface Props {
  title: string,
  prime?: boolean
  time: string
}

const SchedulingCard = (props: Props) => {
  return (
    <div className="relative w-80 max-h-80 min-h-64 ">
      {/* Yellow layer behind — offset bottom-right */}
      <div className="absolute 
        right-0 top-0 bottom-1/2 left-1/2
        bg-accent rounded-tr-2xl translate-x-2 -translate-y-2" />
      <div className="absolute 
        right-1/2 bottom-0 top-1/2 left-0
        bg-accent rounded-bl-2xl -translate-x-2 translate-y-2" />

      {/* Blue card on top */}
      <div className={`absolute inset-0 border border-gray-200 ${props.prime ? "bg-primary" : "bg-background"} rounded-2xl p-6 flex flex-col justify-between`}>
        {/* Top section */}
        <div className="flex justify-between items-start">
          <h1 className={`${props.prime ? "text-white" : null} text-4xl font-bold leading-tight`}>
            {props.title}
          </h1>
          <div className="flex flex-col items-end gap-2">
            <div className="w-12 h-12 bg-accent rounded-full" />
            <p className={`${props.prime ? "text-white" : null} text-sm italic`}>Working Students</p>
          </div>
        </div>

        {/* Divider + Time */}
        <hr className="py-3" />
        <p className={`${props.prime ? "text-white" : null} text-2xl font-bold tracking-wide`}>
          {props.time}
        </p>
      </div>
    </div >
  );
}

