export type Siteconfig = typeof siteConfig;

export const siteConfig = {
    name: "Xochikua",
    description: "Servicio de pago universal para Zapopan que permite realizar transacciones en una amplia variedad de servicios de manera rápida y segura.",
    url: "xochikua.sklconnect.com",
    links: {
        github: "https://github.com/TRIYAN-SALAZAR/xochikua-icp",
    },
    arialabel: {
        github: "Github",
    },
    routes: [
        {
            label: "Login",
            url: "/",
        },
        {
            label: "Register",
            url: "/register",
        },  
    ],
}