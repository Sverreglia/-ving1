<?php 
$currentPage = $_SERVER['PHP_SELF'];


?>
<header>
    <nav>
        <div>
            <a class="<?= $currentPage == '/øving1/index.php' ? 'active' : '' ?>" href="/øving1/">Hjem</a>
            <a class="<?= $currentPage == '/øving1/om-meg/index.php' ? 'active' : '' ?>" href="/øving1/om-meg">Om meg</a>
        </div>
        <div>
            <img id="lightModeButton" src="/øving1/images/icons/sun.png">
        </div>
    </nav>
</header>


