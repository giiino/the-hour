const { exec, escape } = require('../db/mysql')

const newComment = ({ content, fromUserName, newsId, userPhoto }) => {
  const addtime = new Date()
  const sql = `
    UPDATE news
    SET comment = JSON_ARRAY_APPEND(
        comment, 
        '$', 
        JSON_OBJECT(
            'content', '${content}',
            'fromUserName', '${fromUserName}',
            'userPhoto', '${userPhoto}',
            'addtime', '${addtime}'
        )
    ) 
    WHERE id = ${escape(newsId)};
`
  return exec(sql)
}

module.exports = { newComment }
