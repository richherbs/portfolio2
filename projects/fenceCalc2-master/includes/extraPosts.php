<?php   
    // if(!defined(SAFETORUN)){
    //     echo 'this file won\'t work on its own';
    //     die();
    // }

    function extraPosts(int $somePanels, int $somePosts){
        $extraPosts = $somePosts - ($somePanels + 1);
        if($extraPosts < 0){
            return 0;
        }
        return abs($extraPosts);
    }