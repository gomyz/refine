import { Header } from "@components/header";
import SectionFooter from "@components/landing/SectionFooter";
import SectionTop from "@components/landing/SectionTop";
import SectionMiddle from "@components/landing/SectionMiddle";

export default async function LandingPage() {

  const is_mobil = false

  return (
      <>
      <Header/>
      <SectionTop/>
      <SectionMiddle/>
      <SectionFooter/>
    </>
  );
}
