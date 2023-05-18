import { memo } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

import { AccordeonType } from "./types";

const accordeonText = {
    accordionTitle: "Accordion",
    accordionSubTitle:
        "Accordion Subtitle Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel placerat neque, a posuere magna. Integer leo turpis, interdum cursus nibh sed, tincidunt fringilla dolor. Etiam fringilla viverra leo eu eleifend. Fusce porttitor risus vitae metus ultrices, et pulvinar nibh elementum. Nunc in ullamcorper leo. In eu orci elit. Donec accumsan est libero, bibendum fermentum libero consectetur sed. Duis leo nulla, volutpat at metus a, faucibus lobortis nisl. Quisque ipsum felis, tincidunt laoreet ultrices at, euismod a odio. Mauris massa eros, hendrerit eu imperdiet id, fermentum vitae orci.",
};

const Accordeon: AccordeonType = () => {
    return (
        <div className="mx-auto w-full max-w-md rounded-2x p-2">
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex w-full justify-between items-center text-paragraph border-y-2 border-y-white text-white py-4 text-left focus-visible:ring-opacity-75">
                            <div>{accordeonText.accordionTitle}</div>
                            <ChevronUpIcon
                                className={`${
                                    open ? "rotate-180 transform" : ""
                                } h-7 w-7 p-0 m-0 text-white`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-paragraph text-common-light-gray">
                            {accordeonText.accordionSubTitle}
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    );
};

export default memo(Accordeon);
