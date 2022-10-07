// import icons
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
  IoLogoLinkedin,
} from "react-icons/io";

// import images
import Features1Img from "/Users/manassehameyow/Downloads/manassehLAw/src/assets/img/sixth6.jpeg";
import Features2Img from "./assets/img/lawback.jpeg";
import ChairImg from "./assets/img/chair.png";
import BedImg from "./assets/img/bed.png";
import CupboardImg from "./assets/img/cupboard.png";
import LightingImg from "./assets/img/lighting.png";
import Product1Img from "/Users/manassehameyow/Downloads/manassehLAw/src/assets/img/1stone.jpeg";
import Product2Img from "/Users/manassehameyow/Downloads/manassehLAw/src/assets/img/second22.jpeg";
import Product3Img from "/Users/manassehameyow/Downloads/manassehLAw/src/assets/img/third3.jpeg";
import Product4Img from "/Users/manassehameyow/Downloads/manassehLAw/src/assets/img/fouth4.jpeg";
import Product5Img from "/Users/manassehameyow/Downloads/manassehLAw/src/assets/img/fifth5.jpeg";
import Product6Img from "/Users/manassehameyow/Downloads/manassehLAw/src/assets/img/sixth6.jpeg";
import Product7Img from "/Users/manassehameyow/Downloads/manassehLAw/src/assets/img/seventh7.jpeg";
import Product8Img from "/Users/manassehameyow/Downloads/manassehLAw/src/assets/img/eighth8.jpeg";
import Product9Img from "/Users/manassehameyow/Downloads/manassehLAw/src/assets/img/ninth9.jpeg";
import Product10Img from "/Users/manassehameyow/Downloads/manassehLAw/src/assets/img/tenth10.jpeg";
import TestimonialImg from "/Users/manassehameyow/Downloads/manassehLAw/src/assets/img/finalp.jpeg";
import Avatar1Img from "/Users/manassehameyow/Downloads/manassehLAw/src/assets/img/My project (1).png";
// import Avatar2Img from "./assets/img/avatar-2.png";
// import Avatar3Img from "./assets/img/avatar-3.png";
// import Avatar4Img from "./assets/img/avatar-4.png";

export const navigation = [
  {
    name: "Home",
    href: "home",
  },

  {
    name: "About Us",
    href: "features",
  },
  {
    name: "Services",
    href: "services",
  },
  {
    name: "Contact Us",
    href: "contact",
  },
  
];

export const hero = {
  title: "Accessible, Understandable, Affordable.",
  subtitle:
    "Do i have consent to record this meeting gain locaion, root-and-branch, review, nor game plan who’s the goto",
  buttonText: "Contact Us",
};

export const stats = [
  {
    value: "5",
    text: "Year Experience",
  },
  {
    value: "1",
    text: "Opened in the country",
  },
  {
    value: "200+",
    text: "Customers",
  },
  {
    value: "10+",
    text: "Services",
  },
];

export const features = {
  image: <Features1Img />,
  title: "Communicate with our clients",
  subtitle:
    "Conduct research and analysis of legal problems. Interpret laws, rulings, and regulations for individuals and businesses.",
  buttonText: "Reach out",
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: "Phone Consultation",
      subtitle: "30-minutes phone consultation: $50",
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: "Zoom Consultation",
      subtitle: "Zoom consultation (1-hour maximum): $75",
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: "Highly effective at developing creative strategies",
    subtitle:
      "Thrives in dynamic environments and quickly adapt to the ever-changing demans of the legal field",
  },
};

export const newInStore = {
  title: "New In Store Now",
  subtitle: "Get the latest items immediately with promo prices",
  link: "Check all",
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: "chair",
      image: <ChairImg />,
    },
    {
      name: "bed",
      image: <BedImg />,
    },
    {
      name: "cupboard",
      image: <CupboardImg />,
    },
    {
      name: "lighting",
      image: <LightingImg />,
    },
  ],
};

export const products = {
  title: "All Services",
  subtitle:
    "The services we provide only for you as our service are selected from the best services with number 1 quality in the world",
  pages: [
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: "Non-Disclosure Agreement",
          price: 200,
          oldPrice: 250,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: "Contract Review (up to 20 pages)",
          price: 250,
          oldPrice: 270,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: "Cease and Desist Letter",
          price: 150,
          oldPrice: 180,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: "Non-Refundable Service Agreement",
          price: 150,
          oldPrice: 180,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: "Product/Service Agreement",
          price: 200,
          oldPrice: 210,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: "Assumption of Risk Agreement",
          price: 200,
          oldPrice: 220,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: "Issue-Specific Letter",
          price: 150,
          oldPrice: 325,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: "Work-for-Hire Agreement",
          price: 200,
          oldPrice: 240,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: "Non-Compete Agreement",
          price: 200,
          oldPrice: 230,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: "Pro se Court Filings:pricing dependent on pleading",
        },
      ],
    },
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: "NDA + Non-Compete Agreement + Non-Refundable Service Agreement + Work-for-Hire Agreement (You keep the re-usable template)",
          price: 400,
          oldPrice: 500,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: "Trademark + LLC",
          price: 500,
          oldPrice: 600,
        },
        // {
        //   image: <Product3Img />,
        //   icon: <IoMdAddCircle />,
        //   name: 'Papper Cupboard',
        //   price: 105,
        //   oldPrice: 120,
        // },
        // {
        //   image: <Product4Img />,
        //   icon: <IoMdAddCircle />,
        //   name: 'Ole Gundorse Spring',
        //   price: 75,
        //   oldPrice: 82,
        // },
        // {
        //   image: <Product5Img />,
        //   icon: <IoMdAddCircle />,
        //   name: 'Treos Seroes 911',
        //   price: 200,
        //   oldPrice: 210,
        // },
        // {
        //   image: <Product6Img />,
        //   icon: <IoMdAddCircle />,
        //   name: 'Multi bilderman slibber',
        //   price: 45,
        //   oldPrice: 50,
        // },
        // {
        //   image: <Product7Img />,
        //   icon: <IoMdAddCircle />,
        //   name: 'XORA corner desk',
        //   price: 320,
        //   oldPrice: 325,
        // },
        // {
        //   image: <Product8Img />,
        //   icon: <IoMdAddCircle />,
        //   name: 'Black Forest Series Wood',
        //   price: 225,
        //   oldPrice: 240,
        // },
        // {
        //   image: <Product9Img />,
        //   icon: <IoMdAddCircle />,
        //   name: 'Papper Cupboard',
        //   price: 105,
        //   oldPrice: 120,
        // },
        // {
        //   image: <Product10Img />,
        //   icon: <IoMdAddCircle />,
        //   name: 'Ole Gundorse Spring',
        //   price: 75,
        //   oldPrice: 82,
        // },
      ],
    },
  ],
};

export const testimonial = {
  title: "Team",
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: "CARLA HINES",
      occupation: "CEO",
      message:
        "“She are have a perfect touch to make something so professional ,interest and useful for a lot of people .”",
    },
    // {
    //   avatar: <Avatar2Img />,
    //   name: "Brandi Johns",
    //   occupation: "Manager of The New York Times",
    //   message:
    //     "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    // },
    // {
    //   avatar: <Avatar3Img />,
    //   name: "Paula Pfeffer",
    //   occupation: "Manager of The New York Times",
    //   message:
    //     "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    // },
  ],
};

export const newsletter = {
  title: "Get more discount Off your service",
  subtitle: "Join our mailing list",
  placeholder: "Your email address",
  buttonText: "Receive our mails",
};

export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: "#",
    },
    {
      icon: <IoLogoInstagram />,
      href: "#",
    },
    {
      icon: <IoLogoFacebook />,
      href: "#",
    },
    {
      icon: <IoLogoLinkedin />,
      href: "#",
    },
  ],
  copyright: "Manasseh Ameyow 2022 - All Rights Reserved.",
};
