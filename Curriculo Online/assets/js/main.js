
function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name
    

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto: ${profileData.email}`

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel: ${profileData.phone}`

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')

    softSkills.innerHTML = profileData.skills.SoftSkills.map(skill => `<li>${skill}</li>`).join('')
}

(async function () {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
})()