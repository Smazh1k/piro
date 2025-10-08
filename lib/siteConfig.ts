export type SiteInfo = {
  id: string;
  name: string;
  logo: string;
  primaryColor: string;
  domain: string;
};

export const sites: SiteInfo[] = [
  {
    id: "sceniczna",
    name: "Sceniczna",
    logo: "/images/sceniczna.svg",
    primaryColor: "#1D3557",
    domain: "sceniczna.pl",
  },
  {
    id: "piroefekt",
    name: "PiroEfekt",
    logo: "/images/piroefekt.svg",
    primaryColor: "#E63946",
    domain: "piroefekt.pl",
  },
  {
    id: "fundacjarazem",
    name: "Fundacja Razem",
    logo: "/images/fundacjarazem.svg",
    primaryColor: "#457B9D",
    domain: "sceniczna.pl/fundacjarazem",
  },
];

export function detectSite(): SiteInfo {
  if (typeof window === "undefined") {
    return sites[0];
  }

  const host = window.location.hostname;
  const path = window.location.pathname;

  if (host.includes("piroefekt.pl")) return sites[1];
  if (host.includes("sceniczna.pl") && path.startsWith("/fundacjarazem"))
    return sites[2];
  if (host.includes("sceniczna.pl")) return sites[0];

  return sites[0];
}
