<?php


$photos = $attributes['photos'];
?>

<section <?php echo get_block_wrapper_attributes(); ?> >
<div className="polaroids" style="">
      <?php for ($i = 0; $i < $photos; $i++):?>

            <div class="polaroid">
                  <img
                  src="<?php echo esc_url(add_query_arg('random', $i, 'https://picsum.photos/200/150')) ;?>"
                  width="200"
                  loading="lazy"
                  alt=""
                  />
            </div>

      <?php endfor; ?>
</div>


</section>