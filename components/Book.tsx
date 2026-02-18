import Image from "next/image"
import { Button } from "./ui/button"
import { ReactNode } from "react";
import { ArrowLeftRight } from "lucide-react";

interface Props {
  img: string,
  title: string | ReactNode,
  subtitle: string | ReactNode,
  content: string,
  link: string
}

function Book(props: Props) {
  return <div className="w-full md:grid md:grid-cols-2 md:gap-10 py-10">
    <div className="flex items-center mb-10 md:mb-0 justify-start relative">
      <div className="w-full z-0 absolute h-5/6 bg-linear-to-tr from-primary to-secondary rounded-r-3xl" />
      <Image className="z-10 w-2/3 mx-auto md:ml-20 -rotate-12" src={props.img} alt="book cover" width={300} height={500} />
    </div>
    <div className="md:text-end text-center space-y-10">
      <h4 className="text-6xl">{props.title}</h4>
      <span className="text-xl">{props.subtitle}</span>
      <hr className="my-6" />
      <p>{props.content}</p>
      <Button size="lg" asChild>
        <a href={props.link}>View more</a>
      </Button>
      <p className="text-muted text-3xl flex justify-center items-center md:hidden">Swap <ArrowLeftRight size={32} /> </p>
    </div>
  </div>
}

export default Book;
