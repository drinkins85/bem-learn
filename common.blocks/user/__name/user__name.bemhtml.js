block('user').elem('name')(
    content()(function () {
        console.log(this);
        var name = this.ctx.content;
        return [{ elem: 'first-letter', content: name.charAt(0)}, name.slice(1)];
    })
);
