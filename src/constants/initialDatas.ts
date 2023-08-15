import {
  IPropsArticlesSection,
  IPropsDepartamentSection,
  IPropsFeatureSectionWithImage,
  IPropsFooter,
  IPropsFreeGuide,
  IPropsFreeOffer,
  IPropsImageCardWithOverlay,
  IPropsMenuHeaderItem,
  IPropsNewsletterSection,
  IPropsTestimonialSection,
} from "../utils/interfaces";

export const defaultFeatureSectionData: IPropsFeatureSectionWithImage = {
  title: "",
  subtitle: "",
  description: "",
  buttonInformation: {
    typeButton: "primary",
    valueButton: "",
  },
  imageInformation: {
    data: {
      attributes: {
        url: "",
      },
    },
  },
  informationImage: {
    title: "",
    icon: "",
    subtitle: "",
  },
  imagesCard: {
    data: [
      {
        attributes: {
          url: "",
        },
      },
    ],
  },
};

export const initialEmptyTestimonials: IPropsTestimonialSection = {
  title: "",
  imagesCard: {
    data: [
      {
        attributes: {
          url: "",
        },
      },
    ],
  },
};

export const initialEmptyDepartment: IPropsDepartamentSection = {
  title: "",
  description: "",
  iconTop: {
    data: {
      attributes: {
        url: "",
      },
    },
  },
  imagesCard: {
    data: [
      {
        attributes: {
          url: "",
        },
      },
    ],
  },
  card: [
    {
      title: "",
      description: "",
    },
  ],
};

export const initialEmptyFooter: IPropsFooter = {
  title: "",
  subtitle: "",
  titleFooterSection: "",
  titleFooterContact: "",
  menuSections: [
    {
      url: "",
      section: "",
    },
  ],
  menuContacts: [
    {
      url: "",
      contact: "",
    },
  ],
  imagesCard: {
    data: [
      {
        attributes: {
          url: "",
        },
      },
    ],
  },
};

export const initialEmptyHeader: IPropsMenuHeaderItem[] = [
  {
    menuItem: "",
    menuItemContact: false,
    openMenuMobile: false,
    urlMenuItem: "",
  },
];

export const initialEmptyNewsletter: IPropsNewsletterSection = {
  title: "",
  subtitle: "",
  buttonInformation: {
    valueButton: "",
  },
};

export const initialEmptyFreeGuide: IPropsFreeGuide = {
  title: "",
  description: "",
  imageInformation: {
    data: {
      attributes: {
        url: "",
      },
    },
  },
  informationImage: {
    title: "",
    icon: "",
    subtitle: "",
  },
  buttonInformation: {
    valueButton: "",
  },
};

export const initialEmptyFreeOffer: IPropsFreeOffer = {
  title: "",
  subtitle: "",
  buttonInformation: {
    valueButton: "",
  },
  imagesCard: {
    data: [
      {
        attributes: {
          url: "",
        },
      },
    ],
  },
};

export const initialEmptyArticles: IPropsArticlesSection = {
  title: "",
  imagesCard: {
    data: [
      {
        attributes: {
          url: "",
        },
      },
    ],
  },
  card: [
    {
      title: "",
      description: "",
    },
  ],
  buttonInformation: {
    valueButton: "",
  },
};

export const initialEmptyImageCardWithOverlay: IPropsImageCardWithOverlay = {
  imageInformation: {
    data: {
      attributes: {
        url: "",
      },
    },
  },
  informationImage: {
    title: "",
    icon: "",
    subtitle: "",
  },
};
