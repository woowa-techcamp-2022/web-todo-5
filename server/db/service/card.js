const pool = require("../loader");
const promisePool = pool.promise();

module.exports = {
  createCard(data) {
    const { title, content, author, ordered, board } = data;

    if (!(title && content && author && ordered && board)) {
      throw Error("Invalid Card Data");
    }

    return promisePool.execute(`
      INSERT INTO
        card
      SET
        title = "${title}",
        content = "${content}",
        author = "${author}",
        ordered = ${ordered},
        board = ${board};
    `);
  },
};
