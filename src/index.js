module.exports = function reverse (int) {
    return (
        parseFloat (
            int
                .toString()
                .split('')
                .reverse()
                .join('')
        )
    )
}
