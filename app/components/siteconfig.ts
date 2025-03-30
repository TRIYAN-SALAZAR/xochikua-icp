export type Siteconfig = typeof siteConfig;

export const siteConfig = {
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
    directRoutes: {
        home: "/",
        resume: "/resume",
        skills: "/skills",
        projects: "/projects",
        experience: "/experience",
        Certifications: "/certifications",
        contact: "/contact",
    },
    links: {
        github: "https://github.com/Yukyshiram",
        linkendin: "",
        instagram: "",
        facebook: "",
    }
}