import { u } from 'umbrellajs';
import parse from '../src/methods/parse.js';
u.prototype.parse = parse;

const box1 = u('<div>').attr({ class: 'box', id: 'main' }).first();
const box2 = u('<div>').attr({ class: 'box' }).first();
const text = u('<p>').attr({ class: 'text' }).first();
u('body').append([ box1, box2, text ]);

describe('parse', function() {

    it('should match empty', function() {
        let result = u().parse('.wrong');
        expect(result).toBeInstanceOf(Array);
        expect(result.length).toBe(0);
    })

    it('should match id', function() {
        let result = u().parse('#main');
        expect(result).toBeInstanceOf(Array);
        expect(result.length).toBe(1);
    })

    it('should match class', function() {
        let result = u().parse('.box');
        expect(result).toBeInstanceOf(Array);
        expect(result.length).toBe(2);
    })

    it('should match tag', function() {
        let result = u().parse('div');
        expect(result).toBeInstanceOf(Array);
        expect(result.length).toBe(2);
    })

})