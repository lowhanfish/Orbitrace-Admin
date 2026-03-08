import { BsFillHouseFill, BsPlayFill, BsGrid, BsBuildings, BsRobot } from "react-icons/bs";

const routex = [
    {
        title : "Home",
        path:"/",
        icon : <BsFillHouseFill />,
        children : []
    },
    {
        title : "Core",
        path:"/",
        icon : <BsGrid />,
        children : []
    },
    {
        title : "Property",
        path:"/",
        icon : <BsBuildings />,
        children : []
    },
    {
        title : "AI Assistant",
        path:"/",
        icon : <BsRobot />,
        children : []
    },



]


export default routex;