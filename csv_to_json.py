import csv
with open('rtk2.csv', newline='', encoding='utf-8') as csvfile:
     reader = csv.reader(csvfile, delimiter=',')
     for row in reader:
          #print(row[0])
          print(row[1])