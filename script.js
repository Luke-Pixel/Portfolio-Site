let theme = localStorage.getItem('theme')
if(theme == null ){
    setTheme('light')
}else{
    setTheme(theme)
}
let themeDots = document.getElementsByClassName('theme-dot')

for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

//check for chamges in system light / dark mode
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    setTheme(theme)
});

//set theme on user update
function setTheme(mode){
    if(mode == 'light'){
        setLight()
    }

    if(mode == 'dark'){
        setDark()
    }

    //if sysytem theme selected check system theme
    if(mode == 'system'){
        let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if(matched){
            setDark()
        }else{
            setLight()
        }
    }

    //update stored theme 
    localStorage.setItem('theme', mode)
}

//set dark mode
function setDark(){
    document.getElementById('theme-style').href= 'dark.css'
}

//set light mode
function setLight(){
    document.getElementById('theme-style').href= 'default.css'
}