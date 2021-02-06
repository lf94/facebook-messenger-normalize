document.addEventListener('DOMContentLoaded', () => {
  getPic();
});

function getPic() {
  return setTimeout(() => {
    const svg = document.querySelector('svg');
    if (!svg) { return getPic(); }
    
    const profilePictureHref = svg.querySelector('image').href.baseVal;
    
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `[data-testid="outgoing_group"] > [role="row"]:last-of-type::before {
        width: 28px;
        height: 28px;
        margin: 0 8px;
        background-image: url('${profilePictureHref}');
        background-position: center;
        background-size: cover;
        border-radius: 100%;
      }`;
    document.getElementsByTagName('head')[0].appendChild(style);
  }, 1);
}
