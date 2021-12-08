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
            e.preventDefault();
            const {name, value} = e.target as HTMLInputElement;
            setInputs({[name]: value});
        },
        reset: () => setInputs(initialValues),
    };
};
