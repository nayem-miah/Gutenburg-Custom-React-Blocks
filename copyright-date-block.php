<?php


if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}


function create_block_copyright_date_block_block_init() {
	register_block_type( __DIR__ . '/build/copyright-date-block' );
	register_block_type( __DIR__ . '/build/nayem-subcription' );
	register_block_type( __DIR__ . '/build/tailwind-test' );
	register_block_type( __DIR__ . '/build/polaroid-generator' );
}
add_action( 'init', 'create_block_copyright_date_block_block_init' );
