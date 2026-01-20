import { Metadata } from 'next';
import { Suspense } from 'react';
import Menu from "../components/menu/menu";
import Header from "../components/header/header";
import Auc from "../components/auc/auc";
import Slider from "../components/slider/slider";
import OnlineForm from "../components/onlineForm/onlineform";
import Advantages from "../components/advantages/advantages";
import Stages from "../components/stages/stages";
import DopService from "../components/dopService/dopService";
import Contacts from "../components/contacts/contacts";
import Footer from "../components/footer/footer";
import Popup from "../components/popup/popup";
import FeedBacks from "../components/feedbacks/feedbacks";
import VideoFeedBacks from "../components/video_feedbacks/video_feedbacks";
import VideoEnd from "../components/video_end/video_end";
import Loading from './loading';
import { SchemaOrgOrganization } from '@/components/seo/SchemaOrg';

export const metadata: Metadata = {
  title: "Автониндзя - авто из Японии, Кореи и Китая",
  description: "Доставка авто из Кореи, Японии и Китая от 10 дней по всей россии",
  keywords: "авто из Японии, авто из Кореи, авто из Китая, доставка авто, купить авто",
  openGraph: {
    type: "website",
    url: "https://автонинзя.рф",
    title: "AUTONINJA - авто из Японии, Кореи и Китая",
    description: "Доставка авто из Кореи, Японии и Китая от 10 дней по всей россии",
    siteName: "Авто из Японии, Кореи и Китая с доставкой в РФ от 10 дней",
    images: [{
      url: "/images/og-image.webp",
      width: 1200,
      height: 630,
    }],
  }
};

export default function Home() {
  return (
    <>
      <SchemaOrgOrganization />
      <Menu />
      <Suspense fallback={<Loading />}>
        <Header />
        <Auc />
        <Slider />
        <OnlineForm/>
        <Advantages />
        <Stages />
        <DopService />
        <FeedBacks />
        <VideoFeedBacks />
        <VideoEnd />
        <Contacts />
        <Footer />
        <Popup />
      </Suspense>
    </>
  );
}
