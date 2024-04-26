import Select from "./select/select";
import climbData from "./data.json";
import { groupByArea } from "./groupByArea";

function App() {
    const data = groupByArea(
        climbData.climbs.map((climb) => {
            climb.label = `${climb.route} ${climb.grade}`;
            return climb;
        })
    );
    console.log(data);
    return (
        <div class="bg-neutral-900 text-white w-screen h-screen flex items-center justify-center">
            <Select data={data} />
        </div>
    );
}

export default App;
