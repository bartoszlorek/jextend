function css(prop, value) {
    if (typeof value === 'number') {
        value += 'px';
    }
    this.each(node => {
        node.style[prop] = value;
    });
    return this;
}

export default css;