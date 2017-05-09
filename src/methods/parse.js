const selectors = [
    // id
    [ /^\#[\w\-]+$/, function (param) {
        let element = document.getElementById(param.substring(1));
        return element ? [element] : [];
    }],

    // class
    [ /^\.[\w\-]+$/, function (param) {
        return document.getElementsByClassName(param.substring(1));
    }],

    // tag
    [ /^\w+$/, function (param) {
        return document.getElementsByTagName(param);
    }],

    // new element
    [ /^</, function (param) {
        console.log(param)
    }],

    // 
    [ /./, function (param, context) {
        console.log( 'last-------')
        return (context || document).querySelectorAll(param);
    }]
];

function select(param, context) {
    let length = selectors.length;
    for (let i=0; i<length; i++) {
        if (selectors[i][0].test(param)) {
            return Array.prototype.slice.call(
                selectors[i][1](param, context));
        }
    }
    return [];
}

function parse(param, context) {
    let match = select(param, context);

    console.log( match )

    return match;
}

export default parse;