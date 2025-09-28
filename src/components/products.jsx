"use client";

import { useRouter } from "next/navigation";
import { Code, Smartphone, LayoutDashboard, Search } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Web Development",
    description: "Modern websites using React, Next.js, and Tailwind CSS.",
    icon: Code,
    price: 199,
  },
  {
    id: 2,
    name: "Mobile App Development",
    description: "Cross-platform apps with React Native.",
    icon: Smartphone,
    price: 299,
  },
  {
    id: 3,
    name: "UI/UX Design",
    description: "Clean and user-friendly designs for your apps.",
    icon: LayoutDashboard,
    price: 149,
  },
  {
    id: 4,
    name: "SEO Optimization",
    description: "Boost your website ranking with SEO best practices.",
    icon: Search,
    price: 99,
  },
];

export default function ProductsPage() {
  const router = useRouter();

  const handleBuy = (service) => {
    const query = new URLSearchParams({
      id: service.id,
      name: service.name,
      price: service.price,
    }).toString();
    router.push(`/payment?${query}`);
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center overflow-hidden bg-gray-50 px-15">
      <h1 className="text-5xl font-bold mb-12 text-center text-black">
        Our Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center"
            >
              <div className="p-4 bg-[#ff0000]/10 rounded-full mb-4">
                <Icon className="w-8 h-8 text-[#ff0000]" />
              </div>
              <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
              <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
              <button
                onClick={() => handleBuy(service)}
                className="px-4 py-2 rounded-xl bg-[#ff0000] text-white font-medium hover:bg-red-700 transition"
              >
                Buy Now (${service.price})
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
