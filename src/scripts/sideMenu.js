const sideMenu = [
    {
        title: '會員中心',
        icon: 'UserFilled',
        item: [
            {
                subtitle: '基本資料設定',
                path:'/infoSetting'

            },
            {
                subtitle: '實名認證 (KYC)',
                path:'/kFCValidation'
            },
            {
                subtitle: '商店',
                path:''
            },
            {
                subtitle: '帳戶餘額/提領',
                path:''
            },
            {
                subtitle: '發票/對帳單',
                path:''
            },
            {
                subtitle: '服務加值/帳單',
                path:''
            },
            {
                subtitle: '設定',
                path:''
            },
            {
                subtitle: '消費者專區',
                path:''
            },
            {
                subtitle: '平台商專區',
                path:''
            },
        ]
    },
    {
        title: '幫助中心',
        icon: 'WarningFilled',
        item: [
            {
                subtitle: '問與答',
                path:''
            }
        ]
    },
    {
        title: '通知中心',
        icon: 'Comment',
    },
    {
        title: '電子發票',
        icon: '',
    },
    {
        title: '捐款',
        icon: '',
    },
    {
        title: '物流',
        icon: 'ShoppingTrolley',
    }
]

export default sideMenu;