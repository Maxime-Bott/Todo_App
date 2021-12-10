import {FormEvent, useState} from "react";
import {GenericObject} from "@types";

export interface ReturnValues {
    inputs: GenericObject;
    handleChange: (e: FormEvent) => void;
    reset: () => void;
}

export const useInputs = (initialValues: GenericObject): ReturnValues => {
    const [inputs, setInputs] = useState(initialValues);

    return {
        inputs,
        handleChange: e => {
            const {
                name,
                value: targetValue,
                checked,
                type,
            } = e.target as HTMLInputElement;

            let value: boolean | string = targetValue;

            if (type === "checkbox") {
                value = checked;
            }

            setInputs({
                ...inputs,
                [name]: value,
            });
        },
        reset: () => setInputs(initialValues),
    };
};
