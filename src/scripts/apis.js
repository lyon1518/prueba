import { HomeOutlined, CropPortraitOutlined, Apps, LockOutlined, VisibilityOutlined, ViewQuiltOutlined, ImportContactsOutlined, LayersOutlined, Tune, FormatColorFill, AccountCircle, VerifiedUser, AssignmentReturn, DoneAll, ToggleOff, Redeem, QuestionAnswer, Lens } from "@material-ui/icons";
import Imgs from "./Imgs";
const Apis = {
    lateral: [
        {
            active: false,
            badge: '',
            icon: '',
            title: '',
            separador: false,
            link: '',
            list: [
                {
                    active: false,
                    badge: '',
                    icon: <HomeOutlined />,
                    title: 'Dashboards',
                    separador: false,
                    link: '',
                    list: [
                        {
                            active: true,
                            badge: '',
                            icon: <Lens className="w-6-px"/>,
                            title: 'Default',
                            separador: false,
                            link: '/prueba',
                            list: []
                        },
                        {
                            active: false,
                            badge: '',
                            icon: <Lens className="w-6-px"/>,
                            title: 'Alternative',
                            separador: false,
                            link: '/prueba2',
                            list: []
                        }
                    ]
                }
            ]
        },
        {
            active: false,
            badge: '',
            icon: '',
            title: 'pages',
            separador: false,
            link: '',
            list: [
                {
                    active: false,
                    badge: '',
                    icon: <CropPortraitOutlined />,
                    title: 'pages',
                    separador: false,
                    link: '',
                    list: [
                        {
                            active: false,
                            badge: '',
                            icon: <Lens className="w-6-px"/>,
                            title: 'Users',
                            separador: false,
                            link: '',
                            list: [
                                {
                                    active: false,
                                    badge: '',
                                    icon: <Lens className="w-6-px"/>,
                                    title: 'Overview',
                                    separador: false,
                                    link: '',
                                    list: [
                                        {
                                            active: false,
                                            badge: '',
                                            icon: <Lens className="w-6-px"/>,
                                            title: 'Overview',
                                            separador: false,
                                            link: '',
                                            list: []
                                        }
                                    ]
                                },
                                {
                                    active: false,
                                    badge: '',
                                    icon: <Lens className="w-6-px"/>,
                                    title: 'Leaderboard',
                                    separador: false,
                                    link: '',
                                    list: []
                                },
                                {
                                    active: false,
                                    badge: 'Hot',
                                    icon: <Lens className="w-6-px"/>,
                                    title: 'Add User',
                                    separador: false,
                                    link: '',
                                    list: []
                                }
                            ]
                        },
                        {
                            active: false,
                            badge: '5',
                            icon: <Lens className="w-6-px"/>,
                            title: 'User Profile',
                            separador: false,
                            link: '',
                            list: []
                        },
                        {
                            active: false,
                            badge: '',
                            icon: <Lens className="w-6-px"/>,
                            title: 'Acount',
                            separador: false,
                            link: '',
                            list: []
                        },
                    ]
                },
                {
                    active: false,
                    badge: 'Hot',
                    icon: <Apps />,
                    title: 'Apps',
                    separador: false,
                    link: '',
                    list: [
                        {
                            active: false,
                            badge: '',
                            icon: <Lens className="w-6-px"/>,
                            title: 'Users',
                            separador: false,
                            link: '',
                            list: [
                                {
                                    active: false,
                                    badge: '',
                                    icon: <Lens className="w-6-px"/>,
                                    title: 'Overview',
                                    separador: false,
                                    link: '',
                                    list: []
                                },
                                {
                                    active: false,
                                    badge: '',
                                    icon: <Lens className="w-6-px"/>,
                                    title: 'Leaderboard',
                                    separador: false,
                                    link: '',
                                    list: []
                                },
                                {
                                    active: false,
                                    badge: 'Hot',
                                    icon: <Lens className="w-6-px"/>,
                                    title: 'Add User',
                                    separador: false,
                                    link: '',
                                    list: []
                                }
                            ]
                        },
                        {
                            active: false,
                            badge: '5',
                            icon: <Lens className="w-6-px"/>,
                            title: 'User Profile',
                            separador: false,
                            link: '',
                            list: []
                        },
                        {
                            active: false,
                            badge: '',
                            icon: <Lens className="w-6-px"/>,
                            title: 'Acount',
                            separador: false,
                            link: '',
                            list: []
                        },
                    ]
                },
                {
                    active: false,
                    badge: '',
                    icon: <LockOutlined />,
                    title: 'Authentication',
                    separador: false,
                    link: '',
                    list: [
                        {
                            active: false,
                            badge: '',
                            icon: <Lens className="w-6-px"/>,
                            title: 'Users',
                            separador: false,
                            link: '',
                            list: []
                        },
                        {
                            active: false,
                            badge: '5',
                            icon: <Lens className="w-6-px"/>,
                            title: 'User Profile',
                            separador: false,
                            link: '',
                            list: []
                        },
                        {
                            active: false,
                            badge: '',
                            icon: <Lens className="w-6-px"/>,
                            title: 'Acount',
                            separador: false,
                            link: '',
                            list: []
                        },
                    ]
                },
                {
                    active: false,
                    badge: '',
                    icon: <VisibilityOutlined />,
                    title: 'Welcome Page',
                    separador: false,
                    link: '',
                    list: []
                }
            ]
        },
        {
            active: false,
            badge: '',
            icon: '',
            title: 'LAYOUTS',
            separador: false,
            link: '',
            list: [
                {
                    active: false,
                    badge: '',
                    icon: <ViewQuiltOutlined />,
                    title: 'LAYOUTS',
                    separador: false,
                    link: '',
                    list: [
                        {
                            active: false,
                            badge: '',
                            icon: <Lens className="w-6-px"/>,
                            title: 'Users',
                            separador: false,
                            link: '',
                            list: []
                        },
                        {
                            active: false,
                            badge: '5',
                            icon: <Lens className="w-6-px"/>,
                            title: 'User Profile',
                            separador: false,
                            link: '',
                            list: []
                        },
                        {
                            active: false,
                            badge: '',
                            icon: <Lens className="w-6-px"/>,
                            title: 'Acount',
                            separador: false,
                            link: '',
                            list: []
                        },
                    ]
                }
            ]
        },
        {
            active: false,
            badge: '',
            icon: '',
            title: 'DOCUMENTATION',
            separador: false,
            link: '',
            list: [
                {
                    active: false,
                    badge: 'v1.1',
                    icon: <ImportContactsOutlined />,
                    title: 'Documentation',
                    separador: false,
                    link: '',
                    list: []
                },
                {
                    active: false,
                    badge: '',
                    icon: <LayersOutlined />,
                    title: 'Components',
                    separador: false,
                    link: '',
                    list: []
                }
            ]
        },
    ],
    activeLateral: false,
    sarch: {
        RecentSearch: ['Gulp', 'Notification Panel'],
        Tutorials: [
            {
                icon: <Tune />,
                name: 'How to set up Gulp?'
            },
            {
                icon: <FormatColorFill />,
                name: 'How to change theme color?'
            }
        ],
        Members: [
            {
                icon: Imgs.members[0].img,
                name: 'Amanda Harvey',
                badge: '',
                type:"avatar"
            },
            {
                icon: Imgs.members[1].img,
                name: 'David Harrison',
                badge: '',
                type:"avatar"
            },
            {
                icon: <AccountCircle />,
                name: 'Anne Richard',
                badge: <VerifiedUser />,
                type:""
            }
        ]
    },
    notificacion: {
        settings: {
            list: [
                {
                    icon: <AssignmentReturn className="fz-16" />,
                    text: 'Archive all',
                    link: ''
                },
                {
                    icon: <DoneAll className="fz-16" />,
                    text: 'Mark all as read',
                    link: ''
                },
                {
                    icon: <ToggleOff className="fz-16" />,
                    text: 'Disabled notification',
                    link: ''
                },
                {
                    icon: <Redeem className="fz-16" />,
                    text: "What's new?",
                    link: ''
                }
            ],
            fedbac: [
                {
                    icon: <QuestionAnswer className="fz-16" />,
                    text: 'Report',
                    link: ''
                }
            ],
            type: 'settings'
        },
        mensages: [
            {
                new: true,
                icon: Imgs.notification[0].img,
                type: 'avatar',
                name: 'Brian Warner',
                descripcion: 'cambió un problema de "En progreso" a ',
                etiqueta: '',
                badge: 'revisar',
                hora: '2 HR'
            },
            {
                new: true,
                icon: <AccountCircle />,
                type: '',
                name: 'Klara Hampton',
                descripcion: 'Te mencioné en un comentario',
                etiqueta: 'Buen trabajo, amor! Realmente lo clavaste. ¡Seguid así!',
                badge: '',
                hora: '10 HR'
            },
            {
                new: true,
                icon: Imgs.notification[1].img,
                type: 'avatar',
                name: 'Ruby Walter',
                descripcion: 'se unió al equipo de HS del grupo Slack',
                badge: '',
                hora: '3 DY'
            },
            {
                new: false,
                icon: Imgs.notification[2].img,
                type: 'avatar',
                name: 'de Google',
                descripcion: 'Comience a usar formularios para capturar la información de los clientes potenciales que visitan su sitio web de Google',
                etiqueta: '',
                badge: '',
                hora: '17 DÍAS'
            },
            {
                new: false,
                icon: Imgs.notification[3].img,
                type: 'avatar',
                name: 'Sara Villar',
                descripcion: 'terminado tarea FD-7',
                etiqueta: '',
                badge: '',
                hora: '2 MN'
            }
        ],
        archivos: [
            {
                new: true,
                icon: "A",
                type: '',
                name: 'Anne Richard',
                descripcion: 'cambió un problema de "En progreso" a ',
                etiqueta: '',
                badge: '',
                hora: '2 HR'
            },
            {
                new: true,
                icon: Imgs.archive[0].img,
                type: 'avatar',
                name: 'Finch Hoot',
                descripcion: 'Te mencioné en un comentario',
                etiqueta: 'Buen trabajo, amor! Realmente lo clavaste. ¡Seguid así!',
                badge: '',
                hora: '10 HR'
            },
            {
                new: true,
                icon: <AccountCircle />,
                type: '',
                name: 'HtmlStream',
                descripcion: 'se unió al equipo de HS del grupo Slack',
                badge: '',
                hora: '3 DY'
            },
            {
                new: false,
                icon: Imgs.archive[1].img,
                type: 'avatar',
                name: 'Linda Bates',
                descripcion: 'Comience a usar formularios para capturar la información de los clientes potenciales que visitan su sitio web de Google',
                etiqueta: '',
                badge: '',
                hora: '17 D'
            },
            {
                new: false,
                icon: "LC",
                type: '',
                name: 'Lewis Clarke',
                descripcion: 'terminado tarea FD-7',
                etiqueta: '',
                badge: '',
                hora: '2 MN'
            }
        ],
        tabs: [
            {
                activo: true,
                name: 'Mensajes',
                cant: '3',
                type: 'mensages'
            },
            {
                activo: false,
                name: 'Archivados',
                cant: '',
                type: 'archivos'
            },
        ]
    },
    NavbarTop: {
        apps: [
            {
                type:"avatar",
                link:"",
                icon: Imgs.notification[0].img,
                title: 'Atlassian',
                badge: '',
                description: 'Security and control across Cloud'
            },
            {
                type:"",
                link:"",
                icon: 'S',
                title: 'Slack',
                badge: 'TRY',
                description: 'Email collaboration software'
            },
            {
                type:"",
                link:"",
                icon: 'G',
                title: 'Google webdev',
                badge: '',
                description: 'Work involved in developing a website'
            },
            {
                type:"",
                link:"",
                icon: 'F',
                title: 'Frontapp',
                badge: '',
                description: 'The inbox for teams'
            },
            {
                type:"",
                link:"",
                icon: 'H',
                title: 'HS Support',
                badge: '',
                description: 'Customer service and support'
            },
            {
                type:"",
                link:"",
                icon: 'M',
                title: 'More Front products',
                badge: '',
                description: 'Check out more HS products'
            }
        ],
        activity: [
            {
                type:'avatar',
                icon: Imgs.activity[0].img,
                title: 'Iana Robinson',
                description: 'Added 2 files to task  FD-7',
                adjuntos: [
                    {
                        icono: 'Word',
                        descripcion: 'Word archivo',
                        peso: '12kb',
                    },
                    {
                        icono: 'excel',
                        descripcion: 'excel archivo',
                        peso: '48kb',
                    }
                ],
                date: 'NOW'
            },
            {
                type:'',
                icon: 'B',
                title: 'Bob dean',
                description: 'Marked  FR-6 as "Completed"',
                adjuntos: [],
                date: 'TODAY'
            },
            {
                type:'avatar',
                icon: Imgs.activity[1].img,
                title: 'Crane',
                description: 'Added 5 card to Payments',
                adjuntos: [
                    {
                        icono: '',
                        descripcion: 'IMG1',
                        peso: '',
                    },
                    {
                        icono: '',
                        descripcion: 'IMG2',
                        peso: '',
                    },
                    {
                        icono: '',
                        descripcion: 'IMG3',
                        peso: '',
                    },
                ],
                date: 'MAY 2'
            },
            {
                type:'',
                icon: 'D',
                title: 'David Lidell',
                description: 'Added a new member to Front Dashboard',
                adjuntos: [],
                date: 'MAY 15'
            },
            {
                type:'avatar',
                icon: Imgs.activity[2].img,
                title: 'Rachel King',
                description: 'Marked  FR-3 as "Completed"',
                adjuntos: [],
                date: 'ABR 19'
            },
        ]
    },
    pop: {
        active: false,
        type: ''
    },
    settings: {
        tabs: [
            {
                activo: true,
                name: 'Mensajes',
                cant: '3',
                type: 'mensages'
            },
            {
                activo: false,
                name: 'Archivados',
                cant: '',
                type: 'archivos'
            },
        ]

    },
    sesion: {
        UserInfo:
        {
            "name": "Hector",
            "email": "hgonzalez@hh.com",
            "created_at": ""
        },
        SesionInfo:
        {
            "token": "mjhsdfjksdh",
            "expires_at": "2020-02-12 11:22:22",
            "created_at": ""
        },
        SignIn: true
    },
    linkUrl: '',
    tableData: [
        {
            name: "Amanda Harvey",
            status: "Successfull",
            type: "Unassigned",
            email: "amanda@example.com",
            signed: "1 year ago",
            id: "67989",
        },
        {
            name: "Anne Richard",
            status: "Overdue",
            type: "Subscription",
            email: "anne@example.com",
            signed: "2 year ago",
            id: "67990",
        },
        {
            name: "Bob Dean",
            status: "Pending",
            type: "Non-subscription",
            email: "david@example.com",
            signed: "3 year ago",
            id: "67991",
        },
    ],
    tableData2: {
        1:{
            name: 'Prueba',
            active: 'true',
            id: 67980,
        },
        2:{
            name: 'Prueba 2',
            active: 'false',
            id: 67981,
        },
        3:{
            name: 'Prueba 3',
            active: 'true',
            id: 67982,
        },
    },
}
export default Apis