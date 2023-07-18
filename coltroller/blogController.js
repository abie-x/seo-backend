import Blog from "../model/blogModel.js";

export const createBlog = async (req, res) => {
    try {
        const { category, title, titleImage, titleImageAltText, subSections } = req.body;

        // Create a new instance of the Blog model with the provided data
        const newBlog = new Blog({
            category,
            title,
            titleImage,
            titleImageAltText,
            subSections
        });

        // Save the new blog entry in the database
        const savedBlog = await newBlog.save();

        res.status(201).json(savedBlog); // Return the saved blog entry as a response
    } catch (error) {
        res.status(500).json({ message: "Failed to create a new blog." });
    }
}


// Controller function to retrieve all blogs
export const getAllBlogs = async (req, res) => {
    try {
      const blogs = await Blog.find(); // Retrieve all blog entries from the database
  
      res.status(200).json(blogs); // Send the retrieved blogs as a response
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve blogs." });
    }
  };