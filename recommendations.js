const recommendActivities = (activities, preferences) => {
    return activities
        .filter(activity => activity.rating >= 4) // Filter high-rated activities
        .sort((a, b) => b.rating - a.rating); // Sort by rating descending
};

module.exports = { recommendActivities };
