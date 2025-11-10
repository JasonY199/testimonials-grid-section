import TestimonialCard from "@/components/TestimonialCard";

export default function Home() {
  return (
    <main
      className="
        px-[35px] py-[73]
        grid grid-cols-1 gap-8
        md:max-lg:grid-cols-2
      "
    >
      <TestimonialCard
        author="daniel"
        className="
          md:max-lg:row-start-1 md:max-lg:col-start-1 md:max-lg:col-span-2
        "
      />
      <TestimonialCard
        author="jonathan"
        className="
          md:max-lg:row-start-2 md:max-lg:col-start-1 md:max-lg:col-span-1
        "
      />
      <TestimonialCard
        author="jeanette"
        className="
          md:max-lg:row-start-2 md:max-lg:col-start-2 md:max-lg:col-span-1
        "
      />
      <TestimonialCard
        author="patrick"
        className="
          md:max-lg:row-start-3 md:max-lg:col-start-1 md:max-lg:col-span-2
        "
      />
      <TestimonialCard
        author="kira"
        className="
          md:max-lg:row-start-4 md:max-lg:col-start-1 md:max-lg:col-span-2
        "
      />
    </main>
  );
}
