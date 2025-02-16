import {checklist} from "./constants/checklist.tsx";
import {Stage} from "./components/stage.tsx";

export const App = () => {
    return <>
        <div className="flex justify-between">
            <h1 className="mb-4 text-3xl font-bold">Checklist brewday #</h1>
            <span>v1.0</span>
        </div>
        <ul className="grid grid-cols-2 gap-4">
            {checklist.map(stage => (
                <Stage name={stage.name} items={stage.items}/>
            ))}
        </ul>
    </>
}