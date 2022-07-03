<?php

if(file_get_contents('./storage/restaurant3.json')){
    $json = file_get_contents('./storage/restaurant3.json');
    echo $json;
}

$ch = curl_init();

// set url
curl_setopt($ch, CURLOPT_URL, "www.freefood.sk/menu/");

//return the transfer as a string
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

// $output contains the output string
$output = curl_exec($ch);

// close curl resource to free up system resources
curl_close($ch);

$dom = new DOMDocument();

@$dom->loadHTML($output);
$dom->preserveWhiteSpace = false;

$foods = [
    ["date" => date('d.m.Y', strtotime('monday this week')), "day" => "Pondelok", "menu" => []],
    ["date" => date('d.m.Y', strtotime('tuesday this week')), "day" => "Utorok", "menu" => []],
    ["date" => date('d.m.Y', strtotime('wednesday this week')), "day" => "Streda", "menu" => []],
    ["date" => date('d.m.Y', strtotime('thursday this week')), "day" => "Štvrtok", "menu" => []],
    ["date" => date('d.m.Y', strtotime('friday this week')), "day" => "Piatok", "menu" => []],
];

$node = $dom->getElementById("fiit-food");

$index = 0;

$testNode = $node->childNodes->item(3)->childNodes->item(3);

foreach ($testNode->childNodes as $menuItem) {
    if($menuItem->childNodes->item(0)->nodeValue) {
        $day = trim($menuItem->childNodes->item(0)->nodeValue);

        foreach ($menuItem->childNodes->item(1)->childNodes as $test) {

            $name = trim($test->childNodes->item(1)->nodeValue);

            $price = trim($test->childNodes->item(2)->nodeValue);

            array_push($foods[$index]["menu"], "$name: $price");
        }
        $index++;
    }
}

$fp = fopen('./storage/restaurant3.json', 'w');
fwrite($fp, json_encode($foods, JSON_UNESCAPED_UNICODE));
fclose($fp);