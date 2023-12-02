import Image from "next/image";

const people = [
  {
    name: "Squidicuz",
    role: "Administrator",
    subrole: "❖ Consultant",
    secrole: "❖ Developer",
    imageUrl: "/images/squid.webp",
  },
  {
    name: "SeqSee",
    role: "Administrator",
    subrole: "❖ Consultant",
    secrole: "❖ Developer",
    imageUrl: "/images/seqsee-1.webp",
  },
  {
    name: "Jekz",
    role: "Security Researcher",
    subrole: "❖ Graphic Artist",
    secrole: "❖ Penetration Tester",
    imageUrl: "/images/jekz8.webp",
  },
  {
    name: "Rasalghul",
    role: "Photographer",
    subrole: "❖ Consultant",
    secrole: "❖ Developer",
    imageUrl: "/images/raz.webp",
  },
  {
    name: "Boehmerang",
    role: "CAD Designer",
    subrole: "❖ Consultant",
    secrole: "❖ Developer",
    imageUrl: "/images/valor3.webp",
  },
  {
    name: "Baydroid",
    role: "Cryptographer",
    subrole: "❖ Consultant",
    secrole: "❖ Developer",
    imageUrl: "/images/loma1.webp",
  },
  {
    name: "Ercknard",
    role: "Web Designer",
    subrole: "❖ Graphic Designer",
    secrole: "❖ Developer",
    imageUrl: "/images/ercknard3.webp",
  },
  {
    name: "Vanikoro",
    role: "Developer",
    subrole: "❖",
    secrole: "❖",
    imageUrl: "/images/vani-2.webp",
  },
];

export default function Team() {
  return (
    <div id="team" className="relative py-10 lg:py-32">
      <div className="custom-shape-divider-bottom-1701539867 lg:block hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 892.25 114.72 1200 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="custom-shape-divider-top-1701545120 lg:block hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 892.25 114.72 1200 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="mx-auto 3xl:w-6/12 lg:w-11/12 items-center justify-center p-6 lg:px-8 min-h-full">
        {/* <div className="absolute w-screen h-screen left-0 top-0 triangle-svg-projects -z-10 hidden lg:block" />
        <div className="absolute w-screen h-screen left-0 top-0 triangle-svg-projects-sub -z-10 hidden lg:block" /> */}
        {/* <div className="absolute w-screen h-48 bg-gradient-to-b from-transparent to-black bottom-0 left-1/2 transform -translate-x-1/2" /> */}
        {/* <div className="absolute w-screen h-48 bg-gradient-to-t from-transparent to-black top-0 left-1/2 transform -translate-x-1/2" /> */}
        <div className="w-full text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-emerald-600 relative">
            Meet the Team
          </h2>
          <p className="mt-2 lg:text-2xl text-base leading-8 relative">
            Please contact an Admin team member if you have an urgent request.
            Thank you.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 mt-12"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="relative flex text-left place-items-center gap-x-6 bg-gray-900 rounded-lg">
                <div className="absolute lg:block right-0 team-svg hidden" />
                <div className="absolute lg:block right-0 team-svg-sub hidden" />
                <Image
                  className="lg:h-52 lg:w-52 h-40 w-40 bg-zinc-700 rounded-lg"
                  src={person.imageUrl}
                  alt=""
                  width={846}
                  height={846}
                />
                <div>
                  <h3 className="lg:uppercase lg:text-4xl text-3xl font-semibold leading-10 tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-emerald-600">
                    {person.name}
                  </h3>
                  <p className="lg:text-2xl text-lg font-semibold mt-2 leading-8">
                    {person.role}
                  </p>
                  <p className="lg:text-xl lg:mt-3 text-lg text-slate-400">
                    {person.subrole}
                  </p>
                  <p className="lg:text-xl text-lg text-slate-400">
                    {person.secrole}
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
