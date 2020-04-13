<?php

if(!defined('SAFETORUN')){
    echo 'this file won\'t work on its own';
    die();
}
/**
 * Returns a string representation of a fence
 *
 * @param integer $someLength
 * @return string
 */
function displayFenceMaterials(int $someLength, int $extraPosts = 0) : string{
    $fence = '';
    $panels = howManyPanels($someLength);
    $posts = $panels + 1;
    
    for($i = 0; $i < $panels ; $i++){
        $fence .= '<img class="fence-posts" src="images/post.png" alt="a fence post">';
        $fence .= '<img class="fence-panel" src="images/panel.png" alt="a fence panel">';
    }

    $fence .= '<img class="fence-posts" src="images/post.png" alt="a fence post"></div>';

    if($extraPosts > 0){
        $fence .= '<h2>Extra Posts</h2>';
        $fence .= '<div class="fence-container">';
        for($i = 0; $i < $extraPosts ; $i++){
            $fence .= '<img class="fence-posts fence-post-gap" src="images/post.png" alt="a fence post">';
        }
        $fence .= '</div>';
    }

    return $fence;
}