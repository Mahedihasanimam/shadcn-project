"use client";
import Accordion from "@/components/Accordion";
import Hero from "@/components/home/Hero";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import React, { useState } from "react";

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <main>
      <div className="container mx-auto mb-12">
        <Hero />

        <div className="flex items-center justify-between border-2 border-gray-200 rounded-md p-4 my-4 mb-12">
          <Calendar

            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow-lg shadow-blue-500 transition-shadow duration-300"
          />
          <Accordion />
        </div>
      </div>
    </main>
  );
}
