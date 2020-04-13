<?php 

if(!defined('SAFETORUN')){
    echo 'You can\'t run this file on its own.';
    die;
}

/**
 * Takes in a database query as an array and generates the options for an html selector
 *
 * @param array $aDBQuery
 * @return void
 */
function populateSelector(array $aDBQuery, string $default) : string{
    $result = '';
    foreach($aDBQuery as $anItem){
        $id = $anItem['id'];
        $name = $anItem['name'];
        if($default != $name){
            $result .= "<option value='$id'>$name</option><br>";
        }else {
            $result .= "<option value='$id' selected>$name</option><br>";
        }
    }
    return $result;
}
/**
 * Creates a query to return the info in a table using an existing db connection 
 *
 * @param PDO $aDBConn
 * @param string $aColumnName
 * @param string $aTableName
 * @return array
 */
function selectorQuery(PDO $aDBConn, string $aColumnName, string $aTableName) : array {
    $query = $aDBConn->prepare("SELECT id, $aColumnName as name FROM $aTableName");
    $query->execute();
    $result = $query->fetchAll();
    return $result;
}
        