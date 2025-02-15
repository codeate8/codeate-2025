/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";

const tabs = [
  {
    id: "tab1",
    label: "Meetup",
    content: {
      images: [
        "https://placehold.co/600x400", "https://placehold.co/600x400","https://placehold.co/600x400","https://placehold.co/600x400","https://placehold.co/600x400","https://placehold.co/600x400","https://placehold.co/600x400"
      ],
      text: "This is a meetup event where developers gather to share knowledge."
    }
  },
  {
    id: "tab2",
    label: "Events",
    content: {
      images: [
        "https://placehold.co/600x400", "https://placehold.co/600x400","https://placehold.co/600x400","https://placehold.co/600x400","https://placehold.co/600x400","https://placehold.co/600x400","https://placehold.co/600x400"
      ],
      text: "These are some of the best events we have conducted so far."
    }
  },
  {
    id: "tab3",
    label: "Team",
    content: {
      images: [
        "https://placehold.co/600x400", "https://placehold.co/600x400","https://placehold.co/600x400","https://placehold.co/600x400","https://placehold.co/600x400","https://placehold.co/600x400","https://placehold.co/600x400"
      ],
      text: "Meet the Codeate Team behind the amazing projects."
    }
  },
  {
    id: "tab4",
    label: "Developers",
    content: {
      images: [
        "https://placehold.co/600x400", "https://placehold.co/600x400","https://placehold.co/600x400","https://placehold.co/600x400","https://placehold.co/600x400","https://placehold.co/600x400","https://placehold.co/600x400"
      ],
      text: "Our talented developers who contribute to open source and projects."
    }
  }
];

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="w-full max-w-xl">
        <div className="flex justify-evenly space-x-2 px-2 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-2 py-1 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white ring-1 ring-blue-600"
                  : "bg-transparent border-blue-700 border-2 text-blue-600"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="p-4 mt-4 bg-blue-100 rounded-lg"
        >
          <TabsContent content={tabs.find((tab) => tab.id === activeTab)?.content} />
        </motion.div>
      </div>
    </section>
  );
}

const TabsContent = ({ content }) => {
  if (!content) return null;

  return (
    <div className="flex flex-col items-center">
      <p className="mb-4 text-lg font-semibold text-blue-700">{content.text}</p>
      <div className="grid grid-cols-3 gap-2 w-full">
        {/* First Column */}
        <div className="flex flex-col gap-2">
          <img src={content.images[0]} className="w-full h-[30%] object-cover rounded-md shadow-md" />
          <img src={content.images[1]} className="w-full h-[70%] object-cover rounded-md shadow-md" />
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-2">
          <img src={content.images[2]} className="w-full h-full object-cover rounded-md shadow-md" />
          <div className="flex gap-1 h-[40%]">
            <img src={content.images[3]} className="w-1/2 h-full object-cover rounded-md shadow-md" />
            <img src={content.images[4]} className="w-1/2 h-full object-cover rounded-md shadow-md" />
          </div>
        </div>

        {/* Third Column */}
        <div className="flex flex-col gap-2">
          <img src={content.images[5]} className="w-full h-[70%] object-cover rounded-md shadow-md" />
          <img src={content.images[6]} className="w-full h-[30%] object-cover rounded-md shadow-md" />
        </div>
      </div>
    </div>
  );
};