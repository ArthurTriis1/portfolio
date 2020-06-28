import image from '../../assets/temp/preservpost.png'
const project =  {
        "id": 1,
        "title": "Nome do Aplicativo",
        "access": "http://www.link.com",
        "repository": "github.com",
        "image": image,
        "description": "Descrição detalhada no aplicativo",
        "created_at": "2020-06-28T04:22:50.026Z",
        "updated_at": "2020-06-28T04:22:50.026Z",
        "postagem": [
                        {
                            "id": 1,
                            "subtitle": "Desenvolvimento",
                            "interpost": [
                                {
                                    "id": 1,
                                    "paragraph": "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                                    "image": [ 
                                        {
                                            "image": image, 
                                            "title": "Titulo padrão",
                                            "subtitle": "subtitulo padrão"
                                            
                                        },

                                        {
                                            "image": image, 
                                            "title": "Titulo padrão",
                                            "subtitle": "subtitulo padrão"
                                            
                                        }
                                    ]
                                },
                                {
                                    "id": 2,
                                    "paragraph": "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                                    "image": [ 
                                        {
                                            "image": image, 
                                            "subtitle": "subtitulo padrão"
                                            
                                        },
                                        {
                                            "image": image, 
                                            "title": "Titulo padrão"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": 2,
                            "subtitle": "Colaboradores",
                            "interpost": [
                                {
                                    "id": 3,
                                    "paragraph": "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                                    "image": [
                                        {
                                            "image": image, 
                                            "title": "Titulo padrão",
                                            "subtitle": "subtitulo padrão"
                                            
                                        }
                                    ]
                                },
                                {
                                    "id": 4,
                                    "paragraph": "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                                    "image": [ 
                                        {
                                            "image": image, 
                                            "title": "Titulo padrão",
                                            "subtitle": "subtitulo padrão"
                                            
                                        }
                                    ]
                                }
                            ]
                        }
        ],
        "tags": [
            {
                "id": 1,
                "name": "React",
                "color": "#F3212E",
                "created_at": "2020-06-28T04:08:25.816Z",
                "updated_at": "2020-06-28T04:08:25.816Z"
            },
            {
                "id": 2,
                "name": "node",
                "color": "#FED605",
                "created_at": "2020-06-28T04:08:41.803Z",
                "updated_at": "2020-06-28T04:08:41.803Z"
            }
        ]
    }

const projects = [project, project, project, project]


export { project, projects };