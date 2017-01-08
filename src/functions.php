<?php
  // Add in our bundle.js
  function load_bundle () {
    wp_enqueue_script('bundle', get_template_directory_uri() . '/js/bundle.js');
  }
  add_action('wp_enqueue_scripts','load_bundle');
?>
