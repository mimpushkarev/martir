import { memo } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const accordeonText = {
    accordionTitle: "Accordion",
    accordionSubTitle:
        "Accordion Subtitle Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel placerat neque, a posuere magna. Integer leo turpis, interdum cursus nibh sed, tincidunt fringilla dolor. Etiam fringilla viverra leo eu eleifend. Fusce porttitor risus vitae metus ultrices, et pulvinar nibh elementum. Nunc in ullamcorper leo. In eu orci elit. Donec accumsan est libero, bibendum fermentum libero consectetur sed. Duis leo nulla, volutpat at metus a, faucibus lobortis nisl. Quisque ipsum felis, tincidunt laoreet ultrices at, euismod a odio. Mauris massa eros, hendrerit eu imperdiet id, fermentum vitae orci.",
};

const Accordeon = () => {
    return (
        <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex w-full justify-between border-y-2 border-y-black px-4 py-2 text-left focus-visible:ring-opacity-75">
                            <div>{accordeonText.accordionTitle}</div>
                            <ChevronUpIcon
                                className={`${
                                    open ? "rotate-180 transform" : ""
                                } h-5 w-5 text-black`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            {accordeonText.accordionSubTitle}
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    );
};

export default memo(Accordeon);
