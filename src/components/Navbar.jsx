import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const people = [
  {
    name: "Students",
    description: "View all students in your program.",
    to: "/students",
  },
  {
    name: "Parents",
    description: "View all parents in your program",
    to: "/parents",
  },
  {
    name: "Volunteers",
    description: "View all colunteers in your program.",
    to: "/volunteers",
  },
  {
    name: "Ensembles",
    description: "View all ensembles in your program.",
    to: "/ensembles",
  },
];

const inventory = [
  {
    name: "Uniforms/Attire",
    description:
      "View/Add/Edit all uniforms or attire in your program inventory.",
    to: "/uniforms",
  },
  {
    name: "Music Library",
    description: "View your music library, add or update selections.",
    to: "/library",
  },
  {
    name: "Assets",
    description:
      "View your inventoried assets, add or update to keep track of items.",
    to: "/assets",
  },
];

const calendar = [
  {
    name: "Calendar",
    to: "/calendar",
  },
  {
    name: "Add Event",
    to: "/addevent",
  },
];

const finances = [
  {
    name: "Tracker",
    description: "Track and view all financial details.",
    to: "/financialtracker",
  },
  {
    name: "Fundraisers/Solicitations",
    description: "View, Add and Edit all fundraisers and solicitations.",
    to: "/fundraisers",
  },
  {
    name: "Statements",
    description: "View and Print statements.",
    to: "/statements",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const { user } = useAuthContext();

  const { logout } = useLogout();

  return (
    <>
      <Popover className="relative bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </Link>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              {user ? (
                <>
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-gray-900" : "text-gray-500",
                            "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          )}
                        >
                          <span>People</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? "text-gray-600" : "text-gray-400",
                              "ml-2 h-5 w-5 group-hover:text-gray-500"
                            )}
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
                          <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {people.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.to}
                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                  >
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {item.description}
                                      </p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-gray-900" : "text-gray-500",
                            "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          )}
                        >
                          <span>Inventory</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? "text-gray-600" : "text-gray-400",
                              "ml-2 h-5 w-5 group-hover:text-gray-500"
                            )}
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
                          <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {inventory.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.to}
                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                  >
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {item.description}
                                      </p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-gray-900" : "text-gray-500",
                            "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          )}
                        >
                          <span>Calendar</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? "text-gray-600" : "text-gray-400",
                              "ml-2 h-5 w-5 group-hover:text-gray-500"
                            )}
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
                          <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {calendar.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.to}
                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                  >
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-gray-900" : "text-gray-500",
                            "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          )}
                        >
                          <span>Finances</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? "text-gray-600" : "text-gray-400",
                              "ml-2 h-5 w-5 group-hover:text-gray-500"
                            )}
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
                          <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {finances.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.to}
                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                  >
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {item.description}
                                      </p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                </>
              ) : (
                ""
              )}
            </Popover.Group>
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              {user ? (
                <button
                  onClick={logout}
                  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/signup"
                    className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt="Your Company"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                  <nav
                    className="grid gap-y-10 bg-white px-4 py-8 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
                    aria-labelledby="solutions-heading"
                  >
                    <h2 id="solutions-heading" className="sr-only">
                      Solutions menu
                    </h2>
                    <div>
                      <h3 className="text-base font-medium text-gray-500">
                        People
                      </h3>
                      <div role="list" className="mt-5 space-y-6">
                        {people.map((item) => (
                          <li key={item.name} className="flow-root">
                            <a
                              href={item.to}
                              className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 transition duration-150 ease-in-out hover:bg-gray-50"
                            >
                              {" "}
                              <span className="ml-4">{item.name}</span>
                            </a>
                          </li>
                        ))}
                        <div>
                          <h3 className="text-base font-medium text-gray-500">
                            Inventory
                          </h3>
                          <div role="list" className="mt-5 space-y-6">
                            {inventory.map((item) => (
                              <li key={item.name} className="flow-root">
                                <a
                                  href={item.href}
                                  className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 transition duration-150 ease-in-out hover:bg-gray-50"
                                >
                                  <span className="ml-4">{item.name}</span>
                                </a>
                              </li>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-base font-medium text-gray-500">
                            Calendar
                          </h3>
                          <div role="list" className="mt-5 space-y-6">
                            {calendar.map((item) => (
                              <li key={item.name} className="flow-root">
                                <a
                                  href={item.href}
                                  className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 transition duration-150 ease-in-out hover:bg-gray-50"
                                >
                                  <span className="ml-4">{item.name}</span>
                                </a>
                              </li>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-base font-medium text-gray-500">
                            Financials
                          </h3>
                          <div role="list" className="mt-5 space-y-6">
                            {finances.map((item) => (
                              <li key={item.name} className="flow-root">
                                <a
                                  href={item.href}
                                  className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 transition duration-150 ease-in-out hover:bg-gray-50"
                                >
                                  <span className="ml-4">{item.name}</span>
                                </a>
                              </li>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};

export default Navbar;
