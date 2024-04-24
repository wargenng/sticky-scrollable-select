import { createSignal } from "solid-js";

export default function Select(props) {
    const [isDrawerOpen, setDrawerOpen] = createSignal(false);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen()); // Toggle between true and false
    };

    return (
        <div>
            <input
                type="text"
                placeholder="click to open Drawer"
                onClick={toggleDrawer}
            />
            {isDrawerOpen() ? <div class="bg-slate-500"></div> : null}
        </div>
    );
}
