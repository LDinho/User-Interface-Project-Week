class TabButton {
    constructor(tabElement) {
        // Assign this.tabElement to the passed in DOM element
        this.tabElement = tabElement;

        // Get the custom data attribute on the tabElement
        this.data = this.tabElement.dataset.tab;

        // Using the custom data attribute get the associated content element
        this.contentElement = document.querySelector(`.content-wrapper-services[data-tab="${this.data}"]`);

        // Using the content element, create a new instance of the TabContent class
        this.tabContent = new TabContent(this.contentElement);

        // Add a click event listener on this instance, calling the select method on click
        this.tabElement.addEventListener('click', () => this.onTabClick());
    };

    onTabClick() {
        // Get all of the elements with the tab class
        const tabList = document.querySelectorAll('.tab');

        // Remove the 'selected-tab' class from all tabs
        Array.from(tabList)
            .forEach(tab => tab.classList.remove('selected-tab')
            ); // Alternative: `tabList.forEach(tab => tab.classList.remove('.selected-tab'));`

        // Add a "selected-tab" class to this tab
        this.tabElement.classList.add('selected-tab');

        // Call the select method on the content section associated with this tab
        this.tabContent.showActiveTabContent();
    }
}

class TabContent {
    constructor(contentElement) {
        this.contentElement = contentElement;

    }

    showActiveTabContent() {
        // Select all ".content-wrapper-services" elements representing all content linked to the tab-list
        const contents = document.querySelectorAll('.content-wrapper-services');

        // Add the "tab-content-hidden" class to each element
        contents.forEach(content => content.classList.add('tab-content-hidden'));

        // Remove the "tab-content-hidden" class
        this.contentElement.classList.remove('tab-content-hidden');
    }
}

tabs = document.querySelectorAll('.tab')
    .forEach((tab) => new TabButton(tab));
