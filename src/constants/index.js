export const ROUTES = {
    INDEX: '/',
    MY_RECORD: 'my-record',
    LOGIN: 'login',
    COLUMN: 'column',
};

export const dishFilters = [
    {
        title: "Morning",
        icon: "/icons/knife.svg",
        value: "morning",
    },
    {
        title: "Lunch",
        icon: "/icons/knife.svg",
        value: "lunch",
    },
    {
        title: "Dinner",
        icon: "/icons/knife.svg",
        value: "dinner",
    },
    {
        title: "Snack",
        icon: "/icons/cup.svg",
        value: "snack",
    },
];

export const navs = [
    {
        title: "自分の記録",
        to: ROUTES.MY_RECORD,
        icon: "/icons/edit.svg"
    },
    {
        title: "チャレンジ",
        to: "/challenge",
        icon: "/icons/challenge.svg"
    },
    {
        title: "お知らせ",
        to: "/notification",
        icon: "/icons/info.svg",
        count: 1,
    },
];

export const subNavs = [
    {
        title: "自分の記録",
        to: ROUTES.MY_RECORD,
    },
    {
        title: "体重グラフ",
        to: "/weight-chart",
    },
    {
        title: "目標",
        to: "/goal",
    },
    {
        title: "選択中のコース",
        to: "/selected-course",
    },
    {
        title: "コラム一覧",
        to: `/${ROUTES.COLUMN}`,
    },
    {
        title: "設定",
        to: "/setting",
    },
];

export const navFoots = [
    {
        title: "会員登録",
        to: "/register",
    },
    {
        title: "運営会社",
        to: "/company",
    },
    {
        title: "利用規約",
        to: "/terms",
    },
    {
        title: "個人情報の取扱について",
        to: "/privacy",
    },
    {
        title: "特定商取引法に基づく表記",
        to: "/disclaimer",
    },
    {
        title: "お問い合わせ",
        to: "/contact",
    },
]