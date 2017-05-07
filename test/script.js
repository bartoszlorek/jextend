(function() {

    // first extend umbrellajs
    uplug.extend(u);

    // then use new methods
    u('#app').append(
        u.create('div', {
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
        )
    );

})();