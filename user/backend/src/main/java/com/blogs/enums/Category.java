package com.blogs.enums;

public enum Category {
    SCIENCE_AND_TECHNOLOGY("Science & Technology"),
    SPORTS("Sports"),
    NEWS("News"),
    HUMANITIES("Humanities"),
    FINANCE("Finance");

    private final String displayName;

    Category(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }

    public static Category fromString(String category) {
        try {
            return Category.valueOf(category);
        } catch (IllegalArgumentException e) {
            throw new RuntimeException("Invalid category value: " + category);
        }
    }
}
