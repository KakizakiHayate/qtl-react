import mysql from 'mysql2/promise';
// データベース接続設定
const connection = await mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: '',
    port: 0
});

export default async function handler(req, res) {
    try {
        // データベースクエリの実行
        const [rows, fields] = await connection.execute('SELECT * FROM test_qtl');

        // クエリ結果のレスポンス
        res.status(200).json(rows);
    } catch (error) {
        // エラー処理
        res.status(500).json({ message: 'Database query failed', error });
    } finally {
        // データベース接続の終了
        // await connection.end();
    }
}
