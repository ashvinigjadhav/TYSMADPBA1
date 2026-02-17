import React, { useState } from "react";
import CourseCard from "../components/CourseCard.jsx";
import { COURSES_DATA, CATEGORIES } from "../data.js"; // CORRECT: Imports data structure

function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All'); 

  // Filtering logic: checks search term AND selected category
  const filteredCourses = COURSES_DATA.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    // Uses the correct class name for proper layout and spacing
    <div className="page courses-page"> 
      <h2 style={{textAlign: 'center', marginBottom: '30px', fontSize: '2rem', color: '#333'}}>
        Explore Our Full Catalog
      </h2>
      
      {/* Search and Filter Controls */}
      <div className="search-filter-controls" style={{marginBottom: '30px', display: 'flex', gap: '20px', alignItems: 'center', maxWidth: '800px', margin: '0 auto 30px'}}>
        
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{padding: '10px', borderRadius: '6px', border: '1px solid #ccc', flexGrow: 1}}
        />

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{padding: '10px', borderRadius: '6px', border: '1px solid #ccc'}}
        >
          <option value="All">All Categories</option> 
          {CATEGORIES.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Courses Grid */}
      <div className="courses-grid">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <CourseCard
              key={course.id}
              title={course.title}
              category={course.category}
              short={course.short}
              price={course.price}
              duration={course.duration}
              level={course.level}
              image={course.image}
            />
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '50px', color: '#777' }}>
            No courses found matching your criteria.
          </p>
        )}
      </div>
    </div>
  );
}

export default Courses;