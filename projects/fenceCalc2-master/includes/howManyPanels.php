<?php
    // if(!defined(SAFETORUN)){
    //     echo 'this file won\'t work on its own';
    //     die();
    // }
    function howManyPanels(int $someLength){
        return $someLength / (APANEL + APOST);
    }