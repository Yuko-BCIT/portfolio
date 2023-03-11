const capCode2 =
`<?php
$args = array(
    'post_type'      => 'tweel-location',
    'posts_per_page' => -1
);

$query = new WP_Query($args);

if ($query->have_posts()) {
    echo '<div class="acf-map" data-zoom="13">';

    while ($query->have_posts()) {
        $query->the_post();

        if (function_exists('get_field')) {
            if (get_field('map')) {
                // output address and phone number on click
                $location = get_field('map');
                $phone = get_field('phone');
?>
                <div class="marker" data-lat="<?php echo esc_attr($location['lat']); ?>" data-lng="<?php echo esc_attr($location['lng']); ?>">
                    <!-- CPT location name -->
                    <h2><?php the_title(); ?></h2>

                    <!-- ACF fields -->
                    <p><em><?php echo esc_html($location['address']); ?></em></p>
                    <p><?php echo esc_html($phone); ?></p>
                </div>
<?php
            }
        }
    }
    echo '</div>';
}
`;

export default capCode2