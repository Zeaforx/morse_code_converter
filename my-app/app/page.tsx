"use client";
import Image from "next/image";
import data from "./morsecode.json";
import { ChangeEvent, useState } from "react";
type StringObject = {
    [key: string]: string;
};

export default function Home() {
    const [text, settext] = useState<string>("");
    const [encoded, setencoded] = useState<string>("");
    const data1: StringObject = data;
    // console.log(data);
    let element: string = "";
    function handleChange(event: ChangeEvent) {
        settext(event.target.value);
        console.log(text);
    }
    function handleSubmit(event: HTMLFormElement) {
        event.preventDefault();
        let temp = text.toUpperCase();
        for (let index = 0; index < text.length; index++) {
            if (text[index] == " ") {
                element += "   ";
            } else {
                const code = data1[`${temp[index]}`];
                element += code;
                element += " ";
                console.log(element);
            }
        }
        return setencoded(element);
        // const temp = "w 3";
        // console.log(temp[1]);
        // console.log(temp[2]);
    }
    return (
        <main className=" bg-gray-900 h-screen w-screen  ">
            <div className="w-screen h-20 flex items-center justify-center">
                <header className="text-white">
                    <h1>morse code converter</h1>
                </header>
            </div>
            <div className="w-screen h-96 flex items-center flex-col gap-8 justify-center">
                <form
                    onSubmit={handleSubmit}
                    className="flex items-center justify-center flex-col gap-3"
                >
                    <textarea
                        onChange={handleChange}
                        className="text-black"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-blue-200 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                    >
                        Encode
                    </button>
                </form>
                <div className="bg-white w-9/12 h-36">
                    <p className="text-2xl">{encoded}</p>
                </div>
            </div>
        </main>
    );
}
