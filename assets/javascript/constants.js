testConstant = 100;
// bach = '<iframe width="640" height="360" src="https://www.youtube.com/embed/6JQm5aSjX6g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
// mozart = '<iframe width="640" height="360" src="https://www.youtube.com/embed/Rb0UmrCXxVA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
// debussy = '<iframe width="640" height="360" src="https://www.youtube.com/embed/OUx6ZY60uiI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
// beethoven = '<iframe width="640" height="360" src="https://www.youtube.com/embed/W-fFHeTX70Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
// strauss = '<iframe width="640" height="360" src="https://www.youtube.com/embed/d4AmYBhGBfM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
// dvorak = '<iframe width="640" height="360" src="https://www.youtube.com/embed/3nSEMJW7UqE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
// mendelssohn = '<iframe width="640" height="360" src="https://www.youtube.com/embed/sWiCHa9DFOY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
// brahms = '<iframe width="640" height="360" src="https://www.youtube.com/embed/zKrxesI3ziE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
// haydn = '<iframe width="640" height="360" src="https://www.youtube.com/embed/EmZF3kBZQ6E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
// schubert = '<iframe width="636" height="360" src="https://www.youtube.com/embed/iiChxN0T2kA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
// vivaldi = '<iframe width="640" height="360" src="https://www.youtube.com/embed/O6NRLYUThrY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
// chopin = '<iframe width="640" height="360" src="https://www.youtube.com/embed/wygy721nzRc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
// stravinsky = '<iframe width="640" height="360" src="https://www.youtube.com/embed/ne4PoC7V0Mk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
// handel = '<iframe width="640" height="360" src="https://www.youtube.com/embed/joVkx20oVIg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
// wagner = '<iframe width="362" height="360" src="https://www.youtube.com/embed/4i0TnNI6U-w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
// verdi = '<iframe width="640" height="360" src="https://www.youtube.com/embed/P6sz5b2w9Zc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
// schumann = '<iframe width="640" height="360" src="https://www.youtube.com/embed/P6sz5b2w9Zc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

// composer = {
//     lastName: String,
//     video: String,
// }

var composerArray = [
    { lastName: "bach", video: '<iframe src="https://www.youtube.com/embed/6JQm5aSjX6g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
    { lastName: "mozart", video: '<iframe src="https://www.youtube.com/embed/Rb0UmrCXxVA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
    { lastName: "debussy", video: '<iframe src="https://www.youtube.com/embed/OUx6ZY60uiI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
    { lastName: "beethoven", video: '<iframe src="https://www.youtube.com/embed/W-fFHeTX70Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
    { lastName: "strauss", video: '<iframe src="https://www.youtube.com/embed/d4AmYBhGBfM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
    { lastName: "dvorak", video: '<iframe src="https://www.youtube.com/embed/3nSEMJW7UqE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
    { lastName: "mendelssohn", video: '<iframe src="https://www.youtube.com/embed/sWiCHa9DFOY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
    { lastName: "brahms", video: '<iframe src="https://www.youtube.com/embed/zKrxesI3ziE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
    { lastName: "haydn", video: '<iframe src="https://www.youtube.com/embed/EmZF3kBZQ6E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
    { lastName: "schubert", video: '<iframe src="https://www.youtube.com/embed/iiChxN0T2kA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
    { lastName: "vivaldi", video: '<iframe src="https://www.youtube.com/embed/O6NRLYUThrY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
    { lastName: "chopin", video: '<iframe src="https://www.youtube.com/embed/wygy721nzRc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
    { lastName: "stravinsky", video: '<iframe src="https://www.youtube.com/embed/ne4PoC7V0Mk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
    { lastName: "handel", video: '<iframe src="https://www.youtube.com/embed/joVkx20oVIg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
    { lastName: "wagner", video: '<iframe src="https://www.youtube.com/embed/4i0TnNI6U-w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
    { lastName: "verdi", video: '<iframe src="https://www.youtube.com/embed/P6sz5b2w9Zc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
    { lastName: "schumann", video: '<iframe src="https://www.youtube.com/embed/QqEWbOzL_GQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' }
];
