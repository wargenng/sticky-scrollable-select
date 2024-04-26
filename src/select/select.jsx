import { createSignal } from "solid-js";
import Clear from "./assets/clear";
import Chevron from "./assets/chevron";
import Search from "./assets/search";

export default function Select(props) {
    const [showDrawer, setShowDrawer] = createSignal(false);
    const [currentInput, setCurrentInput] = createSignal("");
    const [data, setData] = createSignal(props.data);

    const handleDrawer = () => {
        setShowDrawer(!showDrawer());
    };

    const handleInput = (e) => {
        setCurrentInput(e.target.value);
        updateData(e.target.value);
    };

    const handleClear = () => {
        setCurrentInput("");
        updateData("");
    };

    const updateData = (input) => {
        setData(
            props.data
                .filter(
                    (group) =>
                        group.options.filter((child) =>
                            [...new Set(input)].every((char) =>
                                child.label
                                    .toLowerCase()
                                    .includes(char.toLowerCase())
                            )
                        ).length > 0
                )
                .map((group) => {
                    return {
                        name: group.name,
                        options: group.options.filter((child) =>
                            [...new Set(input)].every((char) =>
                                child.label
                                    .toLowerCase()
                                    .includes(char.toLowerCase())
                            )
                        ),
                    };
                })
        );
    };

    return (
        <div>
            <div class="border-gray-400 border-2 bg-neutral-900 rounded-lg p-2 flex items-center w-60">
                <button
                    class=" bg-neutral-900 flex items-center gap-4 grow"
                    placeholder="select climb..."
                    onclick={handleDrawer}
                >
                    <Search />
                    <p class="grow flex justify-start text-neutral-400">
                        {currentInput() === "" ? "search..." : currentInput()}
                    </p>
                </button>
                <button onclick={handleClear}>
                    <Clear />
                </button>
            </div>

            <div
                class={`w-screen h-screen fixed left-0 top-0 z-10 bg-black transition-[opacity] duration-500 ${
                    showDrawer()
                        ? "opacity-50 pointer-events-all"
                        : "opacity-0 pointer-events-none"
                }`}
                onclick={handleDrawer}
            />
            <div
                class={`fixed left-0 w-screen h-2/3 bg-neutral-900 rounded-t-lg transition-[bottom] duration-500 z-20 ${
                    showDrawer() ? "bottom-0" : "bottom-[-700px]"
                }`}
            >
                <div class="flex w-full gap-4 items-center p-4 border-b border-neutral-700">
                    <Search />
                    <input
                        class="bg-inherit border-none grow"
                        placeholder="search..."
                        value={currentInput()}
                        oninput={handleInput}
                    ></input>
                    <button onclick={handleClear}>
                        <Clear />
                    </button>
                    <button
                        onclick={handleDrawer}
                        class={`flex justify-center items-center transition-all duration-100 ${
                            showDrawer() ? "rotate-0" : "rotate-180"
                        }`}
                    >
                        <Chevron />
                    </button>
                </div>
                <div class="max-h-full overflow-auto px-4 flex flex-col items-start">
                    {data().length > 0 ? (
                        data().map((area) => {
                            return (
                                <>
                                    <div class="sticky top-0 bg-neutral-900 w-full py-2 flex gap-4">
                                        <h1 class="text-md brightness-50">
                                            {area.name.toUpperCase()}
                                        </h1>
                                        <h1 class="text-md brightness-50 italic">
                                            {area.options.length} climbs
                                        </h1>
                                    </div>
                                    {area.options.map((climb) => {
                                        return (
                                            <button
                                                onclick={() => {
                                                    setCurrentInput(
                                                        climb.route
                                                    );
                                                    handleDrawer();
                                                }}
                                                class="text-lg mb-4 text-left w-full"
                                            >
                                                {climb.label}
                                            </button>
                                        );
                                    })}
                                </>
                            );
                        })
                    ) : (
                        <div class="mt-2 brightness-50">no results found.</div>
                    )}
                </div>
            </div>
        </div>
    );
}
