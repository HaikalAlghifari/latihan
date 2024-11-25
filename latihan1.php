<?php
function test(){
    $a = 10;
    $b = 20;

    echo "a awal = ". $a . "<br>";
    echo "b awal = ". $b. "<br>";

    [$a,$b] = [$b, $a];

    echo "a final = ". $a . "<br>";
    echo "b final = ". $b;

}
test();