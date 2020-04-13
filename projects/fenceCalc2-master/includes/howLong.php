<?php

    // if(!defined(SAFETORUN)){
    //     echo 'this file won\'t work on its own';
    //     die();
    // }

    function howLong (float $somePanels) : int {

        return ($somePanels - APOST) * (APANEL + APOST);
    }