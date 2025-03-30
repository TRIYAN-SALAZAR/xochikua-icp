export type Siteconfig = typeof siteConfig;

export const siteConfig = {
    name: "Xochikua",
    description: "",
    url: "",
    links: {
        github: "https://github.com/TRIYAN-SALAZAR/xochikua-icp",
    },
    arialabel: {
        github: "Github",
    },
    routes: [
        {
            label: "Home",
            url: "/",
        },
        {
            label: "Resume",
            url: "/resume",
        },
        {
            label: "Languajes",
            url: "/skills",
        },
        {
            label: "Projects",
            url: "/projects",
        }, 
        {
            label: "Experience",
            url: "/experience",
        },
        {
            label: "Certifications",
            url: "/certifications",
        },
        {
            label: "Contact",
            url: "/contact",
        },  
    ],
}