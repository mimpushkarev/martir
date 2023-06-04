import { FC } from "react";

export type OptionType = {
    id: string;
    optionTitle: string;
};

type SelectPropsType = {
    options: Array<OptionType>;
};

export type SelectType = FC<SelectPropsType>;
