<?php

// open rtk csv and create an array out of it
$file = 'rtk.csv';
$csv = array_map('str_getcsv', file($file));
array_walk($csv, function(&$a) use ($csv) {
  $a = array_combine($csv[0], $a);
});
array_shift($csv); # remove column header

echo "<pre>";
foreach ($csv as $row){

  $kanji = $row['Kanji'];
  $english = $row['Heisig Keyword'];
  if ($english == '') continue;
  $index = (int) $row['Heisig RTK Index'];
  if ($index > 100) continue;
  echo "\"$english\" : \"$kanji\",\n";

}