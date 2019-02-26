const selectAll = tag => document.querySelectorAll(tag);
const selectOne = tag => document.querySelector(tag);

class Menu {
    constructor(closedMenuElement, expandedMenuElement) {
        // Get the hamburger icon with id "open-icon"
        const openIcon = closedMenuElement.querySelector('#open-icon');
        // Get the close icon
        const closeIcon = expandedMenuElement.querySelector('.icon-close');

        // Get the body tag to which to add the .expanded class
        this.body = selectOne('body');

        // Add a click handler to the hamburger/close icons and call the toggleContent method.
        openIcon.addEventListener('click', () => this.toggleContent());
        closeIcon.addEventListener('click', () => {
            // expandedMenuElement.classList.add('fadeOut');
            this.toggleContent()
        });
    }

    toggleContent() {
        // Toggle the ".expanded" class off and on from 'body' element
        this.body.classList.toggle('expanded');
    }
}

const closedMenu = selectOne('nav');
const expandedMenu = selectOne('.nav-expanded');

new Menu(closedMenu, expandedMenu);
