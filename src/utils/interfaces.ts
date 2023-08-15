export interface IPropsMenuHeaderItem {
  menuItem?: string;
  menuItemContact?: boolean;
  urlMenuItem?: string;
  index?: number;
  openMenuMobile?: boolean;
}

export interface IPropsMenuHeader {
  open?: boolean;
}

export interface IPropsMenuFooter {
  value?: string;
  url?: string;
}

export interface IPropsDynamicImage {
  urlImage: string;
  altImage?: string;
}

export interface IPropsDynamicTitle {
  title?: string;
  color?: "primary" | "secondary";
  titleSizing?:
    | "fontSizeSmall"
    | "fontSizeSubSmall"
    | "fontSizeNormal"
    | "fontSizeSubMedium"
    | "fontSizeMedium"
    | "fontSizeLarge"
    | "fontSizeExtraLarge";
}

export interface IPropsDynamicSubtitle {
  subtitle?: string;
  subtitleSizing?: "fontSizeSubSmall" | "fontSizeSmall" | "fontSizeMedium";
}

export interface IPropsDynamicDescription {
  description?: string;
  descriptionSizing:
    | "fontSizeSmall"
    | "fontSizeMedium"
    | "fontSizeLarge"
    | "fontSizeExtraLarge";
}

export interface IPropsFetchData {
  setData: React.Dispatch<React.SetStateAction<IPropsData>>;
  setImage?: React.Dispatch<React.SetStateAction<IPropsImageCardWithOverlay>>;
  index: number;
}

export interface IPropsFetchDataHeader {
  setData?: React.Dispatch<React.SetStateAction<IPropsMenuHeaderItem[]>>;
  setImageLogo?: React.Dispatch<React.SetStateAction<string>>;
}

export interface IPropsDynamicButton {
  typeButton?: "primary" | "secondary";
  valueButton?: string;
}

export interface IPropsImageCardWithOverlay {
  informationImage?: {
    icon?: string;
    title?: string;
    subtitle?: string;
  };
  typeCardOverlay?: "primary" | "secondary";
  imageInformation?: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  color?: "primary" | "secondary";
  titleSizing?:
    | "fontSizeSmall"
    | "fontSizeSubSmall"
    | "fontSizeNormal"
    | "fontSizeSubMedium"
    | "fontSizeMedium"
    | "fontSizeLarge"
    | "fontSizeExtraLarge";
}

export interface IPropsCard {
  urlImage: string;
  title: string;
  description: string;

  urlImageAvaliation?: string;
}

export interface IPropsFeatureSectionWithImage {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonInformation?: IPropsDynamicButton;
  iconTop?: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  informationImage?: {
    icon?: string;
    title?: string;
    subtitle?: string;
  };

  imageInformation?: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  imagesCard?: {
    data: [
      {
        attributes: {
          url: "";
        };
      }
    ];
  };
}

export interface IPropsFreeGuide {
  title?: string;
  description?: string;
  informationImage?: {
    icon?: string;
    title: string;
    subtitle?: string;
  };

  imageInformation?: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  buttonInformation?: IPropsDynamicButton;
}

export interface IPropsFreeOffer {
  title?: string;
  subtitle?: string;
  buttonInformation?: IPropsDynamicButton;
  imagesCard?: {
    data: {
      attributes: {
        url: string;
      };
    }[];
  };
}

export interface IPropsData {
  title?: string;
  subtitle?: string;
  urlImage?: string;
  description?: string;
  buttonInformation?: IPropsDynamicButton;
  iconTop?: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}

export interface IPropsFeatureSectionWithImage {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonInformation?: IPropsDynamicButton;
  iconTop?: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}

export interface IPropsTestimonialSection {
  title?: string;
  card?: {
    title: string;
    description: string;
  }[];
  imagesCard?: {
    data: {
      attributes: {
        url: string;
      };
    }[];
  };
  imageAvaliation?: {
    data: [
      {
        attributes: {
          url: string;
        };
      }
    ];
  };
}

export interface IPropsDepartamentSection {
  title?: string;
  description?: string;
  iconTop?: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  card?: {
    title: string;
    description: string;
  }[];
  imagesCard?: {
    data: {
      attributes: {
        url: string;
      };
    }[];
  };
}

export interface IPropsFooter {
  title?: string;
  subtitle?: string;
  titleFooterSection?: string;
  titleFooterContact?: string;
  menuSections?: [
    {
      url: string;
      section: string;
    }
  ];
  menuContacts?: [
    {
      url: string;
      contact: string;
    }
  ];
  imagesCard?: {
    data: {
      attributes: {
        url: string;
      };
    }[];
  };
}

export interface IPropsNewsletterSection {
  title?: string;
  subtitle?: string;
  buttonInformation?: IPropsDynamicButton;
}

export interface IPropsArticlesSection {
  title?: string;
  card?: {
    title: string;
    description: string;
  }[];
  imagesCard?: {
    data: {
      attributes: {
        url: string;
      };
    }[];
  };
  buttonInformation?: IPropsDynamicButton;
}

// Tipo do contexto
export interface DataContextType {
  headerLogo: string;
  setHeaderLogo: React.Dispatch<React.SetStateAction<string>>;
  setHeaderData: React.Dispatch<React.SetStateAction<IPropsMenuHeaderItem[]>>;
  headerData: IPropsMenuHeaderItem[];
  featureSectionData: IPropsFeatureSectionWithImage;
  setFeatureSectionData: React.Dispatch<
    React.SetStateAction<IPropsFeatureSectionWithImage>
  >;
  imageCardWithOverlay: IPropsImageCardWithOverlay;
  setImageCardWithOverlay: React.Dispatch<
    React.SetStateAction<IPropsImageCardWithOverlay>
  >;
  setTestimonials: React.Dispatch<
    React.SetStateAction<IPropsTestimonialSection>
  >;
  departmentData: IPropsDepartamentSection;
  setDepartmentData: React.Dispatch<
    React.SetStateAction<IPropsDepartamentSection>
  >;
  testimonials: IPropsTestimonialSection;
  setArticles: React.Dispatch<React.SetStateAction<IPropsArticlesSection>>;
  articles: IPropsArticlesSection;
  setFreeGuideData: React.Dispatch<React.SetStateAction<IPropsFreeGuide>>;
  freeGuideData: IPropsFreeGuide;
  setFreeOfferData: React.Dispatch<React.SetStateAction<IPropsFreeOffer>>;
  freeOfferData: IPropsFreeOffer;
  setNewsletterData: React.Dispatch<
    React.SetStateAction<IPropsNewsletterSection>
  >;
  newsletterData: IPropsNewsletterSection;
  setFooterData: React.Dispatch<React.SetStateAction<IPropsFooter>>;
  footerData: IPropsFooter;
  setOpenMenuMobile: React.Dispatch<React.SetStateAction<boolean>>;
  openMenuMobile: boolean;
}
