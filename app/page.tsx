import TestimonialCard from "@/components/TestimonialCard";

export default function Home() {
  return (
    <main
      className="
        px-[35px] py-[73]
        grid grid-cols-1 gap-8
        md:grid-cols-2
        xl:grid-cols-4
      "
    >
      <TestimonialCard
        author="daniel"
        className="
          md:row-start-1 md:col-start-1 md:col-span-2
        "
      />
      <TestimonialCard
        author="jonathan"
        className="
          md:row-start-2 md:col-start-1 md:col-span-1
          xl:row-start-1 xl:col-start-3
        "
      />
      <TestimonialCard
        author="jeanette"
        className="
          md:row-start-2 md:col-start-2 md:col-span-1
          xl:col-start-1
        "
      />
      <TestimonialCard
        author="patrick"
        className="
          md:row-start-3 md:col-start-1 md:col-span-2
          xl:row-start-2 xl:col-start-2
        "
      />
      <TestimonialCard
        author="kira"
        className="
          md:row-start-4 md:col-start-1 md:col-span-2
          xl:row-start-1 xl:col-start-4 xl:col-span-1 xl:row-span-2
        "
      />
    </main>
  );
}
