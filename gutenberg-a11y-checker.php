<?php
/**
* Plugin Name: gutenberg-a11y-checker
* Plugin URI: https://github.com/GuntherTryThings/gutenberg-a11y-checker
* Description:
* Version: 0.1
* Author: Bálint "Günthi" Lengyel
* Author URI: https://github.com/GuntherTryThings
**/

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

final class GutenbergA11yChecker
{
    private static $instance = null;

    private function __construct () {}

    public static function getInstance ()
    {
        if (self::$instance == null)
        {
          self::$instance = new GutenbergA11yChecker();
        }
     
        return self::$instance;
    }

    public static function register()
    {
        $handle = 'GutenbergA11YInstance';
        $src = plugin_dir_url(__FILE__) . '/assets/bundle.js';
        $deps = null;
        $ver = false;
        $in_footer = true;

        wp_register_script( $handle, $src, $deps, $ver, $in_footer );
        wp_enqueue_script( $handle );
    }
}

if (is_admin()) {
    GutenbergA11yChecker::getInstance()::register();
}