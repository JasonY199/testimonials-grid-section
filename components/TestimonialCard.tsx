import { testimonialsData } from "@/data/testimonials-data";
import Image from "next/image";

export default function TestimonialCard({
  author,
  className,
}: {
  author: string;
  className?: string;
}) {
  return (
    <article
      className={`
        rounded-lg p-8
        flex flex-col gap-4
        ${testimonialsData[author].backgroundColor} 
        ${className ?? ""} 
    `}
    >
      <div className="flex flex-row gap-[17px]">
        <Image
          src={testimonialsData[author].image}
          alt=""
          width={28}
          height={28}
          className="self-center rounded-full"
        />
        <div className="flex flex-col gap-1">
          <h1 className={`text-preset-2 ${testimonialsData[author].nameColor}`}>
            {testimonialsData[author].name}
          </h1>
          <h3
            className={`text-preset-4 ${testimonialsData[author].verifiedColor}`}
          >
            Verified Graduate
          </h3>
        </div>
      </div>
      <h2 className={`text-preset-1 ${testimonialsData[author].headingColor}`}>
        {testimonialsData[author].heading}
      </h2>
      <p className={`text-preset-3 ${testimonialsData[author].quoteColor}`}>
        “ {testimonialsData[author].quote} “
      </p>
    </article>
  );
}
