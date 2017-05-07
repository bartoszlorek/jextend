import * as methods from './methods/';

export function extend(u) {
    for (let prop in methods) {
        if (prop[0] === '_') {
            let name = prop.slice(1);
            if (!u.hasOwnProperty(name)) {
                 u[name] = methods[prop];
            }
        } else {
            if (!(prop in u)) {
                u.prototype[prop] = methods[prop];
            }
        }
    }
    return u;
}