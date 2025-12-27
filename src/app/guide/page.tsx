"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import IconCheck from "@/app/assets/icon/icon_check.svg";

export default function Home() {
  const [value, setValue] = useState("");

  return (
    <section className="p-10">
      {/* Button */}
      <article>
        <h2 className="text-2xl font-bold mb-4">Button</h2>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="primary" size="small">
            Small
          </Button>
          <Button>Default</Button>
          <Button size="large">Large</Button>
          <Button variant="disabled" size="large" disabled={true}>
            Large
          </Button>
          <Button variant="icon" size="iconSmall">
            <Image src={IconCheck} alt="Logo" />
          </Button>
          <Button variant="icon" size="iconDefault">
            <Image src={IconCheck} alt="Logo" />
          </Button>
          <Button variant="icon" size="iconLarge">
            <Image src={IconCheck} alt="Logo" />
          </Button>
        </div>
      </article>
      {/* Input */}
      <article className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Inputs</h2>
        <div className="flex flex-wrap items-center gap-2">
          <Input inputSize="small" placeholder="Small Input" />
          <Input inputSize="default" placeholder="Default Input" />
          <Input inputSize="large" placeholder="Large Input" />
          <Input
            placeholder="disabled Input"
            value={value}
            disabled={true}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </article>
    </section>
  );
}
