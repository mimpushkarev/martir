import { memo, useState } from "react";

import { cn } from "@utils/cn";

import { TextFieldType } from "./types";

const TextField: TextFieldType = ({
    placeholder,
    value,
    onChange,
    disabled,
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <div
            className={cn("relative", {
                ["opacity-50"]: !!disabled,
            })}
        >
            {placeholder && (
                <div
                    className={cn(
                        "absolute left-2 top-2 transition ease-in-out duration-200 text-common-light-gray pointer-events-none",
                        {
                            ["opacity-0 cursor-text"]: isFocused || !!value,
                        }
                    )}
                >
                    {placeholder}
                </div>
            )}
            <input
                id="input"
                type="text"
                value={value}
                disabled={disabled}
                onChange={handleInputChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={cn(
                    "w-full max-w-[300px] h-10 text-white text-paragraph bg-common-bg rounded border px-2 py-2 outline-none ease-in-out duration-200 hover:border-white",
                    {
                        ["border-white cursor-text shadow-md shadow-primary-normal"]:
                            isFocused,
                        ["border-common-gray shadow-none"]: !isFocused,
                    }
                )}
            />
        </div>
    );
};

export default memo(TextField);
