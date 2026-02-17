import Image from "next/image"
import { Button } from "./ui/button"
import { ReactNode } from "react";

interface Props {
  img: string,
  title: string | ReactNode,
  subtitle: string | ReactNode,
  content: string,
  link: string
}

function Book(props: Props) {
  return <div className="w-full grid grid-cols-2 gap-10 py-10">
    <div className="flex items-center justify-start relative">
      <div className="w-full z-0 absolute h-5/6 bg-linear-to-tr from-primary to-secondary rounded-r-3xl" />
      <Image className="z-10 ml-20 -rotate-12" src={props.img} alt="book cover" width={300} height={500} />
    </div>
    <div className="text-end space-y-10">
      <h4 className="text-6xl">{props.title}</h4>
      <span className="text-xl">{props.subtitle}</span>
      <hr className="my-6" />
      <p>{props.content}</p>
      <Button size="lg" asChild>
        <a href={props.link}>View more</a>
      </Button>
    </div>
  </div>
}

export default Book;
