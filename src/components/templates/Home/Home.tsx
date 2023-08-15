import Header from "../../organisms/Header";
import FeatureSectionWithImage from "../../organisms/FeatureSectionWithImage";
import { Container } from "./Home.styles";
import DepartmentOverviewSection from "../../organisms/DepartmentOverviewSection";
import TestimonialSection from "../../organisms/TestimonialSection";
import FeatureSeactionArticles from "../../organisms/FeatureSeactionArticles";
import FreeGuideSection from "../../organisms/FreeGuideSection";
import FreeSessionOffer from "../../organisms/FreeSessionOffer";
import Newsletter from "../../organisms/Newsletter";
import Footer from "../../organisms/Footer";

export default function Home() {
  return (
    <Container>
      <Header />
      <FeatureSectionWithImage />
      <DepartmentOverviewSection />
      <TestimonialSection />
      <FeatureSeactionArticles />
      <FreeGuideSection />
      <FreeSessionOffer />
      <Newsletter />
      <Footer />
    </Container>
  );
}
