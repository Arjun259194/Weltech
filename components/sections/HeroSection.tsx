import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "../ui/button"

interface Props { }

const HeroSection = (props: Props) => {
  return (
    <section className="w-11/12 mx-auto h-screen">
      <div style={{
        backgroundImage: "url('/Hero-BG.png')"
      }} className="flex flex-col text-center h-11/12 text-gray-100 pt-20 bg-no-repeat bg-top bg-cover rounded-2xl items-center space-y-5">
        <h1 className="text-6xl italic font-semibold ">Stop Translating.<br />Start Speaking</h1>
        <p className="w-[45ch] text-xl">Master English conversation with expert traners and proven methods that deliver real results</p>
        <div className="flex space-x-5">
          <Button>
            <span>Get Started</span> <ChevronRight size={16} />
          </Button>
          <Button variant="ghost">
            <span>Learn More </span> <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
