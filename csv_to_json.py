import csv
from operator import itemgetter

with open('rtk2.csv', newline='', encoding='utf-8') as csvfile:
     reader = csv.reader(csvfile, delimiter=',')
     
     header = next(reader)
     rows = [header] + [[row[0], row[1], int(row[4])] for row in reader]
     
     for row in rows:
          print(row)
     
     
     
     csvRtkIndex = 4
     
     reader = sorted(reader, key=itemgetter(csvRtkIndex))
     for row in reader:
          kanji = row[0]
          english = row[1]
          if english == '':
               continue
          print(f'"{english}" : "{kanji}",')