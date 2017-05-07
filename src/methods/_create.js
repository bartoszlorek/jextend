function create(tagName, attrs) {
    const element = this(document.createElement(tagName));
    const children = [].slice.apply(arguments)
        .slice(2);
    let value;

    for (let type in attrs) {
        value = attrs[type];

        if (type === 'text') {
            element.text(value);
        }
        else if (type === 'css') {
            for (let prop in value) {
                element.css(prop, value[prop]);
            }
        }
        else if (type === 'on') {
            for (let event in value) {
                element.on(event, value[event]);
            }
        }
        else {
            element.attr(type, value);
        }
    }

    if (children.length) {
        element.appends.apply(element, children);
    }
    return element;
}

export default create;