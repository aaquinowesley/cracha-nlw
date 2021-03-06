
const LinksSocialMedia = {
    github: "aaquinowesley",
    youtube: "watch?v=XZ4WXAxtGDc&ab_channel=GreenredProductions-RelaxingMusic",
    facebook: "wesleydiasbsb",
    instagram: "aaquinowesley",
    twitter: "aaquinowesley"
}

function changeSocialMediaLinks(){
    for (let li of socialLinks.children){
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    }

}

changeSocialMediaLinks()

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.textContent.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()