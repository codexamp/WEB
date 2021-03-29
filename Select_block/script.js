class SelectBlock {
    constructor(options) {
        this.selectItem = document.querySelectorAll(options.selectItem)
        this.selector = document.querySelector(options.selector)

        let selectorWidth = this.selector.getBoundingClientRect()['width'];
        let selectorHeight = this.selector.getBoundingClientRect()['height'];

        let transitionTime = options.transition;

        this.selector.style.transition = transitionTime + 's';

        let offsetHeight = (this.selector.getBoundingClientRect()['height'] - this.selectItem[0].getBoundingClientRect()['height']) / 2;
        let offsetWidth = (this.selector.getBoundingClientRect()['width'] - this.selectItem[0].getBoundingClientRect()['width']) / 2;

        for (let i = 0; i < this.selectItem.length; i++) {
            this.selectItem[i].addEventListener('mouseover', move => {
                this.selector.style.top = (this.selectItem[i].getBoundingClientRect()['top'] - offsetHeight) + 'px';
                this.selector.style.left = (this.selectItem[i].getBoundingClientRect()['left'] - offsetWidth) + 'px';
                this.selector.style.opacity = 0.1;
                this.selector.style.borderRadius = '35%'
                setTimeout(ff => {
                    this.selector.style.borderRadius = '20px'
                    for (let j = 0; j < this.selectItem.length; j++) {
                        if (j == i) {
                            this.selector.style.opacity = 0.7;
                            this.selector.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)'
                        }
                    }
                }, transitionTime * 1000);
            });
        }

    }
}

let block = new SelectBlock({
    selectItem: '.select-item',
    selector: '.selector',
    transition: 0.5
});
