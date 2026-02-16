import Image from "next/image"
import { AccentUnderline } from "./ui/textEffects"
import { Button } from "./ui/button"
import { Star, StarHalf } from "lucide-react";

interface Props {
  img: string,
  rating: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
  content: string
  name: string
  position: string
}

export default function ReviewCard(props: Props) {
  const wholeStarts = Math.floor(props.rating)
  const halfStar = props.rating % 1 != 0
  return (
    <article className="group w-full relative h-full">
      <div className="absolute inset-0 flex flex-col justify-end border-2 border-border transition-transform duration-500 ease-in-out rounded-2xl p-2 group-hover:translate-y-32">
        <p className="mb-8">{props.content}</p>
        <Button variant="outline">More</Button>
      </div>
      <div className="absolute inset-0 rounded-2xl shadow-gray-900 shadow-sm group-hover:-translate-y-14 transition-transform duration-500 ease-in-out">
        <Image className="w-full h-full object-cover rounded-2xl " src={props.img} alt="ReviewCard image" width={400} height={300} />
        <div className="absolute grid grid-cols-3 text-white pointer-events-none rounded-2xl bg-linear-to-t from-gray-900/60 to-transparent inset-0  px-4 py-2">
          <div className="flex flex-col justify-end col-span-2 ">
            <span className="text-4xl font-semibold">{props.name}</span>
            <AccentUnderline className="text-xl">{props.position}</AccentUnderline>
            <p className="text-sm md:hidden">{props.content}</p>
          </div>
          <div className="flex flex-col justify-end space-y-3 items-end text-accent  p-1">
            {Array(wholeStarts).fill(true).map((_, idx) => {
              return <Star strokeWidth={3} key={idx} size={38} />
            })}
            {halfStar ? <StarHalf strokeWidth={3} size={38} /> : null}
          </div>
        </div>
      </div>
    </article>
  )
}

