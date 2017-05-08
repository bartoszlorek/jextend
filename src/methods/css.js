function css(prop, value) {
    if (typeof prop === 'object') {
        for (let style in prop) {
            if (prop.hasOwnProperty(style)) {
                this.css(style, prop[style]);
            }
        }
        return this;
    }

    // hyphen to camelCase
    prop = prop.replace(/-([a-z])/g,
        a => a[1].toUpperCase());

    if (value === undefined) {
        return this.first().style[prop];
    }
    
    if (typeof value === 'number') {
        value += 'px';
    }

    return this.each(node => {
        node.style[prop] = value;
    });
}

export default css;