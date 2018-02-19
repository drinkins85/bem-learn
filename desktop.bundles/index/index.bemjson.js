module.exports = {
    block: 'page',
    title: 'Яндекс Музыка',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.js' }],
    mods: { theme: 'music' },
    content: [
        {
            block: 'header',
            content: [
                {
                    elem: 'side',
                    elemMods: { align: 'left'},
                    content: [
                        {
                            block: 'logo',
                            content: {
                                block: 'image',
                                url: '/img/logo.svg',
                                title: 'Лого'
                            }
                        },
                        {
                            elem: 'nameplate',
                            content: 'Музыка'
                        },
                        {
                            block: 'form',
                            tag: 'form',
                            action: 'search.php',
                            method: 'POST',
                            content: {
                                block: 'control-group',
                                content: [
                                    {
                                        block: 'input',
                                        mods: {
                                            theme: 'islands',
                                            size: 'l',
                                            type: 'search'
                                        },
                                        placeholder: 'Введите запрос'
                                    },
                                    {
                                        block: 'button',
                                        mods: {
                                            theme: 'islands',
                                            size: 'l'
                                        },
                                        text: 'Поиск'
                                    }
                                ]
                            }
                        }
                    ]

                },
                {
                    elem: 'side',
                    elemMods: { align: 'right'},
                    content: [
                        {
                            block: 'button',
                            mods: { theme: 'islands', size: 'l', view: 'action'},
                            text: 'Подписка',
                            icon: {
                                block: 'icon',
                                mods: { type: 'purchase'}
                            }
                        },
                        {
                            block: 'button',
                            mods: { theme: 'islands', size: 'l'},
                            text: 'Моя музыка',
                            icon: {
                                block: 'icon',
                                mods: { type: 'love'}
                            }
                        },
                        {
                            block: 'user',
                            url: 'http://ya.ru',
                            mix: { block:'header', elem: 'user'},
                            content: [
                                {
                                    block: 'image',
                                    mix: { block: 'user', elem: 'picture'},
                                    title: 'Avatar',
                                    url: 'https://avatars2.githubusercontent.com/u/25724974?s=460&v=4'
                                },
                                {
                                    elem: 'name',
                                    content: 'drinkins85'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'content',
            content: [
                {
                    elem: 'side',
                    elemMods: { align: 'left'},
                    content: {
                        block: 'checkbox-group',
                        mods: {
                            theme: 'islands',
                            size: 'm'
                        },
                        name: 'checkbox-line',
                        options: [
                            {
                                val: 1,
                                text: 'Блок',
                                disabled: true
                            },
                            {
                                val: 2,
                                text: 'Элемент'
                            },
                            {
                                val: 3,
                                text: 'Модификатор'
                            }
                        ]
                    }
                },
                {
                    elem: 'side',
                    elemMods: { align: 'center'},
                    content: 'text'
                },
                {
                    elem: 'side',
                    elemMods: { align: 'right'},
                    content: [
                        {
                            block: 'menu',
                            mods: {
                                theme: 'islands',
                                size: 'm',
                                icon: 'yes'
                            },
                            content: [
                                {
                                    elem: 'item',
                                    elemMods: { type: 'link'},
                                    content: {
                                        block: 'link',
                                        url: 'http://ya.ru',
                                        content: [
                                            {
                                                block: 'image',
                                                mix: { block: 'menu', elem: 'image'},
                                                url: 'https://cdn0.iconfinder.com/data/icons/super-mono-reflection/yellow/weather-snow_yellow.png',
                                                alt: 'Фото'
                                            },
                                            {
                                                block: 'text',
                                                content: 'menu item 1'
                                            }
                                        ]
                                    }
                                },
                                {
                                    elem: 'item',
                                    elemMods: { type: 'link'},
                                    content: {
                                        block: 'link',
                                        url: 'http://ya.ru',
                                        content: [
                                            {
                                                block: 'image',
                                                mix: { block: 'menu', elem: 'image'},
                                                url: 'https://cdn2.iconfinder.com/data/icons/freecns-cumulus/32/519843-55_Sun-256.png',
                                                alt: 'Фото'
                                            },
                                            {
                                                block: 'text',
                                                content: 'menu item 2'
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]

};
