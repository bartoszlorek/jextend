function empty() {
    this.each(node => {
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
    });
    return this;
}

export default empty;