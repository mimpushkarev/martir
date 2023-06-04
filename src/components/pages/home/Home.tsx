import { useState } from "react";

import Accordeon from "@ui-kit/accordeon/Accordeon";
import Checkbox from "@ui-kit/checkbox/Checkbox";
import TextField from "@ui-kit/text-field/TextField";
import Select from "@ui-kit/select/Select";

const Home = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (value: string) => {
        setInputValue(value);
    };

    const options = [
        { id: "1", optionTitle: "Wade Cooper" },
        { id: "2", optionTitle: "Arlene Mccoy" },
        { id: "3", optionTitle: "Devon Webb" },
        { id: "4", optionTitle: "Tom Cook" },
        { id: "5", optionTitle: "Tanya Fox" },
        { id: "6", optionTitle: "Hellen Schmidt" },
    ];
    return (
        <div>
            <h1 className=" text-hero">Hello Martir</h1>
            <h2 className=" text-subtitle">this is main page</h2>
            <Accordeon />
            <Checkbox />
            <TextField
                placeholder="Enter your name"
                value={inputValue}
                onChange={handleInputChange}
            />

            <Select options={options} />
        </div>
    );
};

export default Home;
