import Image from "next/image";
import ShieldIcon from "@mui/icons-material/Shield";
import ShieldMoonIcon from "@mui/icons-material/ShieldMoon";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import TokenIcon from "@mui/icons-material/Token";
import {
  LockClosedIcon,
  ShieldCheckIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/outline";

const people = [
  {
    icon: ShieldIcon,
    package_num: "1",
    title: "Standard (1 time¹) ",
    title_1: "⇒ 0.015 BTC⁴",
    queue_1:
      "❖ Report of Website Vulnerabilities and some basic resources to self-remedy any issues.",
    queue_2:
      "❖  VPS Pentest and some basic resources to self-remedy any issues.",
  },
  {
    icon: ShieldMoonIcon,
    package_num: "2",
    title: "Deluxe (1 time¹) ",
    title_1: "⇒ 0.02 BTC⁴",
    queue_1:
      "❖  Report of Website Vulnerabilities and some basic resources to self-remedy any issues.",
    queue_2:
      "❖  VPS Pentest and some basic resources to self-remedy any issues.",
    queue_3:
      "❖  Additional One on One support in remedying the security issues³.",
  },
  {
    icon: LocalPoliceIcon,
    package_num: "3",
    title: "Deluxe LTS (1 year²) ",
    title_1: "⇒ 0.04 BTC⁴",
    queue_1:
      "❖  Monthly Report of Website Vulnerabilities and some basic resources to self-remedy.",
    queue_2: "❖  Monthly VPS Pentest.",
    queue_3: "❖  Monthly list of CVEs for your server.",
    queue_4:
      "❖  Monthly One on One support in remedying web-server and security issues³.",
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

export default function Projects() {
  return (
    <div
      id="projects"
      className="relative py-10 sm:py-20 sm:pt-[10rem] bg-black w-screen h-screen"
    >
      {" "}
      <div className="mx-auto 3xl:w-6/12 lg:w-11/12 items-center justify-center p-6 lg:px-8 min-h-full">
        <div className="w-full text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-emerald-600">
            Our Works
          </h2>
          <p className="mt-2 lg:text-2xl text-base leading-8">
            In providing Security Services, our team employs advanced
            technologies to ensure robust protection for individuals,
            businesses, and assets.
          </p>
        </div>
      </div>
    </div>
  );
}
