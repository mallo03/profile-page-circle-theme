function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    
    let hero = document.getElementById('topsection')
    if (hero.className === 'topsection') {
        hero.className = 'dark-mode-top-section';
    } else {
        hero.className = 'topsection';
    }

    let one = document.getElementById('one')
    if (one.className === 'one') {
        one.className = 'one-dark-mode';
    } else {
        one.className = 'one';
    } 
    
    let list = document.getElementById('list1')
    if (list.className === 'list') {
        list.className = 'list-dark-mode';
    } else {
        list.className = 'list';
    } 

    let list2 = document.getElementById('list2')
    if (list2.className === 'list') {
        list2.className = 'list-dark-mode';
    } else {
        list2.className = 'list';
    } 

    let list3 = document.getElementById('list3')
    if (list3.className === 'list') {
        list3.className = 'list-dark-mode';
    } else {
        list3.className = 'list';
    }
    
    let homenav = document.getElementById('homenav')
    if (homenav.className === 'homenav') {
        homenav.className = 'homenav-dark-mode';
    } else {
        homenav.className = 'homenav';
    }

    let navbar = document.getElementById('navcolor')
    if (navbar.className === 'navcolor') {
        navbar.className = 'navcolor-dark-mode';
    } else {
        navbar.className = 'navcolor';
    }

    let about = document.getElementById('about')
    if (about.className === 'about') {
        about.className = 'about-dark-mode';
    } else {
        about.className = 'about';
    }

    let postssection = document.getElementById('posts-section')
    if (postssection.className === 'posts-section') {
        postssection.className = 'posts-section-dark-mode';
    } else {
        postssection.className = 'posts-section';
    }

    let footer = document.getElementById('footer')
    if (footer.className === 'footer') {
        footer.className = 'footer-dark-mode';
    } else {
        footer.className = 'footer';
    }

    let aboutme = document.getElementById('aboutme')
    if (aboutme.className === 'aboutme') {
        aboutme.className = 'aboutme-dark-mode';
    } else {
        aboutme.className = 'aboutme';
    }

    let about2 = document.getElementById('about2')
    if (about2.className === 'about2') {
        about2.className = 'about2-dark-mode';
    } else {
        about2.className = 'about2';
    }

    let about3 = document.getElementById('about3')
    if (about3.className === 'about3') {
        about3.className = 'about3-dark-mode';
    } else {
        about3.className = 'about3';
    }

    let social = document.getElementById('contact')
    if (social.className === 'social') {
        social.className = 'social-dark-mode';
    } else {
        social.className = 'social';
    }
}