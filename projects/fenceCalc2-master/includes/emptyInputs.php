<?php

function emptyInputs(){
        return empty($_POST['length']) && empty($_POST['panels']) && empty($_POST['posts']);
    }