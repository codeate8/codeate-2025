import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";

const tabs = [
  { id: "tab1", label: "Meetup", content: "This is content for Tab 1." },
  { id: "tab2", label: "Events", content: "This is content for Tab 2." },
  { id: "tab3", label: "Codeate Team", content: "This is content for Tab 3." },
  { id: "tab4", label: "Developers", content: "This is content for Tab 4." },
];

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="w-full max-w-lg">
        <div className="flex justify-around space-x-2 p-2 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id ? "bg-blue-600 text-white ring-1 ring-blue-600" : "bg-transparent border-blue-700 border-2 text-blue-600"
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
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </motion.div>
      </div>
    </section>
  );
}
