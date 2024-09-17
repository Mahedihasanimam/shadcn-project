"use client";
import Accordion from "@/components/Accordion";
import Hero from "@/components/home/Hero";
import InteractiveChart from "@/components/InteractiveChart";
import MyBarChart from "@/components/MyBarChart";
import MyPieChart from "@/components/MyPieChart";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import React, { useState } from "react";

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <main>
      <div className="container mx-auto mb-12">
        <Hero />

        <div className=" border-2 border-blue-200  rounded-md p-4 my-4 mb-12">
            <InteractiveChart/>
          <div className="lg:flex items-center justify-between">

          <div className="w-3/4">
          <MyPieChart/>
          </div>
           <MyBarChart/>
          
          </div>
        </div>
      
      </div>
    </main>
  );
}
