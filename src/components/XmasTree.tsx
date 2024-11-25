import xmasTree from "../assets/xmas_tree.svg";
import "./XmasTree.css"

export const XmasTree = () => {
    return (
        <>
            <div className={"calendar-card xmas-tree-card"}>
                <img className={"xmas-tree-img"} src={xmasTree} alt={"xmas-tree"}/>
            </div>
        </>
    )
}