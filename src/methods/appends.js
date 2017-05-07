function appends() {
    let fragment = document
        .createDocumentFragment();

    [].slice
        .apply(arguments)
        .forEach(child => {
            if (child.nodeType) {
                fragment.appendChild(child);
            }
            else if (child instanceof u) {
                child.each(node => {
                    fragment.appendChild(node);
                })
            }
        })

    this.first().appendChild(fragment);
    return this;
}

export default appends;