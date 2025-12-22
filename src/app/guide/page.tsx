import Image from "next/image";
import { Button } from "@/components/button";

export default function Home() {
  return (
    <section className="p-10">
      {/* Button */}
      <article>
        <h2 className="text-2xl font-bold mb-4">Button</h2>
        <div className="flex flex-wrap items-center gap-2 md:flex-row">
          <Button variant="primary" size="small">
            Small
          </Button>
          <Button>Default</Button>
          <Button size="large">Large</Button>
          <Button variant="secondary" size="large">
            Large
          </Button>
        </div>
      </article>
      {/* Input */}
      <article className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Input</h2>
        <div className="flex flex-wrap items-center gap-2 md:flex-row">
          <Button variant="primary" size="small">
            Small
          </Button>
          <Button>Default</Button>
          <Button size="large">Large</Button>
          <Button variant="secondary" size="large">
            Large
          </Button>
        </div>
      </article>
    </section>
  );
}
