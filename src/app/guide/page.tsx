import Image from "next/image";
import { Button } from "@/components/button";

export default function Home() {
  return (
    <div className="p-10">
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button size="small">Small</Button>
        <Button>Default</Button>
        <Button size="large">Large</Button>
      </div>
    </div>
  );
}
