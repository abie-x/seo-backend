import mongoose from "mongoose";

// const subImageSchema = new mongoose.Schema({
//     subImg1: String,
//     subImgAltText1: String,
//     subImg2: String,
//     subImgAltText2: String
// });

// const subSectionSchema = new mongoose.Schema({
//     subTitle: String,
//     subContent: String,
//     imagesSection: subImageSchema
// });

// const blogSchema = new mongoose.Schema({
//     category: String,
//     title: String,
//     Author: String,
//     titleImage: String,
//     titleImageAltText: String,
//     blogContent: [subSectionSchema]
// });

// Schema for a single image
// const singleImageSchema = new mongoose.Schema({
//     imgLink: String,
//     altText: String
//   });
  
//   // Schema for a two-image section
//   const twoImageSchema = new mongoose.Schema({
//     imgLink1: String,
//     img1AltText: String,
//     imgLink2: String,
//     img2AltText: String
//   });
  
//   // Schema for blog content section
//   const blogContentSchema = new mongoose.Schema({
//     h2: String,
//     h3: String,
//     p: String,
//     singleImage: singleImageSchema,
//     twoImage: twoImageSchema
//   });
  
//   // Main blog schema
//   const blogSchema = new mongoose.Schema({
//     title: String,
//     category: String,
//     author: String,
//     blogContent: [blogContentSchema]
//   });

const singleImageSchema = new mongoose.Schema({
    imgLink: String,
    altText: String
  });
  
  const twoImageSchema = new mongoose.Schema({
    imgLink1: String,
    img1AltText: String,
    imgLink2: String,
    img2AltText: String
  });
  
  const blogContentSchema = new mongoose.Schema({
    type: String,
    content: mongoose.Schema.Types.Mixed  // You can store different types of content
  });
  
  const blogSchema = new mongoose.Schema({
    title: String,
    category: String,
    author: String,
    blogContent: [blogContentSchema]
  });

const Blog = mongoose.model('Blog', blogSchema);

export default Blog