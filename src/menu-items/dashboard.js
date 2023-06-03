// assets
import { IconDashboard, IconDeviceAnalytics, IconMessageChatbot } from '@tabler/icons';

// constant
const icons = {
    IconDashboard: IconDashboard,
    IconMessageChatbot: IconMessageChatbot,
    IconDeviceAnalytics
};

//-----------------------|| DASHBOARD MENU ITEMS ||-----------------------//

export const dashboard = {
    id: 'dashboard',
    title: '',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard',
            icon: icons['IconDashboard'],
            breadcrumbs: false,
            admin: 1
        },
        {
            id: 'sample-page',
            title: 'Chatbot',
            type: 'item',
            url: '/chatbot',
            icon: icons['IconMessageChatbot'],
            breadcrumbs: false,
            admin: 0
        },
    ]
};
