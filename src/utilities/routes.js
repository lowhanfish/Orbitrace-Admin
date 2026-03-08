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
        children : [
            {
                title : "Asset Management",
                path:"/",
                children : []
            },
            {
                title : "Customer Management",
                path:"/",
                children : [
                    {
                        title : "AI-Lead SCorring",
                        path:"/",
                        children : []
                    },
                    {
                        title : "Customer Database",
                        path:"/",
                        children : []
                    },
                    {
                        title : "Follow-Up Management",
                        path:"/",
                        children : []
                    },
                    {
                        title : "Interaction History",
                        path:"/",
                        children : []
                    },
                    {
                        title : "Lead Pipeline",
                        path:"/",
                        children : []
                    },
                ]
            },
            {
                title : "Employee Management",
                path:"/",
                children : []
            },
            {
                title : "Financial Management",
                path:"/",
                children : [
                    {
                        title : "AI-Anomaly Detection",
                        path:"/",
                        children : []
                    },
                    {
                        title : "Budget Planning",
                        path:"/",
                        children : []
                    },
                    {
                        title : "Cashflow Tracking",
                        path:"/",
                        children : []
                    },
                    {
                        title : "Expense Management",
                        path:"/",
                        children : []
                    },
                    {
                        title : "Financial Reporting",
                        path:"/",
                        children : []
                    },
                    {
                        title : "Invoice",
                        path:"/",
                        children : []
                    },
                ]
            },
            {
                title : "Sales Management",
                path:"/",
                children : []
            },
        ]
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