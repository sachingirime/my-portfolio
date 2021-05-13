export default{

    name:'project',
    title: 'Project',
    type:'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string',
        },

        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
        },

        {
            name:'date',
            type:'datetime',
        },

        {
            name:'place',
            type:'string',
        },
        
       
    

        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },

        {
            name:'body',
            title:'Body',
            type:'blockContent',
        },
        
        {
            name:'projectType',
            title:'Project type',
            type:'string',
            options: {
                list:[
                    {value:'Personal',title:'Personal'},
                    {value:'Client',title:'Client'},
                    {value:'Event',title:'Event'},
                    {value:'Organization',title: 'Organization'},

                ],
            },

        },

        {
            name:'link',
            type:'url',

        },

        {
            name:'tags',
            type:'array',
            of:[
                {
                    type:'string',
                },
            ],
            options:{
                layout:'tags',

            }
        },

    ],

    preview: {
        select: {
          title: 'title',
          
          media: 'mainImage',
        },},

};