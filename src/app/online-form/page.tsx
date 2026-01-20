import Menu from "@/components/menu/menu"
import { Metadata } from "next";
import Contacts from "@/components/contacts/contacts";
import Footer from "@/components/footer/footer";
import { Head } from "next/document";
import OnlineForm from "@/components/onlineForm/onlineform";

export const metadata: Metadata = {
  title: "Онлайн подбор",
  description: "Доставка авто из Кореи, Японии и Китая от 10 дней по всей россии",
};

export default function Home() {
  return (
    
    <>
      <Menu />
      <OnlineForm/>
      <div style={{marginTop: 128}}></div>
      <Contacts />
      <Footer />
      
    </>
  );
}
