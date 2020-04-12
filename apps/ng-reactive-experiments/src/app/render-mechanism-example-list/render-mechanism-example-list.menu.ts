import {MenuItem} from '@navigation';


export const MENU_ITEMS: MenuItem[] = [
    {
        link: 'render-methods-example-list',
        label: 'Render Methods',
        children: [
            // 01.
            {
                link: 'render-methods-example-list',
                label: 'Example List'
            }
        ]
    }
]
