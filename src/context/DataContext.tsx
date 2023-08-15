// context/DataContext.tsx

import React, { createContext, useContext, useState } from "react";
import { DataContextType } from "../utils/interfaces";
import {
  defaultFeatureSectionData,
  initialEmptyArticles,
  initialEmptyDepartment,
  initialEmptyFooter,
  initialEmptyFreeGuide,
  initialEmptyFreeOffer,
  initialEmptyHeader,
  initialEmptyImageCardWithOverlay,
  initialEmptyTestimonials,
} from "../constants/initialDatas";
// Contexto
const DataContext = createContext<DataContextType | undefined>(undefined);

// Provedor de contexto
export const DataProvider: React.FC = ({ children }) => {
  const [featureSectionData, setFeatureSectionData] = useState(
    defaultFeatureSectionData
  );
  const [testimonials, setTestimonials] = useState(initialEmptyTestimonials);
  const [articles, setArticles] = useState(initialEmptyArticles);
  const [departmentData, setDepartmentData] = useState(initialEmptyDepartment);
  const [footerData, setFooterData] = useState(initialEmptyFooter);
  const [headerData, setHeaderData] = useState(initialEmptyHeader);
  const [headerLogo, setHeaderLogo] = useState<string>("");
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const [newsletterData, setNewsletterData] = useState(initialEmptyDepartment);
  const [freeGuideData, setFreeGuideData] = useState(initialEmptyFreeGuide);
  const [freeOfferData, setFreeOfferData] = useState(initialEmptyFreeOffer);
  const [imageCardWithOverlay, setImageCardWithOverlay] = useState(
    initialEmptyImageCardWithOverlay
  );

  return (
    <DataContext.Provider
      value={{
        featureSectionData,
        setFeatureSectionData,
        imageCardWithOverlay,
        setImageCardWithOverlay,
        setTestimonials,
        testimonials,
        departmentData,
        setDepartmentData,
        setArticles,
        articles,
        setFreeGuideData,
        freeGuideData,
        freeOfferData,
        setFreeOfferData,
        newsletterData,
        setNewsletterData,
        footerData,
        setFooterData,
        headerData,
        setHeaderData,
        headerLogo,
        setHeaderLogo,
        openMenuMobile,
        setOpenMenuMobile,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Hook customizado para acessar o contexto
export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext deve ser usado dentro de um DataProvider");
  }
  return context;
};
