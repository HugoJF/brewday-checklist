import {Stage as StageType} from "../constants/checklist.tsx";

export type StageProps = StageType;

export const Stage = ({name, items}: StageProps) => {
    return <li className="flex flex-col gap-2 p-4 pb-2 rounded-lg border border-gray-200 overflow-hidden">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <ul className="flex flex-col gap-1">
            {items.map((item, index) => <li
                key={index}
                className="flex gap-1 items-baseline"
            >
                <span className="block w-5 h-5 border"></span>
                <span>{item}</span>
            </li>)}
        </ul>
    </li>
}