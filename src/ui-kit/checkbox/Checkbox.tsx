import { memo } from "react";

import { CheckIcon } from "@heroicons/react/20/solid";

import { CheckBoxType } from "./types";

const CheckBox: CheckBoxType = () => {
    return (
        <div className="flex justify-center items-center">
            <label
                htmlFor="checkbox-component"
                className="cursor-pointer relative"
            >
                <div className="flex justify-center items-center w-[30px] h-[30px] accent-common-bg border-[1px] rounded border-common-gray">
                    <input
                        id="checkbox-component"
                        type="checkbox"
                        className="w-[30px] h-[30px] accent-common-bg border-[1px] rounded border-common-gray appearance-none opacity-0 absolute z-[-1]"
                    />
                    <CheckIcon className="text-header h-[25px] w-[25px] text-white text-opacity-0 transition duration-200 ease-in-out check-1" />
                </div>
            </label>
        </div>
    );
};

export default memo(CheckBox);
