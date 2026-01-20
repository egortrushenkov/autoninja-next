import Link from 'next/link';
import Menu from "@/components/menu/menu";
import { Metadata } from "next";
import Catalog from "@/components/catalog/catalog";
import Contacts from "@/components/contacts/contacts";
import Footer from "@/components/footer/footer";
import FormNotFound from "@/components/form_notcar/form_notcar";

export const metadata: Metadata = {
  title: "Каталог авто из Японии, Кореи и Китая | AUTONINJA",
  description: "Полный каталог автомобилей с доставкой из Кореи, Японии и Китая. Доставка от 10 дней по всей России.",
  keywords: "каталог авто, авто из Японии, авто из Кореи, авто из Китая, купить авто с доставкой",
  openGraph: {
    type: "website",
    url: "https://автонинзя.рф/catalog",
    title: "Каталог | AUTONINJA",
    description: "Полный каталог автомобилей с доставкой",
    siteName: "AUTONINJA",
    images: [{
      url: "/images/og-catalog.webp",
      width: 1200,
      height: 630,
    }],
  },
};




export default async function Page() {
  const fetchData = async() => {
    const response = await fetch('https://script.google.com/macros/s/AKfycbyIxKvBUAIufdDs9VZegCyjllZXYDXR-0mXdmNzYObPeZyDqpf59sOiXiGgz2WFJLJf/exec', {
      cache: 'force-cache',
      next: {
        revalidate: 3600 // 1 hour
      }
    })
    const data = await response.json()
    const cars = data['users']
    return cars
  }
  const cars = await fetchData();
  
  return (
    <>

      <Menu />
      <Catalog cars = {cars} />
      <FormNotFound />
      <Contacts />
      <Footer />
    </>
  );

};

