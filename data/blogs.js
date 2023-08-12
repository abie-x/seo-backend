// const blogs = {
//     category: "Travel Tips",
//     title: "Exploring the World: Travel Guide",
//     Author: "Anupama Sreekumar",
//     titleImage: "travel-guide.jpg",
//     titleImageAltText: "Exploring the World: Travel Guide",
//     blogContent: [
//         {
//             subTitle: "Packing Essentials",
//             subContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//             imagesSection:
//             {
//                 subImg1: "packing-essentials-img1.jpg",
//                 subImgAltText1: "Packing Essentials Image 1",
//                 subImg2: "packing-essentials-img2.jpg",
//                 subImgAltText2: "Packing Essentials Image 2"
//             }
//         },
//         {
//             subTitle: "Navigating Local Cuisine",
//             subContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//             imagesSection:
//             {
//                 subImg1: "local-cuisine-img1.jpg",
//                 subImgAltText1: "Navigating Local Cuisine Image 1",
//                 subImg2: "local-cuisine-img2.jpg",
//                 subImgAltText2: "Navigating Local Cuisine Image 2"
//             }
//         },
//         {
//             subTitle: "Hidden Gems to Explore",
//             subContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//             imagesSection:
//             {
//                 subImg1: "hidden-gems-img1.jpg",
//                 subImgAltText1: "Hidden Gems Image 1",
//                 subImg2: "hidden-gems-img2.jpg",
//                 subImgAltText2: "Hidden Gems Image 2"
//             }
//         },
//         {
//             subTitle: "Budget-Friendly Travel Tips",
//             subContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//             imagesSection:
//             {
//                 subImg1: "budget-travel-img1.jpg",
//                 subImgAltText1: "Budget-Friendly Travel Image 1",
//             }
//         }
//     ]
// }

// export default blogs


const blogs = [
    {
    title: "This is a test title",
    category: "exploration",
    author: "script",
    blogContent: [
        {
            type: "h2",
            content: "this is a sample h2 heading"
        },
        {
            type: "h3",
            content: "this is a sample h2 heading"
        },
        {
            type: "h2",
            content: "this is a second sample h2 heading"
        },
        {
            type: "p",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            type: "singleImg",
            content: "this is a sample first image link"
        },
        {
            type: "twoImg",
            content: {
                imgLink1: "sample img link",
                img1AltText: "sample img alt text",
                imgLink2: "sample img link 2",
                img2AltText: "sample img link 2 alt text"
            }
        },
    ]
    },
    {
        title: "This is a test title",
        category: "exploration",
        author: "script",
        blogContent: [
            {
                type: "h2",
                content: "this is a sample h2 heading"
            },
            {
                type: "h3",
                content: "this is a sample h2 heading"
            },
            {
                type: "h2",
                content: "this is a second sample h2 heading"
            },
            {
                type: "p",
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                type: "singleImg",
                content: "this is a sample first image link"
            },
            {
                type: "twoImg",
                content: {
                    imgLink1: "sample img link",
                    img1AltText: "sample img alt text",
                    imgLink2: "sample img link 2",
                    img2AltText: "sample img link 2 alt text"
                }
            },
            {
                type: "twoImg",
                content: {
                    imgLink1: "sample img link",
                    img1AltText: "sample img alt text",
                    imgLink2: "sample img link 2",
                    img2AltText: "sample img link 2 alt text"
                }
            },
        ] 
    }
]

export default blogs

