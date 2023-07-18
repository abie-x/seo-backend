import mongoose from "mongoose";

const subImageSchema = new mongoose.Schema({
    subImg1: String,
    subImgAltText1: String,
    subImg2: String,
    subImgAltText2: String
});

const subSectionSchema = new mongoose.Schema({
    subTitle: String,
    subContent: String,
    imagesSection: subImageSchema
});

const blogSchema = new mongoose.Schema({
    category: String,
    title: String,
    titleImage: String,
    titleImageAltText: String,
    subSections: [subSectionSchema]
});

const Blog = mongoose.model('Blog', blogSchema);

export default Blog