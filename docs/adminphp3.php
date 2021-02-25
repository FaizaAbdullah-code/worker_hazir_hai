<?php

$dates=array
(
    "Nov 18, 2011" => array
        (
            0 => 'C',
            1 => 'I',
            2 => 'S'
        ),

    "Nov 22, 2011" => array
        (
            0 => 'C',
            1 => 'S'
        )

);

echo "<table>\n";
foreach( $dates as $date ) {
  echo "\t<tr>\n";
  foreach( $date as $value ) {
    echo "\t\t<td>".$value."</td>\n";
  }
  echo "\t</tr>\n";
}
echo '</table>';


?>