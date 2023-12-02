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

export default function Security() {
  return (
    <div
      id="security"
      className="relativ py-10 sm:py-20 sm:pt-10 bg-gradient-to-r from-cyan-500/25 to-emerald-600/25"
    >
      <div className="mx-auto 3xl:w-6/12 lg:w-11/12 items-center justify-center p-6 lg:px-8 min-h-full">
        <div className="w-full text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-emerald-600">
            Security Services
          </h2>
          <p className="mt-2 lg:text-2xl text-base leading-8">
            In providing Security Services, our team employs advanced
            technologies to ensure robust protection for individuals,
            businesses, and assets.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2 mt-12"
        >
          {people.map((person) => (
            <li key={person.package_num}>
              <div className="relative text-left gap-x-6 bg-gray-900 rounded-lg pt-16 pb-5 px-6 min-h-full flex flex-col justify-between">
                <div className="absolute lg:block right-0 top-0 team-svg hidden" />
                <div className="absolute lg:block right-0 top-0 team-svg-sub hidden" />
                {/* <person.icon
                  className="absolute -top-7 left-1/2 transform -translate-x-1/2 h-16 w-16 text-cyan-500 group-hover:text-emerald-600"
                  aria-hidden="true"
                /> */}
                <div>
                  <h3 className="absolute left-1/2 transform -translate-x-1/2 -top-10 lg:uppercase text-[7.5rem] mb-1 text-center font-semibold leading-10 tracking-tight text-stroke">
                    {person.package_num}
                  </h3>
                  <h3 className="lg:uppercase lg:text-3xl mb-1 text-center text-3xl font-semibold leading-10 tracking-tight">
                    {person.title}
                  </h3>
                  <h3 className="lg:uppercase lg:text-2xl mb-10 text-center text-3xl font-semibold leading-10 tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-emerald-600">
                    {person.title_1}
                  </h3>
                </div>
                <div className="relative grid grid-rows-4 lg:p-4 z-10 rounded-lg lg:bg-gray-900/95">
                  <p className="lg:text-xl text-base text-slate-400 flex items-center">
                    {person.queue_1}
                  </p>
                  <p className="lg:text-xl text-base text-slate-400 flex items-center">
                    {person.queue_2}
                  </p>
                  <p className="lg:text-xl text-base text-slate-400 flex items-center">
                    {person.queue_3}
                  </p>
                  <p className="lg:text-xl text-base text-slate-400 flex items-center">
                    {person.queue_4}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-1 sm:gap-y-16 xl:col-span-2 mt-12"
        >
          {qoute.map((person) => (
            <li key={person.qoute_num}>
              <div className="relative text-left gap-x-6 bg-gray-900 rounded-lg pt-10 pb-10 px-6 min-h-full flex flex-col justify-between">
                <div className="absolute lg:block right-0 top-0 team-svg hidden" />
                <div className="absolute lg:block right-0 top-0 team-svg-sub hidden" />
                <person.icon
                  className="absolute -top-7 left-1/2 transform -translate-x-1/2 h-16 w-16 text-cyan-500 group-hover:text-emerald-600"
                  aria-hidden="true"
                />
                <div className="grid grid-rows-4 gap-y-4">
                  <p className="lg:text-lg text-base text-slate-400">
                    {person.qoute_1}
                  </p>
                  <p className="lg:text-lg text-base text-slate-400">
                    {person.qoute_2}
                  </p>
                  <p className="lg:text-lg text-base text-slate-400">
                    {person.qoute_3}
                  </p>
                  <p className="lg:text-lg text-base text-slate-400">
                    {person.qoute_4}
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
