"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  PaintBrushIcon,
  DevicePhoneMobileIcon,
  PuzzlePieceIcon,
  UserGroupIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const projects = [
  {
    name: "Metrix.Place",
    description: "metrix.place is a communal grafitti board called a place",
    href: "#",
    icon: PaintBrushIcon,
  },
  {
    name: "MetriMask Mobile",
    description: "Metrixcoin Web3 wallet with embedded browser.",
    href: "#",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "CryptechTest Game",
    description: "Community-driven Minetest Game with endless possibilities.",
    href: "#",
    icon: PuzzlePieceIcon,
  },
  {
    name: "Metrix Liquid Governance Protocol",
    description: "Connect with third-party tools",
    href: "#",
    icon: UserGroupIcon,
  },
  {
    name: "SCP Extension",
    description:
      "Stake Cube Protocol light wallet and transaction signing client.",
    href: "#",
    icon: WalletIcon,
  },
];
const callsToAction = [
  {
    name: "Email",
    href: "https://github.com/Cryptech-Services",
    icon: EmailIcon,
  },
  {
    name: "Github",
    href: "https://github.com/Cryptech-Services",
    icon: GitHubIcon,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative navi-main">
      <nav
        className="mx-auto flex w-full lg:w-11/12 3xl:w-6/12 items-center justify-between p-6 fixed left-1/2 -translate-x-1/2 z-30"
        aria-label="Global"
      >
        <div className="flex items-center gap-1 lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Cryptech Services</span>
            <Image
              className="h-12 w-auto"
              src="/images/ct-256.png"
              alt=""
              width={256}
              height={256}
            />
          </a>
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-emerald-600">
            Cryptech Services
          </span>
        </div>
        {/* <div className="flex gap-10 justify-between"> */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 mt-1.5">
          <a href="#services" className="text-xl leading-6">
            Our Services
          </a>
          <a href="#security" className="text-xl leading-6">
            Security Services
          </a>
          <a href="#team" className="text-xl leading-6">
            Cryptech Team
          </a>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-xl leading-6">
              Projects
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-20 mt-3 w-screen max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {projects.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-500 group-hover:text-cyan-500"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-lg text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-base text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            variant="contained"
            className="rounded-full capitalize w-40 bg-gradient-to-br from-cyan-500 to-emerald-600"
          >
            Contact Us
          </Button>
        </div>
        {/* </div> */}
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-20" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Cryptech Services</span>
              <Image
                className="h-12 w-auto"
                src="/images/ct-256.png"
                alt=""
                width={256}
                height={256}
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#services"
                  className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                >
                  Our Services
                </a>
                <a
                  href="#security"
                  className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                >
                  Security Services
                </a>
                <a
                  href="#team"
                  className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                >
                  Cryptech Team
                </a>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-100">
                        Projects
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...projects, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="py-6">
                <Button
                  variant="contained"
                  className="bg-gradient-to-br from-cyan-500 to-emerald-600"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
