const navData = [
    {
        name: "Home",
        to: "/",
    },
    {
        name: "Courses",
        to: "/course",
    },
    {
        name: "Blog",
        to: "/Blog",
        children: [
            {
                name: "Blog",
                to: "/blog",
            },
            {
                name: "Single Blog",
                to: "/blog/single",
            },
        ],
    },
    {
        name: "Page",
        to: "/Page",
        children: [
            {
                name: "Events",
                to: "/events",
            },
            {
                name: "Events Date",
                to: "/eventdate",
            },
            {
                name: "Admission",
                to: "/admission",
            },
            {
                name: "Elements",
                to: "/blog/elements",
            },
        ],
    },
    {
        name: "Contact",
        to: "/contact",
    },
];

export default navData;