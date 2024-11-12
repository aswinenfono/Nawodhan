import React from 'react';

const HeaderCompo = ({ tagType = 'h1', text, className, children }) => {
    const Tag = tagType;  // Dynamically assign the tag

    // Check for valid tagType
    const validTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    if (!validTags.includes(tagType)) {
        return null;  // Return nothing if tagType is not valid
    }

    return (
        <Tag className={className}>
            {text || children || 'Default text'}  {/* Render text or a fallback */}
        </Tag>
    );
};

export default HeaderCompo;
