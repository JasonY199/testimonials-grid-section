import TestimonialCard from "@/components/TestimonialCard";

export default function Home() {
  return (
    <main
      className="
        px-[35px] py-[73]
        grid grid-cols-1 gap-8
      "
    >
      <TestimonialCard author="daniel" />
      <TestimonialCard author="jonathan" />
      <TestimonialCard author="jeanette" />
      <TestimonialCard author="patrick" />
      <TestimonialCard author="kira" />
    </main>
  );
}
