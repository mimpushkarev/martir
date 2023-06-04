import { Fragment, useState, memo } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

import { cn } from "@utils/cn";

import { OptionType, SelectType } from "./types";

const Select: SelectType = ({ options }) => {
    const [selected, setSelected] = useState(options[0]);
    const [query, setQuery] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const filteredOptions =
        query === ""
            ? options
            : options.filter((option) =>
                  option.optionTitle
                      .toLowerCase()
                      .replace(/\s+/g, "")
                      .includes(query.toLowerCase().replace(/\s+/g, ""))
              );
    return (
        <div>
            <Combobox value={selected} onChange={setSelected}>
                <div className="relative mt-1 drop-shadow-none active:drop-shadow-md active:shadow-primary-normal">
                    <div
                        className={cn(
                            "relative w-full overflow-hidden rounded bg-common-bg text-left text-white border outline-none hover:border-white",
                            {
                                ["shadow-md shadow-primary-normal"]: isFocused,
                                ["border-common-gray shadow-none"]: !isFocused,
                            }
                        )}
                    >
                        <Combobox.Input
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            className="w-full border-none py-2 px-2 text-paragraph bg-common-bg text-white "
                            displayValue={(option: OptionType) =>
                                option.optionTitle
                            }
                            onChange={(event) => setQuery(event.target.value)}
                        />
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                                className="h-5 w-5 text-white"
                                aria-hidden="true"
                            />
                        </Combobox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery("")}
                    >
                        <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-common-bg py-1 text-base text-white snap-none border border-common-light-gray">
                            {filteredOptions.length === 0 && query !== "" ? (
                                <div className="relative cursor-default select-none py-2 px-4 text-white">
                                    Nothing found.
                                </div>
                            ) : (
                                filteredOptions.map((person) => (
                                    <Combobox.Option
                                        key={person.id}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 text-white ${
                                                active ? " bg-primary-dark" : ""
                                            }`
                                        }
                                        value={person}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                    className={`block truncate text-paragraph ${
                                                        selected
                                                            ? "font-medium"
                                                            : "font-normal"
                                                    }`}
                                                >
                                                    {person.optionTitle}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                            active
                                                                ? "text-white"
                                                                : " text-primary-dark"
                                                        }`}
                                                    >
                                                        <CheckIcon
                                                            className="h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
};

export default memo(Select);
