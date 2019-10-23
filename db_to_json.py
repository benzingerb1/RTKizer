#!/usr/bin/python
# -*- coding: utf-8 -*-
import mysql.connector, json

db = mysql.connector.connect(
    host='localhost',
    user='root',
    passwd='root',
    database='nihongoShark'
)
conn = db.cursor(dictionary=True)

def getKanjiKeywordDic():
    sql = '''
        SELECT kanji, keyword
        FROM note
        WHERE jlpt IN (5, 4, 3)
    '''
    conn.execute(sql)
    result = conn.fetchall()
    payload = {}
    for row in result:
        kanji = row['kanji']
        keyword = row['keyword']
        payload[keyword] = kanji
    return payload

data = getKanjiKeywordDic();
print(data)
with open('level3.json', 'w', encoding='utf8') as fp:
    json.dump(data, fp, indent=2, ensure_ascii=False)
