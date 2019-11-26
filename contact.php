<?php 

// head
include('./partials/_head.php');

?>

<main class="wrapper">
  
  <?php include('./partials/_header.php'); ?>

  <h2 class="pageLabel">Want to start a project?</h2>

  <section class="contact">
    <h3 class="sectionLabel">Let's Create Something Awesome Together</h3>

    <form class="form">
      <input type="text" id="name" placeholder="Your Name" required>
      <input type="text" id="email" placeholder="Your Email" required>
      <textarea name="message" id="message" cols="30" rows="10" placeholder="About Your Project"></textarea>
    
      <button class="button form-button" type="submit" value="Submit">Give It A Shot</button>
    </form>

  </section>

  <?php include('./partials/_footer.php'); ?>
  
</main>

<?php include('./partials/_foot.php'); ?>
