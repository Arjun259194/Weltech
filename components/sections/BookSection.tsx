import Book from "../Book";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { AccentUnderline, PrimeText } from "../ui/textEffects";

export default function BookSection() {
  return (
    <section className="w-11/12 mx-auto space-y-3">
      <Carousel>
        <CarouselContent>
          {Array(4).fill(0).map((_, i) => {
            return <CarouselItem key={i}>
              <Book
                key={i}
                img="/book-cover.jpg"
                link="https://www.google.com/search?hl=en&q=books"
                title={<> IELTS Mastery <PrimeText> Blueprint</PrimeText> </>}
                subtitle={<>Step-by-Step Strategies to <AccentUnderline className="text-2xl" underline>Achieve 7+ Bands</AccentUnderline> </>}
                content="This comprehensive guide covers all four IELTS modules with proven techniques and practical examples. From mastering Writing Task 2 structure to improving speaking fluency, this book provides clear strategies used by high-scoring students. Includes practice questions, band descriptors, and expert tips to boost your confidence before exam day."

              />
            </CarouselItem>
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}



