const getNavbarMenuItems = () => {
    return [
        {
            id: 1,
            menuName: 'home',
            displayName: 'Home',
            containerClassName: 'home-icon-container',
            className: 'home-icon',
            importName: 'home-icon',
            alt: "Home Icon",
            tabName: 'home-tab'
        },
        {
            id: 2,
            menuName: 'add',
            displayName: 'Add',
            containerClassName: 'add-icon-container',
            className: 'add-icon',
            importName: 'add-icon',
            alt: "Add Icon",
            tabName: 'add-tab'
        },
        {
            id: 3,
            menuName: 'accounts',
            displayName: 'Accounts',
            containerClassName: 'accounts-icon-container',
            className: 'accounts-icon',
            importName: 'profile-icon',
            alt: "Account Icon",
            tabName: 'accounts-tab'
        },

    ]
}

export {
    getNavbarMenuItems
}