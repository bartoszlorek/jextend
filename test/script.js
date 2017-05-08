(function() {

    // first extend umbrellajs
    uplug.extend(u);

    // then use new methods
    let box = u.create('<div>', {
        class: 'box',
        text: 'the box',
        css: {
            color: 'red'
        },
        on: {
            click: () => console.log('box')
        }
    },
        u('<p>A</p>'),
        u('<p>B</p>')
    );

    u('#app').append(box);

    box.css('border', '1px solid black');
    box.css('border-width', 10);
    box.css('borderWidth', 20);

})();