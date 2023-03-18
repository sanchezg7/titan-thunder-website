import React, {useState} from "react";
import cx from "classnames";

const items = [
    {
        "name": "Home",
        "url": "/"
    },
    {
        "name": "About",
        "items": [
            {
                "name": "Mission",
                "url": "/mission"
            },
            {
                "name": "History",
                "url": "/history"
            }
        ]
    },
    {
        "name": "Events",
        "url": "/events"
    },
    {
        "name": "Support Us",
        "url": "/support"
    }
];

const NavBar = () => {
    const route = window.location.pathname.replace(/\/titan-thunder-website/g, "");
    const [selected, setSelected] = useState(items[0]);

    return (
        <nav className="flex bg-gray-100 shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            <a href="#" className="flex items-center py-4 px-2">
                                <img className="h-8 w-10" src="src/assets/TBT.png" alt=""/>
                                <span className="font-semibold text-gray-500 text-lg">Titan Thunder</span>
                            </a>
                        </div>
                        <div className="hidden md:flex space-x-1 items-center">
                        {items.map(nav => {

                            return <a
                                    href={nav.url}
                                    className={cx("py-4 px-2 font-semibold text-gray-500 hover:text-blue-500 transition duration-200", {
                                        "border-b-4 border-blue-500 text-blue-500": selected.url === nav.url
                                    })}>
                                        {nav.name}
                                    </a>
                        })}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;