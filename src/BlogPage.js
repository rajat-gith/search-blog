import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Select,
  Button,
  Box,
  InputAdornment,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import blogPosts from "./data/blogs.json";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts.posts);

  const handleSearch = () => {
    const filtered = blogPosts.posts.filter(
      (post) =>
        (searchTerm === "" ||
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.content.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (category === "" || post.category === category)
    );
    setFilteredPosts(filtered);
  };

  return (
    <Box sx={{ maxWidth: 800, margin: "0 auto", padding: 2 }}>
      <Box sx={{ display: "flex", mb: 2, gap: 2 }}>
        <Box sx={{ flexGrow: 1 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: "gray" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          variant="outlined"
          sx={{ minWidth: 160 }}
        >
          <MenuItem value="">All Categories</MenuItem>
          <MenuItem value="Programming">Programming</MenuItem>
          <MenuItem value="Technology">Technology</MenuItem>
          <MenuItem value="Lifestyle">Lifestyle</MenuItem>
        </Select>
        <Button
          onClick={handleSearch}
          variant="contained"
          color="primary"
          sx={{ height: "100%" }}
        >
          Search
        </Button>
      </Box>

      <Box>
        {filteredPosts.length === 0 ? (
          <p className="text-center text-gray-500">No posts found</p>
        ) : (
          filteredPosts.map((post) => (
            <Box
              key={post.id}
              sx={{
                border: "1px solid #e0e0e0",
                padding: 2,
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "#f9f9f9",
                },
              }}
            >
              <h2 style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
                {post.title}
              </h2>
              <p style={{ color: "#757575" }}>{post.content}</p>
              <Box sx={{ mt: 1, fontSize: "0.875rem" }}>
                <span
                  style={{
                    backgroundColor: "#f5f5f5",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "0.25rem",
                    marginRight: "0.5rem",
                  }}
                >
                  {post.category}
                </span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      backgroundColor: "#e3f2fd",
                      color: "#1e88e5",
                      padding: "0.2rem 0.5rem",
                      borderRadius: "0.25rem",
                      marginRight: "0.5rem",
                      fontSize: "0.75rem",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </Box>
            </Box>
          ))
        )}
      </Box>
    </Box>
  );
};

export default BlogPage;
