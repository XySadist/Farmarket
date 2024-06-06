const DrawerInitiator = {
    init({ button, drawer, content }) {
        button.addEventListener('click', (event) => {
        console.log('\'click');
        this._toggleDrawer(event, drawer);
        });

        content.addEventListener('click', (event) => {
        if (drawer.classList.contains('active')) {
            this._closeDrawer(event, drawer);
        }
        });
    },

    _toggleDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.toggle('active');
    },

    _closeDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.toggle('active');
    },
};

export default DrawerInitiator;
