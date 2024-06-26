export const Menu = [
    {
        label: "Home",
        to: "/",
    },
    {
        label: "Profile",
        to: "/",
        children: [
            {
                label: "Details",
                to: "details",
                children: [
                    {
                        label: "Location",
                        to: "location",
                    },
                ]
            },
        ]
    },
    {
        label: "Settings",
        to: "/settings",
        children: [
            {
                label: "Account",
                to: "account",
            },
            {
                label: "Security",
                to: "security",
                children: [
                    {
                        label: "Login",
                        to: "login",
                    },
                    {
                        label: "Register",
                        to: "register",
                    },
                ]
            },
        ]
    },
]