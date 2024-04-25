import { createSignal } from "solid-js";

export default function Select(props) {
    const [showDrawer, setShowDrawer] = createSignal(false);

    const handleDrawer = () => {
        setShowDrawer(!showDrawer());
    };

    return (
        <div>
            <button
                class="border-gray-300 border-2 bg-neutral-900 rounded-lg p-2 flex items-center gap-4 w-60"
                placeholder="select climb..."
                onclick={handleDrawer}
            >
                <svg
                    fill="none"
                    stroke-width="2"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    style="overflow: visible; color: currentcolor;"
                >
                    <path d="M11 3A8 8 0 1 0 11 19 8 8 0 1 0 11 3z"></path>
                    <path d="M21 21 16.65 16.65"></path>
                </svg>
                <p class="grow flex justify-start text-neutral-400">
                    search climb...
                </p>
                <svg
                    fill="currentColor"
                    stroke-width="0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    style="overflow: visible; color: currentcolor;"
                >
                    <path
                        fill-rule="evenodd"
                        d="m7.116 8-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </button>
            <div
                class={`w-screen h-screen fixed left-0 top-0 z-10 bg-black transition-[opacity] duration-500 ${
                    showDrawer()
                        ? "opacity-50 pointer-events-all"
                        : "opacity-0 pointer-events-none"
                }`}
                onclick={handleDrawer}
            />
            <div
                class={`fixed left-0 w-screen h-2/3 bg-neutral-900 transition-[bottom] duration-500 z-20 ${
                    showDrawer() ? "bottom-0" : "bottom-[-1000px]"
                }`}
            ></div>
        </div>
    );
}
