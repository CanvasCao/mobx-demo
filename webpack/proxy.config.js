const mockData = {
    local: "http://localhost:2333", // docker mock data
}

module.exports = {
    context: pathname => !!pathname.match("^/api"),
    target: mockData.local,
    changeOrigin: true,
}
