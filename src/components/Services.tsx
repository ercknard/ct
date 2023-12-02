import Image from "next/image";
import ShieldIcon from "@mui/icons-material/Shield";
import ShieldMoonIcon from "@mui/icons-material/ShieldMoon";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import TokenIcon from "@mui/icons-material/Token";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import DrawOutlinedIcon from "@mui/icons-material/DrawOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import DataObjectIcon from "@mui/icons-material/DataObject";
import BrushIcon from "@mui/icons-material/Brush";
import {
  LockClosedIcon,
  ShieldCheckIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/outline";

const people = [
  {
    icon: LayersOutlinedIcon,
    services_num: "1",
    title: "Full-Stack Web Development",
    description:
      "Our full-stack web development approach involves proficiently handling both front-end and back-end aspects to deliver comprehensive and dynamic web solutions.",
  },
  {
    icon: CurrencyBitcoinOutlinedIcon,
    services_num: "2",
    title: "Web3 And DAPP Development",
    description:
      "As experts in Web3 and DApp development, we harness the power of decentralized technologies to build immersive and user-friendly applications.",
  },
  {
    icon: DataObjectIcon,
    services_num: "3",
    title: "Solidity Development",
    description:
      "We specialize in Solidity smart contract development, creating secure and efficient blockchain-based solutions tailored to your specific decentralized application needs.",
  },
  {
    icon: BrushIcon,
    services_num: "4",
    title: "Web Design",
    description:
      "Our web design approach focuses on crafting user-centric and aesthetically pleasing websites that align with your brand identity and business goals.",
  },
  {
    icon: DrawOutlinedIcon,
    services_num: "5",
    title: "Graphic Design",
    description:
      "Our graphic design services involve translating your brand identity and messaging into visually compelling designs.",
  },
  {
    icon: SupportAgentOutlinedIcon,
    services_num: "6",
    title: "Technical Consultation",
    description:
      "We offer technical consultation by deeply understanding your project goals and challenges, and then providing targeted expertise and strategic guidance to optimize your systems, resolve technical issues, and enhance overall project success.",
  },
];

const qoute = [
  {
    icon: TokenIcon,
    qoute_num: "1",
    qoute_1:
      "❖ ¹Final price may be adjusted or negotiated after review of report(s).",
    qoute_2:
      "❖ ²Additional Time may be arranged and allotted when expiration time nears.",
    qoute_3:
      "❖ ³Final price may be adjusted if hours of support exceed 8 hours.",
    qoute_4: "❖ ⁴Currency denomination may be negotiated.",
  },
];

export default function Services() {
  return (
    <div id="services" className="relativ py-10 sm:py-20 sm:pt-10 bg-[black]">
      <div className="mx-auto 3xl:w-6/12 lg:w-11/12 items-center justify-center p-6 lg:px-8 min-h-full">
        <div className="w-full text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-emerald-600">
            Our Services
          </h2>
          <p className="mt-2 lg:text-2xl text-base leading-8">
            We specialize in providing robust web3 and fullstack development
            services, with a primary focus on cryptocurrency, blockchain
            technology, and web design. Additionally, we offer expert services
            in the realms of cybersecurity , as well as technical support and
            consultation.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2 mt-12"
        >
          {people.map((person) => (
            <li key={person.services_num}>
              <div className="gap-8 relative text-left bg-gray-900 rounded-lg pt-16 pb-5 px-6 min-h-full flex flex-col">
                <div className="absolute lg:block right-0 top-0 team-svg hidden" />
                <div className="absolute lg:block right-0 top-0 team-svg-sub hidden" />
                <person.icon
                  className="absolute -top-7 left-1/2 transform -translate-x-1/2 h-16 w-16 text-cyan-500 group-hover:text-emerald-600"
                  aria-hidden="true"
                />
                <h3 className="lg:uppercase lg:text-3xl text-center text-3xl font-semibold leading-10 tracking-tight items-center">
                  {person.title}
                </h3>
                <div className="relative lg:p-4 z-10">
                  <p className="lg:text-xl text-base text-slate-400">
                    {person.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
