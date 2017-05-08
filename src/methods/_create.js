function create(html, attributes) {
    const element = u(html);
    const children = element
        .slice(arguments)
        .slice(2);

    for (let prop in attributes) {
        let value = attributes[prop];
        if (prop === 'text' || prop === 'css') {
            element[prop](value);

        } else if (prop === 'on') {
            for (let event in value) {
                element.on(event, value[event]);
            }
        } else {
            element.attr(prop, value);
        }
    }

    if (children.length) {
        element.appends.apply(element, children);
    }

    return element;
}

export default create;