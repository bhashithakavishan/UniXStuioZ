import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { DEFAULT_OG_IMAGE } from "./data/images";

const titleSuffix = " | UniX StudioZ";
const defaultOgImage = DEFAULT_OG_IMAGE;

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
        handle: {
          title: `UniX StudioZ${titleSuffix}`,
          description:
            "UniX StudioZ delivers modern luxury photography for discerning clients, crafting cinematic imagery and editorial storytelling with timeless precision.",
          ogTitle: `UniX StudioZ${titleSuffix}`,
          ogDescription:
            "UniX StudioZ delivers modern luxury photography for discerning clients, crafting cinematic imagery and editorial storytelling with timeless precision.",
          ogImage: defaultOgImage,
          twitterCard: "summary_large_image",
        },
      },
      {
        path: "portfolio",
        Component: Portfolio,
        handle: {
          title: `Portfolio${titleSuffix}`,
          description:
            "Explore the UniX StudioZ portfolio of luxury weddings, portraits, and editorial imagery designed for high-end global clients.",
          ogTitle: `Portfolio${titleSuffix}`,
          ogDescription:
            "Explore the UniX StudioZ portfolio of luxury weddings, portraits, and editorial imagery designed for high-end global clients.",
          ogImage: defaultOgImage,
          twitterCard: "summary_large_image",
        },
      },
      {
        path: "about",
        Component: About,
        handle: {
          title: `About${titleSuffix}`,
          description:
            "Learn the story behind UniX StudioZ, a modern luxury photography studio founded on cinematic storytelling and curated client experiences.",
          ogTitle: `About${titleSuffix}`,
          ogDescription:
            "Learn the story behind UniX StudioZ, a modern luxury photography studio founded on cinematic storytelling and curated client experiences.",
          ogImage: defaultOgImage,
          twitterCard: "summary_large_image",
        },
      },
      {
        path: "services",
        Component: Services,
        handle: {
          title: `Services${titleSuffix}`,
          description:
            "Discover UniX StudioZ’s premium photography services, bespoke wedding coverage, portraits, and editorial experiences tailored for discerning clients.",
          ogTitle: `Services${titleSuffix}`,
          ogDescription:
            "Discover UniX StudioZ’s premium photography services, bespoke wedding coverage, portraits, and editorial experiences tailored for discerning clients.",
          ogImage: defaultOgImage,
          twitterCard: "summary_large_image",
        },
      },
      {
        path: "contact",
        Component: Contact,
        handle: {
          title: `Contact${titleSuffix}`,
          description:
            "Contact UniX StudioZ to inquire about modern luxury photography commissions, destination weddings, and editorial storytelling.",
          ogTitle: `Contact${titleSuffix}`,
          ogDescription:
            "Contact UniX StudioZ to inquire about modern luxury photography commissions, destination weddings, and editorial storytelling.",
          ogImage: defaultOgImage,
          twitterCard: "summary_large_image",
        },
      },
    ],
  },
]);
